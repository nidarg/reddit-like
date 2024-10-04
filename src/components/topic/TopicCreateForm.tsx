'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Textarea } from '../ui/textarea';
import * as actions from '@/actions';
import { useFormState } from 'react-dom';

export default function TopicCreateForm() {
  const [formState, action] = useFormState(actions.createTopic, { errors: {} });
  const { errors } = formState;
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className='m-4' variant='default'>
          Create New Topic
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-96 mt-4 '>
        <form action={action}>
          <div className='flex flex-col gap-4'>
            <Label htmlFor='name'>Name</Label>
            <Input
              name='name'
              id='name'
              className={errors.name ? 'bg-red-200 ' : ''}
            />
            {errors.name &&
              errors.name.map((e) => {
                return <p className='text-red-600 text-sm'>{e}</p>;
              })}
            <Label htmlFor='Description'>Description</Label>
            <Textarea
              rows={10}
              className={errors.description ? 'bg-red-200 ' : ''}
              name='description'
              id='Description'
              placeholder='Describe your topic.'
            />
            {errors.description &&
              errors.description.map((e) => {
                return <p className='text-red-600 text-sm'>{e}</p>;
              })}

            {formState.errors._form && (
              <div className='bg-red-200 rounded-md'>
                {formState.errors._form.map((e) => {
                  return <p className='p-4 text-red-600 text-sm'>{e}</p>;
                })}
              </div>
            )}

            <Button type='submit' variant='default'>
              Submit
            </Button>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
}
