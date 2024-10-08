import prisma from '@/lib/prisma';
import paths from '@/paths';
import Link from 'next/link';
import FormButton from '../common/FormButton';

export default async function TopicList() {
  const topics = await prisma.topic.findMany();

  return (
    <div className='flex flex-row flex-wrap gap-2'>
      {topics.map((topic) => {
        return (
          <Link key={topic.id} href={paths.topic(topic.slug)}>
            <FormButton
              variant='link'
              type='button'
              customClassName='p-2 shadow-lg border rounded-lg transform transition duration-500  hover:scale-110 hover:bg-warning'
            >
              {topic.slug}
            </FormButton>
          </Link>
        );
      })}
    </div>
  );
}
