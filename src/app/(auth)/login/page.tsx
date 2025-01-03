'use client';

import {
  Box,
  Text,
  VStack,
  Input,
  Button,
  FormControl,
  FormLabel,
  InputGroup,
  InputRightElement,
  IconButton,
  Switch,
  HStack,
  Flex,
  useToast,
} from '@chakra-ui/react';
import Link from 'next/link';
import React, { useState } from 'react';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
const page = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const toast = useToast();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleShowPassword = () => setShowPassword(!showPassword);

  const handleSignIn = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await signIn('credentials', {
        email: formData.email,
        password: formData.password,
        redirect: false,
      });

      console.log('SignIn response:', response);

      if (response?.ok) {
        toast({
          title: 'Success',
          description: 'Logged in successfully',
          status: 'success',
          duration: 5000,
          isClosable: true,
          position: 'top',
        });
        // Redirect to dashboard
        router.push('/');
      } else if (!response?.ok) {
        toast({
          title: 'Error',
          description: response?.error || 'Failed to login',
          status: 'error',
          duration: 5000,
          isClosable: true,
          position: 'top',
        });
      }
    } catch (error: any) {
      console.error('Login error:', error);
      toast({
        title: 'Error',
        description: error?.message || 'An error occurred',
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'top',
      });
    } finally {
      setIsLoading(false);
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
        fontSize={'2.25rem'}
        color={'#343d6bff'}
      >
        Welcome Back
      </Text>
      <Text fontSize={'1.125rem'} mb="4" color={'#929294ff'} textAlign="center">
        Login in to your account.
      </Text>
      <VStack
        spacing="6"
        as={'form'}
        onSubmit={handleSignIn}
        w={{ base: 'full', md: 'md' }}
      >
        <FormControl isRequired>
          {/* <FormLabel>Email</FormLabel> */}
          <Input
            type="email"
            name="email"
            placeholder="Email"
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
        <FormControl isRequired>
          {/* <FormLabel>Password</FormLabel> */}
          <InputGroup>
            <Input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Password"
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
                setFormData({ ...formData, password: e.target.value })
              }
            />
            <InputRightElement marginTop={'6px'}>
              <IconButton
                aria-label="show password"
                onClick={handleShowPassword}
                h="1.75rem"
                size="sm"
                bg={'white'}
                _hover={{
                  bg: 'white',
                }}
                icon={
                  showPassword ? <BsEye size={23} /> : <BsEyeSlash size={23} />
                }
              />
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <HStack spacing={{ base: '2rem', md: '10.5rem' }}>
          <Flex>
            <Switch
              colorScheme="blue"
              mt={1}
              //   isChecked={true}
              onChange={() => console.log('checked')}
            />
            <Text ml="2">Remember me</Text>
          </Flex>
          <Link
            style={{ textDecoration: 'none', color: '#db4b2eff' }}
            href="/forgot-password"
          >
            Recover password
          </Link>
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
          w="full"
          isLoading={isLoading}
        >
          Login
        </Button>
        <Text textAlign="center" w="100%" fontSize="12px" color="#544f4c">
          Dont have an account?{' '}
          <Link
            href="/signup"
            style={{ textDecoration: 'underline', color: '#1713f2ff' }}
          >
            Sign up here
          </Link>
        </Text>
      </VStack>
    </VStack>
  );
};

export default page;
