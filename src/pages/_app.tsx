import { useEffect } from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import useTranslation from '../locales';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
  const t = useTranslation();

  useEffect(() => {
    console.log('¯\\_(ツ)_/¯');
  }, []);

  return (
    <>
      <Head>
        <title>{t('common:site-domain')}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/assets/favicon.ico" />
      </Head>

      <Navbar />

      <Component {...pageProps} />

      <Footer />
    </>
  );
}

export default MyApp;
