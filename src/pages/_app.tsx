import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyle from '../styles/global'
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

function App({ Component, pageProps }: AppProps) {
  const client = new ApolloClient({
    uri: 'http://localhost:1337/graphql',
    cache: new InMemoryCache()
  })


  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Head>
          <title>Won Games</title>
          <link rel="shortcut icon" href="/img/Logo.png" />
          <link rel="apple-touch-icon" href="/img/Logo.png" />
          <meta name="description" content="A simple project" />
          <link rel='manifest' href='/manifest.json' />
        </Head>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default App
