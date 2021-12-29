import * as React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { unstable_ClassNameGenerator as classNameGenerator } from "@mui/material/utils";
import type { NextPage } from "next";

import createEmtionCache from "../util/emtionCache";
import theme from "../styles/theme";
import { ApolloProvider } from "@apollo/client";
import { client } from "../graphql/client";
import { Provider } from "../context/Provider";

// rename classNames if you want

// classNameGenerator.configure(
//   (componentName) => `ui-${componentName.replace("Mui", "")}`
// );

const clientSideEmtionCache = createEmtionCache();

type NextPageWidthLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
  Component: NextPageWidthLayout;
}

function App(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmtionCache, pageProps } = props;

  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>CasaTalk -- stay Connected with your friends</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ApolloProvider client={client}>
          <Provider>{getLayout(<Component {...pageProps} />)}</Provider>
        </ApolloProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;
