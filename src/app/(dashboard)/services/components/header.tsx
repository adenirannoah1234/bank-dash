import { Box, Flex, HStack, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { HeaderServiceList } from '@/app/constants/data';
import Image from 'next/image';

const ServiceHeader = () => {
  return (
    <Flex alignItems={'center'} gap={5}>
      {HeaderServiceList.map((item, index) => (
        <Box
          key={index}
          w={'350px'}
          bg={'white'}
          boxShadow={'md'}
          py={5}
          px={'40px'}
          borderRadius={10}
        >
          <Flex align={'center'} justifyContent={'space-between'}>
            <Image src={item.image} alt={item.name} width={70} height={70} />
            <Stack>
              <Text
                fontSize="1.25rem"
                fontWeight="semibold"
                color={'#242424ff'}
              >
                {item.name}
              </Text>
              <Text fontSize="1rem" color={'#718ebfff'}>
                {item.description}
              </Text>
            </Stack>
          </Flex>
        </Box>
      ))}
    </Flex>
  );
};

export default ServiceHeader;
