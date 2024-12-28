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
} from '@chakra-ui/react';
import Link from 'next/link';
import React, { useState } from 'react';
import { BsEye, BsEyeSlash } from 'react-icons/bs';

const page = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => setShowPassword(!showPassword);
  return (
    <VStack
      maxW={{ base: '100%', md: 'md', lg: 'md' }}
      mx={'auto'}
      mt={{ base: '150px', md: '10' }}
      px={{ base: '10', md: '0' }}
      w={'full'}
      align={'center'}
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
      <VStack spacing="4">
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
                  showPassword ? <BsEye size={23} /> : <BsEyeSlash size={23} />
                }
              />
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <HStack spacing={{ base: '2rem', md: '10.5rem' }} mt="4">
          <Flex>
            <Switch
              colorScheme="blue"
              mt={1}
              //   isChecked={true}
              onChange={() => console.log('checked')}
            />
            <Text ml="2">Remember me</Text>
          </Flex>
          <Link style={{ textDecoration: 'none', color: '#db4b2eff' }} href="/">
            Recover password
          </Link>
        </HStack>
        <Button type="submit" bg={'#1713f2ff'} color={'white'} mt="4" w="full">
          Login
        </Button>
      </VStack>
    </VStack>
  );
};

export default page;
