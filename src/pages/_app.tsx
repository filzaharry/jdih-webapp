import '@/src/styles/globals.css'
import type { AppProps } from 'next/app'
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import 'tailwindcss/tailwind.css'


export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
