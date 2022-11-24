import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Monoton, Montserrat_Subrayada } from '@next/font/google';

const montSub = Montserrat_Subrayada({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const monoton = Monoton({
  subsets: ['latin'],
  weight: ['400'],
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={montSub.className}>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
