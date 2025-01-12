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

import { Formik, Form, Field, ErrorMessage } from 'formik';
import { userSchema } from '@/lib/Validations/SignUpValidation';

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
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => setShowPassword(!showPassword);
  const [createUser, { isLoading: creatingUser, error: createUserError }] =
    useCreateUserMutation();

  const handleSubmit = async (
    values: any,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    setSubmitting(true);

    try {
      const response = await createUser({
        email: values.email,
        password: values.password,
        first_name: values.firstName,
        last_name: values.lastName,
        house_address: values.address,
        phone_number: values.phoneNumber,
        date_of_birth: values.dateOfBirth,
        city: values.city,
        postal_code: values.postalCode,
        country: values.country,
        present_address: values.presentAddress,
        username: values.userName,
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
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        userName: '',
        dateOfBirth: '',
        email: '',
        address: '',
        presentAddress: '',
        postalCode: '',
        city: '',
        country: '',
        phoneNumber: '',
        password: '',
        confirmPassword: '',
      }}
      validationSchema={userSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, errors, touched }: any) => (
        <Form>
          <VStack
            maxW={{ base: '100%', md: 'xl', lg: 'xl' }}
            mx={'auto'}
            mt={{ base: '50px', md: '10' }}
            px={{ base: 4, md: 0 }}
            w={'full'}
            align={'center'}
          >
            {/* <VStack
        as={'form'}
        onSubmit={handleSubmit}
        align={'stretch'}
        w={{ base: 'full', md: 'md' }}
      > */}
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
              <FormControl
                isInvalid={!!(touched.firstName && !!errors.firstName)}
              >
                {/* <FormLabel>First Name</FormLabel> */}
                <Field
                  type="text"
                  as={Input}
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
                  // onChange={(e) =>
                  //   setFormData({ ...formData, firstName: e.target.value })
                  // }
                />
                <ErrorMessage
                  name="firstName"
                  component="div"
                  className="text-xs"
                />
              </FormControl>
              <FormControl
                isInvalid={!!(touched.lastName && !!errors.lastName)}
              >
                {/* <FormLabel>Last Name</FormLabel> */}
                <Field
                  type="text"
                  name="lastName"
                  as={Input}
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
                  // onChange={(e) =>
                  //   setFormData({ ...formData, lastName: e.target.value })
                  // }
                />
                <ErrorMessage
                  name="lastName"
                  component="div"
                  className="text-xs"
                />
              </FormControl>
              <FormControl
                isInvalid={!!(touched.userName && !!errors.userName)}
              >
                {/* <FormLabel>Last Name</FormLabel> */}
                <Field
                  type="text"
                  name="userName"
                  as={Input}
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
                  // onChange={(e) =>
                  //   setFormData({ ...formData, userName: e.target.value })
                  // }
                />
                <ErrorMessage
                  name="userName"
                  component="div"
                  className="text-xs"
                />
              </FormControl>
              <FormControl isInvalid={!!(touched.email && !!errors.email)}>
                {/* <FormLabel>Email</FormLabel> */}
                <Field
                  type="email"
                  name="email"
                  as={Input}
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
                  // onChange={(e) =>
                  //   setFormData({ ...formData, email: e.target.value })
                  // }
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-xs"
                />
              </FormControl>
              <FormControl
                isInvalid={!!(touched.dateOfBirth && !!errors.dateOfBirth)}
              >
                {/* <FormLabel>Address</FormLabel> */}
                <Field
                  type="date"
                  name="dateOfBirth"
                  as={Input}
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
                  // onChange={(e) =>
                  //   setFormData({ ...formData, dateOfBirth: e.target.value })
                  // }
                />
                <ErrorMessage
                  name="dateOfBirth"
                  component="div"
                  className="text-xs"
                />
              </FormControl>
              <FormControl isInvalid={!!(touched.address && !!errors.address)}>
                {/* <FormLabel>Address</FormLabel> */}
                <Field
                  type="text"
                  name="address"
                  as={Input}
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
                  // onChange={(e) =>
                  //   setFormData({ ...formData, address: e.target.value })
                  // }
                />
                <ErrorMessage
                  name="address"
                  component="div"
                  className="text-xs"
                />
              </FormControl>
              <FormControl
                isInvalid={
                  !!(touched.presentAddress && !!errors.presentAddress)
                }
              >
                {/* <FormLabel>Address</FormLabel> */}
                <Field
                  type="text"
                  name="presentAddress"
                  as={Input}
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
                  // onChange={(e) =>
                  //   setFormData({ ...formData, presentAddress: e.target.value })
                  // }
                />
                <ErrorMessage
                  name="presentAddress"
                  component="div"
                  className="text-xs"
                />
              </FormControl>
              <FormControl isInvalid={!!(touched.city && !!errors.city)}>
                {/* <FormLabel>Address</FormLabel> */}
                <Field
                  type="text"
                  name="city"
                  as={Input}
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
                  // onChange={(e) =>
                  //   setFormData({ ...formData, city: e.target.value })
                  // }
                />
                <ErrorMessage name="city" component="div" className="text-xs" />
              </FormControl>
              <FormControl
                isInvalid={!!(touched.postalCode && !!errors.postalCode)}
              >
                {/* <FormLabel>Address</FormLabel> */}
                <Field
                  type="text"
                  name="postalCode"
                  as={Input}
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
                  // onChange={(e) =>
                  //   setFormData({ ...formData, postalCode: e.target.value })
                  // }
                />
                <ErrorMessage
                  name="postalCode"
                  component="div"
                  className="text-xs"
                />
              </FormControl>
              <FormControl isInvalid={!!(touched.country && !!errors.country)}>
                {/* <FormLabel>Address</FormLabel> */}
                <Field
                  type="text"
                  name="country"
                  as={Input}
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
                  // onChange={(e) =>
                  //   setFormData({ ...formData, country: e.target.value })
                  // }
                />
                <ErrorMessage
                  name="country"
                  component="div"
                  className="text-xs"
                />
              </FormControl>
              <FormControl
                isInvalid={!!(touched.phoneNumber && !!errors.phoneNumber)}
              >
                {/* <FormLabel>Phone Number</FormLabel> */}
                <Field
                  type="text"
                  name="phoneNumber"
                  as={Input}
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
                  // onChange={(e) =>
                  //   setFormData({ ...formData, phoneNumber: e.target.value })
                  // }
                />
                <ErrorMessage
                  name="phoneNumber"
                  component="div"
                  className="text-xs"
                />
              </FormControl>

              <FormControl
                isInvalid={!!(touched.password && !!errors.password)}
              >
                {/* <FormLabel>Password</FormLabel> */}
                <InputGroup>
                  <Field
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    as={Input}
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
                    // onChange={(e) =>
                    //   setFormData({ ...formData, password: e.target.value })
                    // }
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
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-xs"
                />
              </FormControl>
              <FormControl
                isInvalid={
                  !!(touched.confirmPassword && !!errors.confirmPassword)
                }
              >
                {/* <FormLabel>Confirm Password</FormLabel> */}
                <InputGroup>
                  <Field
                    type={showPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    as={Input}
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
                    // onChange={(e) =>
                    //   setFormData({ ...formData, confirmPassword: e.target.value })
                    // }
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
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="text-xs"
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
                w="full"
                py={'1.5rem'}
                isLoading={isSubmitting}
                loadingText="Submitting"
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
            {/* </VStack> */}
          </VStack>
        </Form>
      )}
    </Formik>
  );
};

export default SignUp;
