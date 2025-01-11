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
import { useState, useEffect, use } from 'react';
import { IconType } from 'react-icons';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import {
  authSlice,
  useCreateUserMutation,
} from '@/lib/features/auth/authSlice';
import { useRouter } from 'next/navigation';
import { isFetchBaseQueryError } from '@/lib/features/api.slice';
import { useAppDispatch } from '@/lib/features/hook';
import { setUser } from '@/lib/features/auth/auth.reducers';

const initialFormData = {
  email: '',
  password: '',
  confirmPassword: '',

  firstName: '',
  lastName: '',
  address: '',
  phoneNumber: '',
};
const SignUp = () => {
  const toast = useToast();
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',

    firstName: '',
    lastName: '',
    address: '',
    phoneNumber: '',
    dateOfBirth: '',
    city: '',
    postalCode: '',
    country: '',
    presentAddress: '',
    userName: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useAppDispatch();

  const handleShowPassword = () => setShowPassword(!showPassword);
  const [createUser, { isLoading: creatingUser, error: createUserError }] =
    useCreateUserMutation();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await createUser({
        email: formData.email,
        password: formData.password,
        first_name: formData.firstName,
        last_name: formData.lastName,
        house_address: formData.address,
        phone_number: formData.phoneNumber,
        date_of_birth: formData.dateOfBirth,
        city: formData.city,
        postal_code: formData.postalCode,
        country: formData.country,
        present_address: formData.presentAddress,
        username: formData.userName,
      }).unwrap();

      // Success case
      if (response) {
        toast({
          title: 'Success',
          description: response.message || 'User created successfully',
          status: 'success',
          duration: 9000,
          isClosable: true,
          variant: 'left-accent',
          position: 'top',
        });
        router.push('/login');
        return;
      }
    } catch (error: any) {
      // Handle RTK Query errors
      if (isFetchBaseQueryError(error)) {
        const errMsg =
          (error.data as { message: string })?.message || 'An error occurred';
        toast({
          title: 'Error',
          description: errMsg,
          status: 'error',
          duration: 9000,
          isClosable: true,
          variant: 'left-accent',
          position: 'top',
        });
        return;
      }

      // Handle other errors
      toast({
        title: 'Error',
        description: error?.message || 'An unexpected error occurred',
        status: 'error',
        duration: 9000,
        isClosable: true,
        variant: 'left-accent',
        position: 'top',
      });
    }
  };
  return (
    <VStack
      maxW={{ base: '100%', md: 'xl', lg: 'xl' }}
      mx={'auto'}
      mt={{ base: '50px', md: '10' }}
      px={{ base: 4, md: 0 }}
      w={'full'}
      align={'center'}
    >
      <VStack
        as={'form'}
        onSubmit={handleSubmit}
        align={'stretch'}
        w={{ base: 'full', md: 'md' }}
      >
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
        <VStack spacing="4" w={{ base: 'full', md: 'md' }}>
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
              py="1.5rem"
              px="1rem"
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
              py="1.5rem"
              px="1rem"
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
            {/* <FormLabel>Last Name</FormLabel> */}
            <Input
              type="text"
              name="userName"
              py="1.5rem"
              px="1rem"
              placeholder="User Name"
              _placeholder={{
                color: '#595959ff',
                fontSize: '0.875rem',
              }}
              border={'2px solid #d9d9d9ff'}
              _focus={{
                borderColor: '#1713f2ff',
              }}
              onChange={(e) =>
                setFormData({ ...formData, userName: e.target.value })
              }
            />
          </FormControl>
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
            {/* <FormLabel>Address</FormLabel> */}
            <Input
              type="date"
              name="dateOfBirth"
              placeholder="Date of Birth"
              _placeholder={{
                color: '#595959ff',
                fontSize: '0.875rem',
              }}
              py="1.5rem"
              px="1rem"
              border={'2px solid #d9d9d9ff'}
              _focus={{
                borderColor: '#1713f2ff',
              }}
              onChange={(e) =>
                setFormData({ ...formData, dateOfBirth: e.target.value })
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
              py="1.5rem"
              px="1rem"
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
            {/* <FormLabel>Address</FormLabel> */}
            <Input
              type="text"
              name="presentAddress"
              placeholder="Present Address"
              _placeholder={{
                color: '#595959ff',
                fontSize: '0.875rem',
              }}
              py="1.5rem"
              px="1rem"
              border={'2px solid #d9d9d9ff'}
              _focus={{
                borderColor: '#1713f2ff',
              }}
              onChange={(e) =>
                setFormData({ ...formData, presentAddress: e.target.value })
              }
            />
          </FormControl>
          <FormControl isRequired>
            {/* <FormLabel>Address</FormLabel> */}
            <Input
              type="text"
              name="city"
              placeholder="City"
              _placeholder={{
                color: '#595959ff',
                fontSize: '0.875rem',
              }}
              py="1.5rem"
              px="1rem"
              border={'2px solid #d9d9d9ff'}
              _focus={{
                borderColor: '#1713f2ff',
              }}
              onChange={(e) =>
                setFormData({ ...formData, city: e.target.value })
              }
            />
          </FormControl>
          <FormControl isRequired>
            {/* <FormLabel>Address</FormLabel> */}
            <Input
              type="text"
              name="postalCode"
              placeholder="Postal Code"
              _placeholder={{
                color: '#595959ff',
                fontSize: '0.875rem',
              }}
              py="1.5rem"
              px="1rem"
              border={'2px solid #d9d9d9ff'}
              _focus={{
                borderColor: '#1713f2ff',
              }}
              onChange={(e) =>
                setFormData({ ...formData, postalCode: e.target.value })
              }
            />
          </FormControl>
          <FormControl isRequired>
            {/* <FormLabel>Address</FormLabel> */}
            <Input
              type="text"
              name="country"
              placeholder="Country"
              _placeholder={{
                color: '#595959ff',
                fontSize: '0.875rem',
              }}
              py="1.5rem"
              px="1rem"
              border={'2px solid #d9d9d9ff'}
              _focus={{
                borderColor: '#1713f2ff',
              }}
              onChange={(e) =>
                setFormData({ ...formData, country: e.target.value })
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
              py="1.5rem"
              px="1rem"
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
                py="1.5rem"
                px="1rem"
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
                py="1.5rem"
                px="1rem"
                border={'2px solid #d9d9d9ff'}
                _focus={{
                  borderColor: '#1713f2ff',
                }}
                onChange={(e) =>
                  setFormData({ ...formData, confirmPassword: e.target.value })
                }
              />
              <InputRightElement marginTop={'6px'}>
                <IconButton
                  aria-label="show password"
                  onClick={handleShowPassword}
                  h="1.75rem"
                  // my={'auto'}
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
            _hover={{
              bg: '#1713f2ff',
            }}
            color={'white'}
            mt="4"
            w="full"
            py={'1.5rem'}
            isLoading={creatingUser}
          >
            Sign Up
          </Button>
          <Text color={'#343d6bff'} fontSize={'1rem'} mt="2">
            Already have an account?{' '}
            <Link
              color="blue.500"
              href="/login"
              style={{ textDecoration: 'underline', color: '#1713f2ff' }}
            >
              Login
            </Link>
          </Text>
        </VStack>
      </VStack>
    </VStack>
  );
};

export default SignUp;
