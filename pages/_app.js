import Head from 'next/head';
import Layout from '../components/layout/layout';
import { UiContextProvider } from '../store/ui-context';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <UiContextProvider>
      <Layout>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </UiContextProvider>
  );
}

export default MyApp;
