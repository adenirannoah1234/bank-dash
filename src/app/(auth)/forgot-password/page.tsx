'use client';

import React, { useState } from 'react';
import {
  VStack,
  Text,
  Input,
  Button,
  FormControl,
  useToast,
} from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { useForgotPasswordMutation } from '@/lib/features/auth/authSlice';
import { isFetchBaseQueryError } from '@/lib/features/api.slice';
import Link from 'next/link';

const ForgotPassword = () => {
  const router = useRouter();
  const toast = useToast();

  const [formData, setFormData] = useState({
    email: '',
  });
  const [forgotPassword, { isLoading }] = useForgotPasswordMutation();

  const handleForgotPassword = async (e: any) => {
    e.preventDefault();
    const { email } = formData;

    if (!email) {
      toast({
        title: 'Error',
        description: 'Please enter your email',
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'top',
        variant: 'left-accent',
      });
      return;
    }

    try {
      const response = await forgotPassword({ email });
      console.log('ForgotPassword response:', response);

      if ('data' in response) {
        toast({
          title: 'Success',
          description: 'OTP sent to your email',
          status: 'success',
          duration: 5000,
          isClosable: true,
          position: 'top',
          variant: 'left-accent',
        });
        router.push(`/verify-otp?email=${encodeURIComponent(email)}`);
      } else if ('error' in response) {
        let errorMessage = 'An error occurred';

        if (isFetchBaseQueryError(response.error)) {
          const errData = response.error.data as { message: string };
          errorMessage = errData?.message || errorMessage;
        }

        toast({
          title: 'Error',
          description: errorMessage,
          status: 'error',
          duration: 9000,
          isClosable: true,

          position: 'top',
          variant: 'left-accent',
        });
      }
    } catch (error: any) {
      console.error('ForgotPassword error:', error);
      toast({
        title: 'Error',
        description: error?.message || 'An error occurred',
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'top',
        variant: 'left-accent',
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
    >
      <Text
        textAlign="center"
        fontWeight="semibold"
        fontSize={{ base: '1.15rem', md: '2.25rem' }}
        color={'#343d6bff'}
      >
        Forgot Password?
      </Text>
      <Text
        fontSize={{ base: '0.875rem', md: '1.125rem' }}
        mb="4"
        color={'#929294ff'}
        textAlign="center"
      >
        We will send OTP to your email
      </Text>

      <VStack
        spacing="6"
        as={'form'}
        onSubmit={handleForgotPassword}
        w={{ base: 'full', md: 'md' }}
      >
        <FormControl isRequired w="full">
          {' '}
          <Input
            type="email"
            name="email"
            w="full"
            placeholder="Enter your email"
            py="1.5rem"
            px="1rem"
            _placeholder={{
              color: '#595959ff',
              fontSize: '0.875rem',
            }}
            border={'2px solid #d9d9d9ff'}
            _focus={{
              borderColor: '#1713f2ff',
            }}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </FormControl>

        <Button
          type="submit"
          bg={'#1713f2ff'}
          _hover={{
            bg: '#1713f2ff',
          }}
          color={'white'}
          mt="4"
          py={'1.5rem'}
          w="full"
          isLoading={isLoading}
        >
          Submit
        </Button>
        <Text color={'#343d6bff'}>
          Back to{' '}
          <Link
            color="blue.500"
            href="/login"
            style={{ textDecoration: 'underline' }}
          >
            Login
          </Link>
        </Text>
      </VStack>
    </VStack>
  );
};

export default ForgotPassword;
