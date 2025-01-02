'use client';

import { ChakraProvider } from '@chakra-ui/react';
import StoreProvider from './app/StoreProvider';
import { SessionProvider } from 'next-auth/react';

export const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider>
      <StoreProvider>
        <ChakraProvider>{children}</ChakraProvider>
      </StoreProvider>
    </SessionProvider>
  );
};
