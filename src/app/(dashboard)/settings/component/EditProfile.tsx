'use client';

import React, { useEffect, useRef, useState } from 'react';
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
import {
  useFormatDate,
  useFormatImage,
} from '@/app/hooks/useFormatDateandImage';
import { useAppDispatch } from '@/lib/features/hook';

import { isFetchBaseQueryError } from '@/lib/features/api.slice';

interface FormData {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  house_address: string;
  phone_number: string;
  date_of_birth: string;
  city: string;
  postal_code: string;
  country: string;
  present_address: string;
  username: string;
  profile_image: File | null;
}

interface UserDetails {
  first_name?: string;
  last_name?: string;
  username?: string;
  email?: string;
  date_of_birth?: string;
  city?: string;
  postal_code?: string;
  country?: string;
  present_address?: string;
  house_address?: string;
  phone_number?: string;
  profile_image?: string;
}

const EditProfile = () => {
  const { formatDateForInput, formatDateForDisplay } = useFormatDate();
  const { formatProfileImage, cleanupImageUrl } = useFormatImage();
  const toast = useToast();
  const { data: userDetails, isLoading } = useGetUserDetailsQuery({});
  // console.log('userDetails', userDetails);
  const [updateUserDetails, { isLoading: isUpdating }] =
    useUpdateUserDetailsMutation();
  const dispatch = useAppDispatch();
  const [profilePreview, setProfilePreview] = useState<string | null>(null);

  const [formData, setFormData] = useState<FormData>({
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
    profile_image: null,
  });

  //  populating user details from the data fetched from the getUserDetails endpoint
  useEffect(() => {
    if (userDetails) {
      setFormData({
        first_name: userDetails.first_name || '',
        last_name: userDetails.last_name || '',
        username: userDetails.username || '',
        email: userDetails.email || '',
        date_of_birth: formatDateForInput(userDetails.date_of_birth || ''),
        city: userDetails.city || '',
        postal_code: userDetails.postal_code || '',
        country: userDetails.country || '',
        present_address: userDetails.present_address || '',
        house_address: userDetails.house_address || '',
        phone_number: userDetails.phone_number || '',
        password: '',
        profile_image: null,
      });
      if (userDetails?.profile_image) {
        // Clean up previous preview URL if it exists
        if (profilePreview) {
          cleanupImageUrl(profilePreview);
        }

        const formattedImage = formatProfileImage(userDetails.profile_image);
        setProfilePreview(formattedImage);
      }

      // Cleanup when component unmounts
      return () => {
        if (profilePreview) {
          cleanupImageUrl(profilePreview);
        }
      };
    }
  }, [userDetails, dispatch]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleProfilePictureClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Clean up previous preview URL if it exists
      if (profilePreview) {
        cleanupImageUrl(profilePreview);
      }

      setFormData((prev) => ({
        ...prev,
        profile_image: file,
      }));

      const previewUrl = URL.createObjectURL(file);
      setProfilePreview(previewUrl);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Convert profile_image to base64 if it exists
    let imageBase64 = null;
    if (formData.profile_image) {
      const reader = new FileReader();
      imageBase64 = await new Promise((resolve) => {
        reader.onload = () => resolve(reader.result);
        if (formData.profile_image) {
          reader.readAsDataURL(formData.profile_image);
        }
      });
    }

    // Create payload with all form data and base64 image
    const payload = {
      first_name: formData.first_name,
      last_name: formData.last_name,
      username: formData.username,
      email: formData.email,
      date_of_birth: formData.date_of_birth,
      city: formData.city,
      postal_code: formData.postal_code,
      country: formData.country,
      present_address: formData.present_address,
      house_address: formData.house_address,
      phone_number: formData.phone_number,
      ...(imageBase64 ? { profile_image: imageBase64 } : {}),
    };

    try {
      const res = await updateUserDetails(payload).unwrap();
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

      // handle other errors
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

  if (isLoading) {
    return (
      <Flex justify="center" align="center">
        <BallTriangle width="100" color="#1713f2ff" radius={5} />
      </Flex>
    );
  }
  return (
    <Box as="form" onSubmit={handleSubmit}>
      <HStack
        align={{ base: 'center', md: 'stretch' }}
        spacing={7}
        mt={5}
        flexDirection={{ base: 'column', md: 'row' }}
      >
        <Box position="relative" width="fit-content" height="fit-content">
          <Avatar
            size="2xl"
            src={profilePreview || '/christiana.png'}
            referrerPolicy="no-referrer"
            ignoreFallback={true}
            loading="eager"
          />
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/*"
            style={{ display: 'none' }}
          />
          <IconButton
            icon={<FaPencil size="12" />}
            aria-label="Edit profile picture"
            size="sm"
            bg={'#1713f2ff'}
            color={'white'}
            position="absolute"
            onClick={handleProfilePictureClick}
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
              name="first_name"
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
              name="last_name"
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
              name="email"
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
              name="date_of_birth"
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
              name="house_address"
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
              name="postal_code"
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
              name="username"
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
              name="present_address"
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
              name="city"
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
              name="country"
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
              name="phone_number"
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
          isDisabled={isLoading}
          isLoading={isUpdating}
          loadingText="Saving..."
        >
          Save
        </Button>
      </Flex>
    </Box>
  );
};

export default EditProfile;
