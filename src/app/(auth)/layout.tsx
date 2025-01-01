import type { Metadata } from 'next';
import localFont from 'next/font/local';

import LayoutContainer from './layoutContainer';
import { Provider } from '@/provider';
const geistSans = localFont({
  src: '../fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: '../fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'BankDash',
  description: 'BankDash is a simple and easy to use banking app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider>
          <LayoutContainer>{children}</LayoutContainer>
        </Provider>
      </body>
    </html>
  );
}