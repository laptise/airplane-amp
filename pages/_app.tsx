import { AppProps } from "next/app";
import Head from "next/head";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { purple } from "@mui/material/colors";
import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: "#f44336",
    },
  },
});

const App = ({ Component, pageProps }: AppProps) => (
  <SessionProvider session={pageProps.session}>
    <Head>
      <title />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  </SessionProvider>
);

export default App;
