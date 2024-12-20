import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Flex,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import Image from 'next/image';
import { AllTransactions } from '@/app/constants/data';

const MobileTable = () => {
  return (
    <Box>
      <Table bg={'#ffffff'} borderRadius={'3xl'}>
        <Tbody>
          {AllTransactions.map((transaction) => (
            <Tr key={transaction.id}>
              <Td fontSize={'1rem'} color={'#242424ff'} whiteSpace={'nowrap'}>
                <Flex align={'center'} gap={2}>
                  <Box
                    position={'relative'}
                    width={'30px'}
                    height={'30px'}
                    flexShrink={0}
                  >
                    <Image
                      src={transaction.image}
                      alt="description"
                      fill
                      style={{
                        objectFit: 'cover',
                        borderRadius: '50%',
                      }}
                    />
                  </Box>
                  <Box>
                    <Text
                      fontSize={'0.8125rem'}
                      color={'#242424ff'}
                      whiteSpace={'nowrap'}
                      ml={2}
                    >
                      {transaction.description}
                    </Text>
                    <Text color={'#718ebfff'} fontSize={'0.75rem'} ml={2}>
                      {transaction.date}
                    </Text>
                  </Box>
                </Flex>
              </Td>

              <Td
                fontSize={'1rem'}
                color={transaction.color}
                whiteSpace={'nowrap'}
              >
                {transaction.amount}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default MobileTable;
