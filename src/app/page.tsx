import { Button } from '@nextui-org/react';
import Image from 'next/image';
import * as actions from '@/actions';
import { auth } from '@/auth';
import Profile from '@/components/Profile';
import TopicCreateForm from '@/components/topic/TopicCreateForm';

export default async function Home() {
  return (
    <>
      <div className='grid grid-cols-4 gap-4'>
        <div className='col-span-3'>
          <h1 className='text-xl m-2'>Posts List</h1>
        </div>
        <TopicCreateForm />
      </div>
    </>
  );
}
