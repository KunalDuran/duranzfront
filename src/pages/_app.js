import '../../styles/globals.css'
import AppBarContent from './../layout/AppBar'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Head from 'next/head'

const theme = createTheme({
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  }
});


export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Duranz Stats</title>
        <meta name="description" content="cricket stats application" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon.png"></link>
        <meta name="theme-color" content="#fff" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBarContent>
          <Component {...pageProps} />
        </AppBarContent>
      </ThemeProvider>
    </>
  )
}
