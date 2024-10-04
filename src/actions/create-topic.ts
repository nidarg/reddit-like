'use server';

import { z } from 'zod';
import { auth } from '@/auth';
import type { Topic } from '@prisma/client';
import paths from '@/paths';
import { redirect } from 'next/navigation';
import prisma from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

const createTopicSchema = z.object({
  name: z
    .string()
    .min(3)
    .regex(/^[a-z-]+$/, {
      message: 'Must  be lower case letters or dashes without spaces',
    }),
  description: z.string().min(10),
  // Add more fields as needed
});

export interface CreateTopicFormState {
  errors: {
    name?: string[];
    description?: string[];
    _form?: string[];
  };
}

export async function createTopic(
  formState: CreateTopicFormState,
  formData: FormData
): Promise<CreateTopicFormState> {
  const name = formData.get('name');
  const description = formData.get('description');
  const result = createTopicSchema.safeParse({ name, description });

  if (!result.success) {
    return { errors: result.error.flatten().fieldErrors };
  }

  const session = await auth();
  if (!session || !session.user) {
    return {
      errors: {
        _form: ['You must be signed in to do this'],
      },
    };
  }

  let topic: Topic;

  try {
    topic = await prisma.topic.create({
      data: {
        slug: result.data.name,
        description: result.data.description,
      },
    });
  } catch (error) {
    if (error instanceof Error) {
      return {
        errors: {
          _form: [error.message],
        },
      };
    } else {
      return {
        errors: {
          _form: ['An error occurred while creating the topic'],
        },
      };
    }
  }
  revalidatePath('/');
  redirect(paths.topic(topic.slug));
}
