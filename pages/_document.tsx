import * as React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import createEmotionServer from "@emotion/server/create-instance";
import theme from "../styles/theme";
import createEmtionCache from "../util/emtionCache";

class AppDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="theme-color" content={theme.palette.primary.main} />
        </Head>
        <body style={{ backgroundColor: "#f1f1e6" }}>
          <Main />
          <NextScript />
          <div id="navigation-drawer" />
          <div id="register" />
        </body>
      </Html>
    );
  }
}

AppDocument.getInitialProps = async (ctx) => {
  const originalRenderPage = ctx.renderPage;

  const cache = createEmtionCache();

  const { extractCriticalToChunks } = createEmotionServer(cache);

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App: any) =>
        function EnhanceApp(props) {
          return <App emotionCache={cache} {...props} />;
        },
    });
  const initialProps = await Document.getInitialProps(ctx);

  const emtionStyles = extractCriticalToChunks(initialProps.html);
  const emtionStyleTags = emtionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(" ")}`}
      key={style.key}
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));

  return {
    ...initialProps,
    styles: [...React.Children.toArray(initialProps.styles), ...emtionStyleTags],
  };
};

export default AppDocument;
