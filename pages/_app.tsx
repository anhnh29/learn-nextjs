import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '../common/ThemeContext';
import {StoreProvider} from '../store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // <ThemeProvider> //setup change theme color
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>
  )
}

export default MyApp
