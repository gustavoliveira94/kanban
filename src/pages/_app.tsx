import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ToastContainer } from 'react-toastify';

import { wrapper } from 'store';

import Background from 'components/Background';
import { GlobalStyles } from 'styles/globals';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Kanban</title>
      </Head>
      <Background>
        <Component {...pageProps} />
        <GlobalStyles />
        <ToastContainer />
      </Background>
    </>
  );
}
export default wrapper.withRedux(MyApp);
