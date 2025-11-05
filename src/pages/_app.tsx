import type { AppProps } from "next/app";
import Head from "next/head";
import "@/styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Imobiliária Estelar</title>
        <meta
          name="description"
          content="Encontre imóveis incríveis com o corretor Estelar. Casas, apartamentos e terrenos com o melhor atendimento."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}
