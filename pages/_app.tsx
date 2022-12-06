import { AppProps } from 'next/app';

import '@/css/tailwind.css';

function App({ Component, pageProps }: AppProps) {
  return (<Component {...pageProps} />);
}

export default App;
