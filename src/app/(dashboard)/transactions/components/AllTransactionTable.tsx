'use client';

import React from 'react';
import {
  Box,
  Table,
  Td,
  Tr,
  Th,
  Thead,
  Tbody,
  Flex,
  Text,
  Button,
} from '@chakra-ui/react';
import Image from 'next/image';
import { AllTransactions } from '../../../constants/data';
import Pagination from '../../components/pagination';

const AllTransactionTable = () => {
  return (
    <Box overflowX={'auto'} w={'100%'}>
      <Table
        variant={'simple'}
        cellSpacing={3}
        bg={'#ffffffff'}
        borderRadius={'3xl'}
      >
        <Thead>
          <Tr>
            <Th
              color={'#718ebfff'}
              fontWeight={'medium'}
              fontSize={'1rem'}
              whiteSpace={'nowrap'}
            >
              Description
            </Th>
            <Th
              color={'#718ebfff'}
              fontWeight={'medium'}
              fontSize={'1rem'}
              whiteSpace={'nowrap'}
            >
              Transaction ID
            </Th>
            <Th
              color={'#718ebfff'}
              fontWeight={'medium'}
              fontSize={'1rem'}
              whiteSpace={'nowrap'}
            >
              Type
            </Th>
            <Th
              color={'#718ebfff'}
              fontWeight={'medium'}
              fontSize={'1rem'}
              whiteSpace={'nowrap'}
            >
              Card
            </Th>
            <Th
              color={'#718ebfff'}
              fontWeight={'medium'}
              fontSize={'1rem'}
              whiteSpace={'nowrap'}
            >
              Date
            </Th>
            <Th
              color={'#718ebfff'}
              fontWeight={'medium'}
              fontSize={'1rem'}
              whiteSpace={'nowrap'}
            >
              Amount
            </Th>
            <Th
              color={'#718ebfff'}
              fontWeight={'medium'}
              fontSize={'1rem'}
              whiteSpace={'nowrap'}
            >
              Receipt
            </Th>
          </Tr>
        </Thead>
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
                  <Text
                    fontSize={'1rem'}
                    color={'#242424ff'}
                    whiteSpace={'nowrap'}
                    ml={2}
                  >
                    {transaction.description}
                  </Text>
                </Flex>
              </Td>
              <Td fontSize={'1rem'} whiteSpace={'nowrap'} color={'#242424ff'}>
                {transaction.transactionId}
              </Td>
              <Td fontSize={'1rem'} color={'#242424ff'} whiteSpace={'nowrap'}>
                {transaction.type}
              </Td>
              <Td fontSize={'1rem'} color={'#242424ff'} whiteSpace={'nowrap'}>
                {transaction.card}
              </Td>
              <Td fontSize={'1rem'} color={'#242424ff'} whiteSpace={'nowrap'}>
                {transaction.date}
              </Td>
              <Td
                fontSize={'1rem'}
                color={transaction.color}
                whiteSpace={'nowrap'}
              >
                {transaction.amount}
              </Td>
              <Td>
                <Button
                  bg={'white'}
                  _hover={{
                    bg: 'white',
                  }}
                  border={'2px solid #123187ff'}
                  borderRadius={'3xl'}
                  color={'#123187ff'}
                >
                  Download
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <Flex justifyContent={'flex-end'} my={4}>
        <Pagination
          onPageChange={(pageNumber) => console.log(pageNumber)}
          currentPage={1}
          pageSize={2}
          totalCount={AllTransactions.length}
          siblingCount={1}
        />
      </Flex>
    </Box>
  );
};

export default AllTransactionTable;
