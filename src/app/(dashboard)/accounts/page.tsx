import React from 'react';
import { AccountHeader } from './components/header';
import { AccountTransactions } from './components/transactions';
import { ColumnChart } from './components/columnChart';

const page = () => {
  return <div>
    <AccountHeader />
    <AccountTransactions />
    <ColumnChart />
  </div>;
};

export default page;
