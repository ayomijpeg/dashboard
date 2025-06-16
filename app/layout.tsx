import { Metadata } from 'next';
import '@/app/ui/global.css';
import {inter} from '@/app/ui/fonts';

export const metadata: Metadata = {
  title: {
    template: '%s | Swap Dashboard',
    default: 'Swap Dashboard',
  },
  icons: {
    icon: '/s.png',
    shortcut: '/s.png',
    apple: '/s.png',
  },
  description: 'Built By AYOMI.',
  metadataBase: new URL('https://opeyemiayomi.netlify.app/'),
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className=
      {`${inter.className} antialiased`} >{children}</body>
    </html>
  );
}
