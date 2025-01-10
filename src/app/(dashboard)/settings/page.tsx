import {
  Box,
  Text,
  TabList,
  TabPanels,
  TabPanel,
  Tab,
  Tabs,
} from '@chakra-ui/react';
import React from 'react';
import EditProfile from './component/EditProfile';

const page = () => {
  return (
    <Box
      marginTop={{ base: '3.2rem', lg: '1rem' }}
      bg={'white'}
      borderRadius={'3xl'}
    >
      <Tabs variant="enclosed" mt={5} w={'100%'} p={{ base: '4', md: '7' }}>
        <TabList>
          <Tab
            _selected={{
              color: '#1713f2ff',
              borderBottomColor: '#1713f2ff',
              borderBottomWidth: '3px',
              // whiteSpace: 'nowrap',
            }}
          >
            Edit Profile
          </Tab>
          <Tab
            _selected={{
              color: '#1713f2ff',
              borderBottomColor: '#1713f2ff',
              borderBottomWidth: '3px',
              // whiteSpace: 'nowrap',
            }}
          >
            Preferences
          </Tab>
          <Tab
            _selected={{
              color: '#1713f2ff',
              borderBottomColor: '#1713f2ff',
              borderBottomWidth: '3px',
              // whiteSpace: 'nowrap',
            }}
          >
            Security
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Box>
              <EditProfile />
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

export default page;
