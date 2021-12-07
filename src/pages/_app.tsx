import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { KBarProvider } from 'kbar';
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <KBarProvider>
        <Component {...pageProps} />
      </KBarProvider>
    </ThemeProvider>
  );
}

export default MyApp;
