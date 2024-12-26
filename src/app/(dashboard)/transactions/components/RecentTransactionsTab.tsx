import React from 'react';
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Text,
} from '@chakra-ui/react';
import AllTransactionTable from './AllTransactionTable';
import MobileTable from './MobileTable';

const RecentTransactions = () => {
  return (
    <Box marginTop={{ base: '3.2rem', lg: '1rem' }}>
      <Text fontSize={'1.2rem'} fontWeight={'semibold'} color={'#343d6bff'}>
        Recent Transactions
      </Text>
      <Tabs variant="enclosed" mt={5} w={'100%'}>
        <TabList>
          <Tab
            _selected={{
              color: '#1713f2ff',
              borderBottomColor: '#1713f2ff',
              borderBottomWidth: '3px',
            }}
          >
            All Transactions
          </Tab>
          <Tab
            _selected={{
              color: '#1713f2ff',
              borderBottomColor: '#1713f2ff',
              borderBottomWidth: '3px',
            }}
          >
            Income
          </Tab>
          <Tab
            _selected={{
              color: '#1713f2ff',
              borderBottomColor: '#1713f2ff',
              borderBottomWidth: '3px',
            }}
          >
            Expense
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Box display={{ base: 'none', lg: 'block' }}>
              <AllTransactionTable />
            </Box>
            <Box display={{ base: 'block', lg: 'none' }}>
              <MobileTable />
            </Box>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default RecentTransactions;
