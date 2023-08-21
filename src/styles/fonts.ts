import { Roboto } from 'next/font/google';

import localFont from 'next/font/local';

const roboto = Roboto({
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap'
});

const workSans = localFont({
  src: [
    {
      path: '../../public/fonts/WorkSans-Regular.woff2',
      weight: '400'
    },
    {
      path: '../../public/fonts/WorkSans-Medium.woff2',
      weight: '500'
    },
    {
      path: '../../public/fonts/WorkSans-SemiBold.woff2',
      weight: '600'
    },
    {
      path: '../../public/fonts/WorkSans-Bold.woff2',
      weight: '800'
    }
  ]
});

export { roboto, workSans };
