import * as React from 'react';
import { Navbar } from '../common';
import Head from 'next/head';
import { useRouter } from 'next/router';
export interface IMainLayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  image?: string;
}

export function MainLayout({ children, ...customMeta }: IMainLayoutProps) {
  const router = useRouter();
  const meta = {
    title:
      'Nafees Nazik – UI developer interested in design systems and Interfaces.',
    description: `UI developer interested in design systems and Interfaces.`,
    image:
      'https://i.microlink.io/https%3A%2F%2Fcards.microlink.io%2F%3Fpreset%3Dpaco%26title%3D%2BDeveloper%2Bwho%2Bloves%2Bcreating%2Binterfaces%2Band%2Bwebsites.%26p%3D2gO1PEZsZXgKICBzeD17ewogICAgYWxpZ25JdGVtczogImZsZXgtZW5kIiwKICAgIGJnOiBxdWVyeS5iZywKICAgIGNvbG9yOiBxdWVyeS5jb2xvciwKICAgIHBhZGRpbmc6IDgwLAogIH19Cj4KICA8RmxleAogICAgc3g9e3sKICAgICAganVzdGlmeUNvbnRlbnQ6ICJzcGFjZS1iZXR3ZWVuIiwKICAgICAgYWxpZ25JdGVtczogImZsZXgtZW5kIiwKICAgIH19CiAgPgogICAgPExpbmsKICAgICAgaHJlZj0iaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1JbnRlcjp3Z2h0QDcwMCZkaXNwbGF5PWJsb2NrIgogICAgICByZWw9InN0eWxlc2hlZXQiCiAgICAvPgogICAgPFRleHQKICAgICAgc3g9e3sKICAgICAgICBmb250RmFtaWx5OiAiSW50ZXIiLAogICAgICAgIGZvbnRTaXplOiA1NSwKICAgICAgICBmb250V2VpZ2h0OiA3MDAsCiAgICAgICAgbGluZUhlaWdodDogIjEwMCUiLAogICAgICAgIGxldHRlclNwYWNpbmc6ICItNHB4IiwKICAgICAgICBmbGV4OiAiMCAxIDYwJSIsCiAgICAgIH19CiAgICA-CiAgICAgIHtxdWVyeS50aXRsZX0KICAgIDwvVGV4dD4KICAgIDxGbGV4IHN4PXt7IGdhcDogMjAsIGFsaWduSXRlbXM6ICJjZW50ZXIiIH19PgogICAgICA8Qm94CiAgICAgICAgc3g9e3sKICAgICAgICAgIGJhY2tncm91bmRJbWFnZToKICAgICAgICAgICAgImxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiKDIzNiwgNzIsIDE1MyksIHJnYigyMzksIDY4LCA2OCksIHJnYigyNDUsIDE1OCwgMTEpKSIsCiAgICAgICAgICBoZWlnaHQ6ICI0MHB4IiwKICAgICAgICAgIHdpZHRoOiAiNDBweCIsCiAgICAgICAgICBib3JkZXJSYWRpdXM6ICI5OTk5cHgiCiAgICAgICAgfX0KICAgICAgLz4KICAgICAgPFRleHQgc3g9e3sgZm9udFdlaWdodDogNTAwIH19Pk5hZmVlcyBOYXppazwvVGV4dD4KICAgIDwvRmxleD4KICA8L0ZsZXg-CjwvRmxleD47Cg',
    type: 'website',
    ...customMeta
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://nafeez.xyz${router.asPath}`}
        />
        <link rel="canonical" href={`https://nafeez.xyz${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Nafees Nazik" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@leeerob" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>
      <Navbar />
      <main
        id="skip"
        className="mb-8 flex flex-col justify-center bg-gray-50 px-8 dark:bg-gray-900"
      >
        {children}
      </main>
    </>
  );
}
