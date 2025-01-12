'use client';

import { ChakraProvider } from '@chakra-ui/react';
import StoreProvider from './app/StoreProvider';
import { SessionProvider } from 'next-auth/react';
import { SessionSync } from './utils/SessionSync';

export const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider>
      <StoreProvider>
        <SessionSync />
        <ChakraProvider>{children}</ChakraProvider>
      </StoreProvider>
    </SessionProvider>
  );
};
