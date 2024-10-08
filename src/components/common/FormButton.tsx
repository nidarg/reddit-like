'use client';
import React from 'react';
import { useFormStatus } from 'react-dom';
import { Button } from '../ui/button';
import { Loader2 } from 'lucide-react';

interface FromButtonProps {
  type: 'submit' | 'reset' | 'button';
  variant:
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | 'link';
  customClassName?: string;
  children: React.ReactNode;
}

export default function FormButton(props: FromButtonProps) {
  const { pending } = useFormStatus();

  return (
    <Button
      type={props.type as 'submit' | 'reset' | 'button'}
      variant={
        props.variant as
          | 'default'
          | 'destructive'
          | 'outline'
          | 'secondary'
          | 'ghost'
          | 'link'
      }
      className={`${props.customClassName}`}
      disabled={pending}
    >
      {pending ? (
        <Loader2 className='mr-2 h-4 w-4 animate-spin' />
      ) : (
        props.children
      )}
    </Button>
  );
}
