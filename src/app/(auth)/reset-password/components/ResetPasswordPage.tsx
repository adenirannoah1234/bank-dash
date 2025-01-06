'use client';

import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Text,
  useToast,
  Link,
  Heading,
  InputGroup,
  InputRightElement,
  IconButton,
  Switch,
  HStack,
  Flex,
} from '@chakra-ui/react';
import { useState } from 'react';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useResetPasswordMutation } from '@/lib/features/auth/authSlice';
import { isFetchBaseQueryError } from '@/lib/features/api.slice';
import { useSearchParams } from 'next/navigation';

const ResetPassword = () => {
  const [formData, setFormData] = useState({
    new_password: '',
    password: '',
  });
  const searchParams = useSearchParams();
  const email = searchParams?.get('email') || '';
  const otp = searchParams?.get('otp') || '';

  const toast = useToast();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => setShowPassword(!showPassword);
  const [resetPassword, { isLoading }] = useResetPasswordMutation();

  const handleResetPassword = async (e: any) => {
    e.preventDefault();
    const { new_password } = formData;

    if (!new_password) {
      toast({
        title: 'Error',
        description: 'Please enter your new password',
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'top',
        variant: 'left-accent',
      });
      return;
    }

    try {
      const response = await resetPassword({
        new_password: new_password,
        email,
        otp,
      });
      //   console.log('ResetPassword response:', response);

      if ('data' in response) {
        toast({
          title: 'Success',
          description: 'Password reset successfully',
          status: 'success',
          duration: 5000,
          isClosable: true,
          position: 'top',
          variant: 'left-accent',
        });
        router.push('/login');
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
          duration: 5000,
          isClosable: true,
          position: 'top',
          variant: 'left-accent',
        });
      }
    } catch (error: any) {
      //   console.error('ResetPassword error:', error);
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
        fontSize={'2.25rem'}
        color={'#343d6bff'}
      >
        Input New Password
      </Text>
      <Text fontSize={'1.125rem'} mb="4" color={'#929294ff'} textAlign="center">
        Your new password must be different from your old password.
      </Text>
      <VStack
        spacing="6"
        as={'form'}
        onSubmit={handleResetPassword}
        w={{ base: 'full', md: 'md' }}
      >
        <FormControl isRequired>
          {/* <FormLabel>Password</FormLabel> */}
          <InputGroup>
            <Input
              type={showPassword ? 'text' : 'password'}
              name="new_password"
              placeholder="New Password"
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
                setFormData({ ...formData, new_password: e.target.value })
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
        {/* <FormControl isRequired>
           
            <InputGroup>
              <Input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Confirm Password"
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
          </FormControl> */}

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
          Reset Password
        </Button>
      </VStack>
    </VStack>
  );
};

export default ResetPassword;
