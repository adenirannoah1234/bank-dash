'use client';

import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useToast } from '@chakra-ui/react';
import { useVerifyOtpMutation } from '@/lib/features/auth/authSlice';
import {
  Button,
  FormControl,
  Input,
  Text,
  VStack,
  Link,
  Box,
  HStack,
  PinInput,
  PinInputField,
} from '@chakra-ui/react';
import { isFetchBaseQueryError } from '@/lib/features/api.slice';

const VerifyOtp = () => {
  const router = useRouter();
  const toast = useToast();
  const [verifyOtp, { isLoading }] = useVerifyOtpMutation();

  const handleComplete = async (value: string) => {
    try {
      const res = await verifyOtp({ otp: value });
      console.log('VerifyOtp response:', res);

      if ('data' in res) {
        toast({
          title: 'Success',
          description: 'OTP verified successfully',
          status: 'success',
          duration: 5000,
          isClosable: true,
          position: 'top',
        });
        router.push('/reset-password');
      } else if ('error' in res) {
        let errorMessage = 'An error occurred';

        if (isFetchBaseQueryError(res.error)) {
          const errData = res.error.data as { message: string };
          errorMessage = errData?.message || errorMessage;
        }

        toast({
          title: 'Error',
          description: errorMessage,
          status: 'error',
          duration: 5000,
          isClosable: true,
          position: 'top',
        });
      }
    } catch (error) {
      console.error('Error verifying OTP:', error);
      toast({
        title: 'Error',
        description: 'Failed to verify OTP',
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'top',
      });
    }
  };

  return (
    <VStack
      maxW={{ base: '100%', md: 'xl', lg: 'xl' }}
      mx={'auto'}
      mt={{ base: '150px', md: '10' }}
      w={'full'}
      align={'center'}
      px={{ base: 4, md: 8 }}
      overflowX={'hidden'}
    >
      <Text
        textAlign="center"
        fontWeight="semibold"
        fontSize={{ base: '1.15rem', md: '2.25rem' }}
        color={'#343d6bff'}
      >
        Verify OTP
      </Text>
      <Text
        fontSize={{ base: '0.875rem', md: '1.125rem' }}
        mb="4"
        color={'#929294ff'}
        textAlign="center"
      >
        Enter the OTP sent to your email
      </Text>

      <VStack spacing="6" w={{ base: 'full', md: '2xl' }}>
        <HStack justify="center" spacing={{ base: 2, md: 4 }}>
          <PinInput
            size={{ base: 'md', md: 'lg' }}
            otp
            onComplete={handleComplete}
          >
            {Array.from({ length: 6 }).map((_, index) => (
              <PinInputField
                key={index}
                borderColor="#d9d9d9ff"
                _focus={{
                  borderColor: '#1713f2ff',
                }}
                w={{ base: '40px', md: '50px' }}
                h={{ base: '40px', md: '50px' }}
                fontSize={{ base: 'lg', md: 'xl' }}
              />
            ))}
          </PinInput>
        </HStack>

        <Button
          type="submit"
          bg={'#1713f2ff'}
          _hover={{
            bg: '#1713f2ff',
          }}
          color={'white'}
          mt="4"
          py={'1.5rem'}
          w="70%"
          isLoading={isLoading}
          onClick={() => {}} // This will be handled by onComplete
        >
          Continue
        </Button>
      </VStack>
    </VStack>
  );
};

export default VerifyOtp;
