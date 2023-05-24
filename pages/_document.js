/**
 * used for reconfigure the default next document, and will be the core of the html file in this aplication
 * this file is only rendered on the server side
 * 
 */
import Document, { Html, Head, Main, NextScript } from "next/document";
class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <meta name="description" content="my SEO React app with Next JS" />
          <meta name="keywords" content="next react seo" />
          <meta name="author" content="Nevo" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
