import React from 'react';
import { InvestmentHeader } from './components/header';
import { InvestmentAndStock } from './components/investmentAndStock';
import { LineChart } from './components/lineChart';

const page = () => {
  return <div>
    <InvestmentHeader />
    <LineChart />
    <InvestmentAndStock />
  </div>;
};

export default page;
