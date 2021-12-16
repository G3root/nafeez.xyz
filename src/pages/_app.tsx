import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { KbarModal } from '@/components/common';
import { SessionProvider } from 'next-auth/react';
import { Toaster } from 'react-hot-toast';
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <ThemeProvider attribute="class">
        <KbarModal>
          <Component {...pageProps} />
          <Toaster />
        </KbarModal>
      </ThemeProvider>
    </SessionProvider>
  );
}

export default MyApp;
