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
} from '@chakra-ui/react';
import { Icon } from 'lucide-react';
import { useState } from 'react';
import { IconType } from 'react-icons';
import { BsEye, BsEyeSlash } from 'react-icons/bs';

const SignUp = () => {
  const toast = useToast();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',

    firstName: '',
    lastName: '',
    address: '',
    phoneNumber: '',
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => setShowPassword(!showPassword);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
  };

  return (
    <Box
      maxW={{ base: '100%', md: 'md', lg: 'md' }}
      mx={'auto'}
      mt={{ base: '50px', md: '10' }}
      px={{ base: '10', md: '0' }}
      w={'full'}
    >
      <VStack as={'form'} onSubmit={handleSubmit} align={'stretch'}>
        <Text
          as="h1"
          textAlign="center"
          fontWeight="bold"
          fontSize={'1.5rem'}
          color={'#343d6bff'}
        >
          Get Started with BankDash
        </Text>
        <Text
          fontSize={'0.9375rem'}
          mb="4"
          color={'#929294ff'}
          textAlign="center"
        >
          Getting started is easy.
        </Text>
        <VStack spacing="4">
          <FormControl isRequired>
            {/* <FormLabel>First Name</FormLabel> */}
            <Input
              type="text"
              border={'2px solid #d9d9d9ff'}
              _focus={{
                borderColor: '#1713f2ff',
              }}
              name="firstName"
              placeholder="First Name"
              _placeholder={{
                color: '#595959ff',
                fontSize: '0.875rem',
              }}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
            />
          </FormControl>
          <FormControl isRequired>
            {/* <FormLabel>Last Name</FormLabel> */}
            <Input
              type="text"
              name="lastName"
              placeholder="Last Name"
              _placeholder={{
                color: '#595959ff',
                fontSize: '0.875rem',
              }}
              border={'2px solid #d9d9d9ff'}
              _focus={{
                borderColor: '#1713f2ff',
              }}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
            />
          </FormControl>
          <FormControl isRequired>
            {/* <FormLabel>Email</FormLabel> */}
            <Input
              type="email"
              name="email"
              placeholder="Email"
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
            {/* <FormLabel>Address</FormLabel> */}
            <Input
              type="text"
              name="address"
              placeholder="Address"
              _placeholder={{
                color: '#595959ff',
                fontSize: '0.875rem',
              }}
              border={'2px solid #d9d9d9ff'}
              _focus={{
                borderColor: '#1713f2ff',
              }}
              onChange={(e) =>
                setFormData({ ...formData, address: e.target.value })
              }
            />
          </FormControl>
          <FormControl isRequired>
            {/* <FormLabel>Phone Number</FormLabel> */}
            <Input
              type="text"
              name="phoneNumber"
              placeholder="Phone Number"
              _placeholder={{
                color: '#595959ff',
                fontSize: '0.875rem',
              }}
              border={'2px solid #d9d9d9ff'}
              _focus={{
                borderColor: '#1713f2ff',
              }}
              onChange={(e) =>
                setFormData({ ...formData, phoneNumber: e.target.value })
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
              <InputRightElement>
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
                    showPassword ? (
                      <BsEye size={23} />
                    ) : (
                      <BsEyeSlash size={23} />
                    )
                  }
                />
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <FormControl isRequired>
            {/* <FormLabel>Confirm Password</FormLabel> */}
            <InputGroup>
              <Input
                type={showPassword ? 'text' : 'password'}
                name="confirmPassword"
                placeholder="Confirm Password"
                _placeholder={{
                  color: '#595959ff',
                  fontSize: '0.875rem',
                }}
                border={'2px solid #d9d9d9ff'}
                _focus={{
                  borderColor: '#1713f2ff',
                }}
                onChange={(e) =>
                  setFormData({ ...formData, confirmPassword: e.target.value })
                }
              />
              <InputRightElement>
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
                    showPassword ? (
                      <BsEye size={23} />
                    ) : (
                      <BsEyeSlash size={23} />
                    )
                  }
                />
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <Button
            type="submit"
            bg={'#1713f2ff'}
            color={'white'}
            mt="4"
            w="full"
          >
            Sign Up
          </Button>
          <Text color={'#343d6bff'}>
            Already have an account?{' '}
            <Link color="blue.500" href="/login">
              Login
            </Link>
          </Text>
        </VStack>
      </VStack>
    </Box>
  );
};

export default SignUp;
