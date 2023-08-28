import { Heebo, Noto_Serif_TC } from 'next/font/google';

export const notoSerif = Noto_Serif_TC({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '900'],
  preload: true,
  variable: '--font-noto-serif-tc',
});

export const heebo = Heebo({
  subsets: ['latin'],
  preload: true,
  variable: '--font-heebo',
});
