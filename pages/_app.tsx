import HEAD from 'next/head';
import React, { useEffect } from 'react';
import Notifications from 'react-notify-toast';
import { ThemeProvider } from 'styled-components';
import { SWRConfig } from 'swr';
import '../styles/main.css';
import theme from '../styles/theme';
import Fonts from '~utils/font';

function MyApp({ Component, pageProps, ...rest }: any): JSX.Element {
  useEffect(() => {
    Fonts();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Notifications
        options={{
          zIndex: 3000,
          timeout: 1500,
        }}
      />
      <HEAD>
        <meta
          name="description"
          content="Website Description."
        />
        <meta name="theme-color" content={theme.color.black} />
      </HEAD>
      <>
        <Component {...pageProps} />
      </>
    </ThemeProvider>
  )
}

export default MyApp
