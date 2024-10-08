import PostCreateForm from '@/components/posts/PostCreateForm';
import React from 'react';

interface TopicPageProps {
  params: {
    topicId: string;
  };
}

export default async function TopicPage({ params }: TopicPageProps) {
  const { topicId } = params;
  return (
    <div className='grid grid-cols-4 gap-4 p-4'>
      <div className='col-span-3'>
        <h1 className='text-2xl font-bold mb-2'>{topicId}</h1>
      </div>
      <div>
        <PostCreateForm />
      </div>
    </div>
  );
}
