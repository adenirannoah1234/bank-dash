import React from 'react';
import { Box, Flex, Text, VStack, Button, HStack } from '@chakra-ui/react';
import { Wallet, TrendingUp, TrendingDown, Plus, Download } from 'lucide-react';

const BalanceComponents = () => {
  const balanceData = {
    currentBalance: 25000.0,
    changePercent: 2.5,
    isPositive: true,
  };

  return (
    <Box w="full" bg="white" borderRadius="lg" p={6} boxShadow="sm">
      <Flex justify="space-between" align="center" mb={2}>
        <Text fontSize="sm" color="gray.600">
          Total Balance
        </Text>
        <Box color="gray.400">
          <Wallet size={16} />
        </Box>
      </Flex>

      <VStack align="stretch" spacing={4}>
        <Text fontSize="2xl" fontWeight="bold">
          $
          {balanceData.currentBalance.toLocaleString('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </Text>

        <Flex align="center" gap={2}>
          {balanceData.isPositive ? (
            <TrendingUp size={16} color="green" />
          ) : (
            <TrendingDown size={16} color="red" />
          )}
          <Text
            fontSize="sm"
            color={balanceData.isPositive ? 'green.500' : 'red.500'}
          >
            {balanceData.isPositive ? '+' : '-'}
            {Math.abs(balanceData.changePercent)}%
          </Text>
        </Flex>

        <HStack
          spacing={4}
          pt={2}
          flexDirection={{ base: 'column', md: 'row' }}
        >
          <Button
            leftIcon={<Plus size={16} />}
            bg={'#1713f2ff'}
            _hover={{
              bg: '#1713f2ff',
            }}
            color={'white'}
            size="sm"
            width="full"
            onClick={() => {}}
          >
            Add Money
          </Button>
          <Button
            leftIcon={<Download size={16} />}
            colorScheme="gray"
            size="sm"
            width="full"
            variant="outline"
            onClick={() => {}}
          >
            Receive Money
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
};

export default BalanceComponents;
