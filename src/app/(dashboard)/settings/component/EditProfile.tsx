import React from 'react';
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
} from '@chakra-ui/react';
import { FaPencil } from 'react-icons/fa6';
import { Pen } from 'lucide-react';

const EditProfile = () => {
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
            <FormLabel>Your Name</FormLabel>
            <Input
              type="text"
              placeholder="Name"
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
            <FormLabel>Date of Birth</FormLabel>
            <Input
              type="date"
              placeholder="Date of Birth"
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
              placeholder="Payment Address"
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
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              placeholder="Password"
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
