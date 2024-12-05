import { ChakraProvider } from '@chakra-ui/react';

export const Provider = ({ children }: { children: React.ReactNode }) => {
  return <ChakraProvider>{children}</ChakraProvider>;
};
