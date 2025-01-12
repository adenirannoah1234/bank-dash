'use client';

import React, { useEffect, useState } from 'react';
import {
  Box,
  HStack,
  VStack,
  Button,
  Input,
  FormControl,
  FormLabel,
  Avatar,
  Stack,
  IconButton,
  Flex,
  useToast,
} from '@chakra-ui/react';
import { FaPencil } from 'react-icons/fa6';
import { Pen } from 'lucide-react';
import { BallTriangle } from 'react-loader-spinner';
import {
  useGetUserDetailsQuery,
  useUpdateUserDetailsMutation,
} from '@/lib/features/auth/authSlice';

const EditProfile = () => {
  const toast = useToast();
  const { data: userDetails, isLoading } = useGetUserDetailsQuery({});
  console.log('userDetails', userDetails);
  const [updateUserDetails, { isLoading: isUpdating }] =
    useUpdateUserDetailsMutation();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    first_name: '',
    last_name: '',
    house_address: '',
    phone_number: '',
    date_of_birth: '',
    city: '',
    postal_code: '',
    country: '',
    present_address: '',
    username: '',
  });

  //  populating user details from the data fetched from the getUserDetails endpoint
  useEffect(() => {
    if (userDetails) {
      setFormData({
        first_name: userDetails.first_name || '',
        last_name: userDetails.last_name || '',
        username: userDetails.username || '',
        email: userDetails.email || '',
        date_of_birth: userDetails.date_of_birth || '',
        city: userDetails.city || '',
        postal_code: userDetails.postal_code || '',
        country: userDetails.country || '',
        present_address: userDetails.present_address || '',
        house_address: userDetails.house_address || '',
        phone_number: userDetails.phone_number || '',
        password: '',
      });
    }
  }, [userDetails]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Only include password in update if it was changed
    const updateData = {
      ...formData,
      password: formData.password || undefined,
    };

    try {
      const res = await updateUserDetails(updateData).unwrap();
      if (res) {
        toast({
          title: 'Success',
          description: 'Profile updated successfully',
          status: 'success',
          duration: 9000,
          isClosable: true,
          variant: 'left-accent',
          position: 'top',
        });
      }
    } catch (error) {
      // Handle error (show error message)
      console.error('Failed to update profile:', error);
    }
  };
  if (isLoading) {
    return (
      <Flex w="100vw" h="100vh" justify="center" align="center">
        <BallTriangle width="100" color="#1713f2ff" radius={5} />
      </Flex>
    );
  }
  return (
    <Box>
      <HStack
        align={{ base: 'center', md: 'stretch' }}
        spacing={7}
        mt={5}
        flexDirection={{ base: 'column', md: 'row' }}
      >
        <Box position="relative" width="fit-content" height="fit-content">
          <Avatar size="2xl" src="/christiana.png" />
          <IconButton
            icon={<FaPencil size="12" />}
            aria-label="Edit profile picture"
            size="sm"
            bg={'#1713f2ff'}
            color={'white'}
            position="absolute"
            bottom="3"
            right="-1"
            isRound
            _hover={{
              bg: '#1713f2ff',
            }}
            zIndex={2}
          />
        </Box>

        <Stack spacing={3} flex="1" w="full">
          <FormControl>
            <FormLabel>First Name</FormLabel>
            <Input
              type="text"
              placeholder="First Name"
              value={formData.first_name}
              onChange={handleInputChange}
              border={'2px solid #edf3f7ff'}
              py="1rem"
              px="1rem"
              _placeholder={{
                color: '#718ebfff',
                fontSize: '0.9375rem',
              }}
              _focus={{
                borderColor: '#1713f2ff',
              }}
              borderRadius={'10px'}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Last Name</FormLabel>
            <Input
              type="text"
              placeholder="Last Name"
              value={formData.last_name}
              onChange={handleInputChange}
              border={'2px solid #edf3f7ff'}
              py="1rem"
              px="1rem"
              _placeholder={{
                color: '#718ebfff',
                fontSize: '0.9375rem',
              }}
              _focus={{
                borderColor: '#1713f2ff',
              }}
              borderRadius={'10px'}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              border={'2px solid #edf3f7ff'}
              py="1rem"
              px="1rem"
              readOnly
              _placeholder={{
                color: '#718ebfff',
                fontSize: '0.9375rem',
              }}
              _focus={{
                borderColor: '#1713f2ff',
              }}
              borderRadius={'10px'}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Date of Birth</FormLabel>
            <Input
              type="date"
              placeholder="Date of Birth"
              value={formData.date_of_birth}
              onChange={handleInputChange}
              border={'2px solid #edf3f7ff'}
              py="1rem"
              px="1rem"
              _placeholder={{
                color: '#718ebfff',
                fontSize: '0.9375rem',
              }}
              _focus={{
                borderColor: '#1713f2ff',
              }}
              borderRadius={'10px'}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Payment Address</FormLabel>
            <Input
              type="text"
              placeholder="House Address"
              value={formData.house_address}
              onChange={handleInputChange}
              border={'2px solid #edf3f7ff'}
              py="1rem"
              px="1rem"
              _placeholder={{
                color: '#718ebfff',
                fontSize: '0.9375rem',
              }}
              _focus={{
                borderColor: '#1713f2ff',
              }}
              borderRadius={'10px'}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Postal Code</FormLabel>
            <Input
              type="text"
              placeholder="Postal Code"
              value={formData.postal_code}
              onChange={handleInputChange}
              border={'2px solid #edf3f7ff'}
              py="1rem"
              px="1rem"
              _placeholder={{
                color: '#718ebfff',
                fontSize: '0.9375rem',
              }}
              _focus={{
                borderColor: '#1713f2ff',
              }}
              borderRadius={'10px'}
            />
          </FormControl>
        </Stack>
        <Stack spacing={3} flex="1" w="full">
          <FormControl>
            <FormLabel>User Name</FormLabel>
            <Input
              type="text"
              placeholder="User Name"
              value={formData.username}
              onChange={handleInputChange}
              border={'2px solid #edf3f7ff'}
              py="1rem"
              px="1rem"
              _placeholder={{
                color: '#718ebfff',
                fontSize: '0.9375rem',
              }}
              _focus={{
                borderColor: '#1713f2ff',
              }}
              borderRadius={'10px'}
            />
          </FormControl>

          <FormControl>
            <FormLabel>Present Address</FormLabel>
            <Input
              type="text"
              placeholder="Present Address"
              value={formData.present_address}
              onChange={handleInputChange}
              border={'2px solid #edf3f7ff'}
              py="1rem"
              px="1rem"
              _placeholder={{
                color: '#718ebfff',
                fontSize: '0.9375rem',
              }}
              _focus={{
                borderColor: '#1713f2ff',
              }}
              borderRadius={'10px'}
            />
          </FormControl>
          <FormControl>
            <FormLabel>City</FormLabel>
            <Input
              type="text"
              placeholder="City"
              value={formData.city}
              onChange={handleInputChange}
              border={'2px solid #edf3f7ff'}
              py="1rem"
              px="1rem"
              _placeholder={{
                color: '#718ebfff',
                fontSize: '0.9375rem',
              }}
              _focus={{
                borderColor: '#1713f2ff',
              }}
              borderRadius={'10px'}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Country</FormLabel>
            <Input
              type="text"
              placeholder="Country"
              value={formData.country}
              onChange={handleInputChange}
              border={'2px solid #edf3f7ff'}
              py="1rem"
              px="1rem"
              _placeholder={{
                color: '#718ebfff',
                fontSize: '0.9375rem',
              }}
              _focus={{
                borderColor: '#1713f2ff',
              }}
              borderRadius={'10px'}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Country</FormLabel>
            <Input
              type="number"
              placeholder="Phone Number"
              value={formData.phone_number}
              onChange={handleInputChange}
              border={'2px solid #edf3f7ff'}
              py="1rem"
              px="1rem"
              _placeholder={{
                color: '#718ebfff',
                fontSize: '0.9375rem',
              }}
              _focus={{
                borderColor: '#1713f2ff',
              }}
              borderRadius={'10px'}
            />
          </FormControl>
        </Stack>
      </HStack>
      <Flex justify="flex-end" mt={6}>
        <Button
          type="submit"
          bg={'#1713f2'}
          color={'white'}
          _hover={{
            bg: '#1713f2',
            color: 'white',
          }}
          _active={{
            bg: '#1713f2',
            color: 'white',
          }}
          fontWeight={'bold'}
          fontSize={'0.9375rem'}
          px={'1.25rem'}
          py={'0.75rem'}
          w={{ base: '100%', md: '20%' }}
          borderRadius={'10px'}
        >
          Save
        </Button>
      </Flex>
    </Box>
  );
};

export default EditProfile;
