// import type { Metadata } from 'next';
'use client';
import localFont from 'next/font/local';
import '../globals.css';
import { LayoutContainer } from './components/layoutContainer';
// import { Provider } from '@/provider';
import { Flex } from '@chakra-ui/react';
import { BallTriangle } from 'react-loader-spinner';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Router } from 'next/router';
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

// export const metadata: Metadata = {
//   title: 'BankDash',
//   description: 'BankDash is a simple and easy to use banking app',
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data: session, status } = useSession();
  const router = useRouter();
  if (status === 'loading') {
    return (
      <Flex w="100vw" h="100vh" justify="center" align="center">
        <BallTriangle width="100" color="#1713f2ff" radius={5} />
      </Flex>
    );
  }
  if (status === 'unauthenticated') {
    return router.push('/login');
  }
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LayoutContainer>{children}</LayoutContainer>
      </body>
    </html>
  );
}
