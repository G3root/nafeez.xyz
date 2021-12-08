import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { KbarModal } from '@/components/common';
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <KbarModal>
        <Component {...pageProps} />
      </KbarModal>
    </ThemeProvider>
  );
}

export default MyApp;
