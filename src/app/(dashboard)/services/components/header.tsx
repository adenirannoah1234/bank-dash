import { Box, Flex, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import Image from 'next/image';
import { HeaderServiceList } from '@/app/constants/data';

const ServiceHeader = () => {
  return (
    <Box w="full">
      <Flex
        alignItems="center"
        ml={{ base: 0, md: 3 }}
        gap={4}
        overflowX={{ base: 'auto', md: 'hidden' }}
        py={4}
        sx={{
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          msOverflowStyle: 'none',
          scrollbarWidth: 'none',
        }}
      >
        {HeaderServiceList.map((item, index) => (
          <Box
            key={index}
            minW={{ base: '280px', md: '315px' }}
            flexShrink={0}
            bg="white"
            boxShadow="md"
            py={5}
            px={{ base: 8, md: 10 }}
            borderRadius="3xl"
          >
            <Flex align="center" justify="space-between">
              <Image src={item.image} alt={item.name} width={70} height={70} />
              <Stack spacing={1} ml={4}>
                <Text fontSize="xl" fontWeight="semibold" color="#242424">
                  {item.name}
                </Text>
                <Text fontSize="base" color="#718ebf">
                  {item.description}
                </Text>
              </Stack>
            </Flex>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default ServiceHeader;
