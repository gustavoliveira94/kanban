import type { AppProps } from 'next/app';
import Head from 'next/head';

import { wrapper } from 'store';

import Background from 'components/Background';
import { GlobalStyles } from 'styles/globals';

import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Kanban</title>
      </Head>
      <Background>
        <Component {...pageProps} />
        <GlobalStyles />
      </Background>
    </>
  );
}
export default wrapper.withRedux(MyApp);
