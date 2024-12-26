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
} from '@chakra-ui/react';
import { useState } from 'react';

const SignUp = () => {
  const toast = useToast();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    fullName: '',
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // Add signup logic here
  };

  return (
    <Box maxW="md" mx="auto" mt="8">
      <form onSubmit={handleSubmit}>
        <VStack spacing="4">
          <FormControl isRequired>
            <FormLabel>Full Name</FormLabel>
            <Input
              type="text"
              name="fullName"
              onChange={(e) =>
                setFormData({ ...formData, fullName: e.target.value })
              }
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              name="email"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              name="password"
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Confirm Password</FormLabel>
            <Input
              type="password"
              name="confirmPassword"
              onChange={(e) =>
                setFormData({ ...formData, confirmPassword: e.target.value })
              }
            />
          </FormControl>
          <Button type="submit" colorScheme="blue" w="full">
            Sign Up
          </Button>
          <Text>
            Already have an account?{' '}
            <Link color="blue.500" href="/login">
              Login
            </Link>
          </Text>
        </VStack>
      </form>
    </Box>
  );
};

export default SignUp;
