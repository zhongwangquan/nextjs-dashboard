import { Inter, Lusitana } from 'next/font/google';
import localFont from 'next/font/local';

export const inter = Inter({
  weight: ['800', '700'],
  subsets: ['latin'],
});

export const lusitana = Lusitana({
  weight: ['700'],
  subsets: ['latin'],
  display: 'swap',
});

export const myFont = localFont({
  src: './fonts/XinYiJiXiangSong.ttf',
  display: 'swap',
});
