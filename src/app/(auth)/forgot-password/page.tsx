'use client';

import React, { useState } from 'react';
import {
  Box,
  Button,
  Center,
  // Flex,
  Heading,
  Input,
  Text,
  FormLabel,
  FormControl,
  VStack,
  useToast,
  HStack,
} from '@chakra-ui/react';
import Link from 'next/link';
// import Image from "next/image";

// import { ErrorResponseType } from "@/app/types/types";
import { PinInput } from 'react-input-pin-code';

const ForgotPassword = () => {
  const toast = useToast();

  const [otpValues, setOTPValues] = useState(['', '', '', '', '', '']);

  //   const handleSubmit = async (e: any) => {
  //     e.preventDefault();

  //     try {
  //       if (!validateForm()) {
  //         return;
  //       }
  //       setOTPValues(["", "", "", "", "", ""]);

  //       const res = await forgotPassword(values.email).unwrap();

  //       toast({
  //         status: "success",
  //         description: res.message,
  //       });
  //     } catch (error) {
  //       if (error) {
  //         const errorResponse = error as ErrorResponseType;

  //         toast({
  //           status: "error",
  //           description: errorResponse?.data?.message || "Something went wrong",
  //         });
  //       }
  //     }
  //   };

  //   const handleSubmitOTP = async (e: any) => {
  //     try {
  //       e.preventDefault();

  //       const res = await verifyOTP({
  //         otp: otpValues.join(""),
  //         email: values.email,
  //       }).unwrap();

  //       console.log(res);

  //       toast({
  //         title: "OTP verified",
  //         description: res.message,
  //         status: "success",
  //         duration: 9000,
  //         isClosable: true,
  //       });
  //     } catch (error: any) {
  //       toast({
  //         title: "Error validating email",
  //         description: error.data.message,
  //         status: "error",
  //         duration: 9000,
  //         isClosable: true,
  //       });
  //     }
  //   };

  return (
    <VStack h={'100%'} justify={'center'} bg="transparent" minH="100vh">
      <Center mt="10">
        {/* {!isSuccess ? ( */}
        <Box
          w={['96%', '27.25rem']}
          p={'2rem'}
          // borderWidth={1}
          // borderRadius={8}
          h="33rem"
          bg="white"
        >
          <VStack gap={'1rem'} justify={'center'} h="100%">
            <Heading
              as="h2"
              fontWeight="semibold"
              fontSize={'2.25rem'}
              color={'#343d6bff'}
            >
              Forgot Password?
            </Heading>
            <Text textAlign="center" fontSize="1.125rem" color={'#929294ff'}>
              We will send OTP t your email
            </Text>

            <VStack as={'form'} w="100%" gap="1rem">
              <FormControl id="email" w="100%">
                <FormLabel w="100%" fontSize="14px" color="#121111">
                  Email Address
                </FormLabel>
                <Input
                  type="email"
                  placeholder="Enter your Email Address"
                  name="email"
                  _placeholder={{
                    color: '#595959ff',
                    fontSize: '0.875rem',
                  }}
                  border={'2px solid #d9d9d9ff'}
                  _focus={{
                    borderColor: '#1713f2ff',
                  }}
                  focusBorderColor="transparent"
                  py="1.5rem"
                  px="1rem"
                  w="100%"
                  sx={{
                    '::placeholder': {
                      fontSize: '14px',
                      color: 'a89f98',
                    },
                  }}
                />
              </FormControl>

              <Button
                bg="#1713f2ff"
                color="white"
                _hover={{ bg: '#1713f2ff' }}
                type="submit"
                mt={3}
                w="100%"
                py="1.5rem"
              >
                Reset Password
              </Button>
            </VStack>
            <Text textAlign="center" w="100%" fontSize="12px" color="#544f4c">
              Back to{' '}
              <Link
                href="/signup"
                style={{ textDecoration: 'underline', color: '#6e30b0' }}
              >
                Sign in
              </Link>
            </Text>
          </VStack>
        </Box>
        {/* ) : ( */}
        {/* <VStack justify="center" w="100%" max-w="376px" gap="0.3rem" h="100%">
          <VStack as="form" w="100%">
            <Heading as="h3" textAlign="center" fontSize="20px">
              Verify Email
            </Heading>
            <Text
              textAlign="justify"
              w="100%"
              mt="2"
              px="0.9"
              fontSize="15px"
              color="#544f4c"
            >
              Enter the 6-digit code sent to your email address.
            </Text>

            <Box my="1rem">
              <PinInput
                values={otpValues}
                //   onChange={(value, index, values) => setOTPValues(values)}
              />
            </Box>

            <Button
              bg="#6e30b0"
              color="white"
              _hover={{ bg: '#6e30b0' }}
              type="submit"
              mt={3}
              w="100%"
              py="1.5rem"
              // isDisabled={isLoading || !otpValues.join("")}
              // isLoading={isLoadingVerifyOTP}
            >
              Continue
            </Button>
          </VStack>

          <HStack
            w="100%"
            justify={'center'}
            as="form"
            //   onSubmit={handleSubmit}
          >
            <Text
              textAlign="justify"
              mt="2"
              px="0.9"
              fontSize="15px"
              color="#544f4c"
            >
              Didn’t get the code?
            </Text>

            <Button
              textAlign="justify"
              mt="2"
              px="0.9"
              fontSize="15px"
              color="#B697D7"
              variant={'outline'}
              type="submit"
            >
              Resend
            </Button>
          </HStack>
        </VStack> */}
        {/* )} */}
      </Center>
    </VStack>
  );
};

export default ForgotPassword;
