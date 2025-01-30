import React from 'react';
import { CreditCardsHeader } from './components/header';
import { Card } from './components/Card';
import ChartAndList from './components/chartAndCardList';

const page = () => {
  return <div>
    <CreditCardsHeader />
    <ChartAndList />
    <Card />
  </div>;
};

export default page;
