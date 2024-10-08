import { Button } from '@nextui-org/react';
import Image from 'next/image';
import * as actions from '@/actions';
import { auth } from '@/auth';
import Profile from '@/components/Profile';
import TopicCreateForm from '@/components/topic/TopicCreateForm';
import TopicList from '@/components/topic/TopicList';
import { Separator } from '@/components/ui/separator';

export default async function Home() {
  return (
    <>
      <div className='grid grid-cols-4 gap-4'>
        <div className='col-span-3'>
          <h1 className='text-xl m-2'>Posts List</h1>
        </div>

        <div className='border shadow-lg py-3 px-3'>
          <TopicCreateForm />
          <Separator className='my-4' />
          <h3 className='text-lg p-3 font-bold'>Topics</h3>
          <TopicList />
        </div>
      </div>
    </>
  );
}
