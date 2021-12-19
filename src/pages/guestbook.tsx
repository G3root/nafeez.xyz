import type { InferGetStaticPropsType } from 'next';
import { MainLayout } from '@/components/layout';
import { ContentPopover } from '@/components/guestBook';
import { fetchGuestbookEntries } from '@/lib/queries';
import { GuestBookContent } from '@/components/guestBook';

export const getStaticProps = async () => {
  const data = await fetchGuestbookEntries();

  const entries = data.map((entry) => ({
    id: entry.id,
    body: entry.body,
    createdBy: entry.createdBy.toString(),
    createdAt: entry.createdAt.toString()
  }));
  return {
    props: { entries, revalidate: 60 } //revalidate every minute
  };
};

const GuestBookPage = ({
  entries
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <MainLayout>
      <div className="flex flex-col items-start justify-center max-w-7xl mx-auto mb-16 w-full">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-gray-800 md:text-5xl dark:text-white">
          Guestbook
        </h1>
        <div>
          <p className="mb-4 text-gray-600 dark:text-gray-400 max-w-lg">
            Leave a comment below. It could be anything – appreciation,
            information, wisdom, or even humor. Surprise me!
          </p>
        </div>
        <ContentPopover />
        <GuestBookContent data={entries} />
      </div>
    </MainLayout>
  );
};

export default GuestBookPage;
