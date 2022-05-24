import Head from 'next/head';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Lucas Bargas - Calculadora</title>
        <meta name="description" content="Calculadora simples desenvolvida por Lucas Bargas com o Framework NextJS e estilizada com SCSS." />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Lucas Bargas - Calculadora" />
        <meta property="og:site_name" content="Lucas Bargas - Calculadora" />
        <meta property="og:description" content="Calculadora simples desenvolvida por Lucas Bargas com o Framework NextJS e estilizada com SCSS. " />
        <meta property="og:url" content="https://simple-calculator-lucasbargas.vercel.app/" />
      </Head>

      <Component {...pageProps} />
    </>
  )
}

export default MyApp;
