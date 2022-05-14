import { AppProviders } from '@/contexts';
import GlobalStyle from '@/styles/global';

import { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProviders>
      <GlobalStyle />
      <Component {...pageProps} />
    </AppProviders>
  );
}
