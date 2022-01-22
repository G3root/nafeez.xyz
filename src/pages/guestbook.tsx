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
    <MainLayout
      title="Nafees Nazik – Guestbook"
      description="a place to leave a comment. It could be anything – appreciation,
      information, wisdom, or even humor. Surprise me!"
      image="https://i.microlink.io/https%3A%2F%2Fcards.microlink.io%2F%3Fpreset%3Dpaco%26title%3DNafeez.xyz%2B-%2BGuestbook%26p%3D2gO1PEZsZXgKICBzeD17ewogICAgYWxpZ25JdGVtczogImZsZXgtZW5kIiwKICAgIGJnOiBxdWVyeS5iZywKICAgIGNvbG9yOiBxdWVyeS5jb2xvciwKICAgIHBhZGRpbmc6IDgwLAogIH19Cj4KICA8RmxleAogICAgc3g9e3sKICAgICAganVzdGlmeUNvbnRlbnQ6ICJzcGFjZS1iZXR3ZWVuIiwKICAgICAgYWxpZ25JdGVtczogImZsZXgtZW5kIiwKICAgIH19CiAgPgogICAgPExpbmsKICAgICAgaHJlZj0iaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1JbnRlcjp3Z2h0QDcwMCZkaXNwbGF5PWJsb2NrIgogICAgICByZWw9InN0eWxlc2hlZXQiCiAgICAvPgogICAgPFRleHQKICAgICAgc3g9e3sKICAgICAgICBmb250RmFtaWx5OiAiSW50ZXIiLAogICAgICAgIGZvbnRTaXplOiA1NSwKICAgICAgICBmb250V2VpZ2h0OiA3MDAsCiAgICAgICAgbGluZUhlaWdodDogIjEwMCUiLAogICAgICAgIGxldHRlclNwYWNpbmc6ICItNHB4IiwKICAgICAgICBmbGV4OiAiMCAxIDYwJSIsCiAgICAgIH19CiAgICA-CiAgICAgIHtxdWVyeS50aXRsZX0KICAgIDwvVGV4dD4KICAgIDxGbGV4IHN4PXt7IGdhcDogMjAsIGFsaWduSXRlbXM6ICJjZW50ZXIiIH19PgogICAgICA8Qm94CiAgICAgICAgc3g9e3sKICAgICAgICAgIGJhY2tncm91bmRJbWFnZToKICAgICAgICAgICAgImxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiKDIzNiwgNzIsIDE1MyksIHJnYigyMzksIDY4LCA2OCksIHJnYigyNDUsIDE1OCwgMTEpKSIsCiAgICAgICAgICBoZWlnaHQ6ICI0MHB4IiwKICAgICAgICAgIHdpZHRoOiAiNDBweCIsCiAgICAgICAgICBib3JkZXJSYWRpdXM6ICI5OTk5cHgiCiAgICAgICAgfX0KICAgICAgLz4KICAgICAgPFRleHQgc3g9e3sgZm9udFdlaWdodDogNTAwIH19Pk5hZmVlcyBOYXppazwvVGV4dD4KICAgIDwvRmxleD4KICA8L0ZsZXg-CjwvRmxleD47Cg"
    >
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
