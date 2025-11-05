import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {



  return (
    <Html lang="pt-BR">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://fonts.googleapis.com/css2?family=Urbanist:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />

      </Head>
      <body>
        <Main /> {/* onde o React monta o conteúdo */}
        <NextScript /> {/* scripts Next.js essenciais */}
      </body>
    </Html>
  );
}
