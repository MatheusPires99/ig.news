import { AppProps } from 'next/app';
import { Provider as NextAuthProvider } from 'next-auth/client';

import { ThemeProvider } from 'styled-components';

import { Header } from '../components';
import GlobalStyles from '../styles/global';
import theme from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <NextAuthProvider session={pageProps.session}>
        <Header />
        <Component {...pageProps} />
      </NextAuthProvider>
    </ThemeProvider>
  );
}

export default MyApp;
