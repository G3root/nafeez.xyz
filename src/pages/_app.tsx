import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { KbarModal } from '@/components/common';
import { SessionProvider } from 'next-auth/react';
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <ThemeProvider attribute="class">
        <KbarModal>
          <Component {...pageProps} />
        </KbarModal>
      </ThemeProvider>
    </SessionProvider>
  );
}

export default MyApp;
