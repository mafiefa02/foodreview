import { Inter, Noto_Serif_TC } from 'next/font/google';

export const notoSerif = Noto_Serif_TC({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '900'],
  preload: true,
  variable: '--font-noto-serif-tc',
});

export const inter = Inter({
  subsets: ['latin'],
  preload: true,
  variable: '--font-inter',
});
