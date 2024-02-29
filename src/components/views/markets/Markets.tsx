import React from 'react';
import { Container } from 'reactstrap';

import { Support } from '@/components';

import { MarketsBanner } from './banner';
import { Features } from './features';
import { Messages } from './messages';
import { MarketSolution } from './market-solution';
const Markets = () => {
  return (
    <React.Fragment>
      <MarketsBanner />
      <Container>
        <Features />
      </Container>
      <Container>
        <MarketSolution />
      </Container>
      <Container>
        <Messages />
      </Container>
      <Container>
        <Support />
      </Container>
    </React.Fragment>
  );
};

export default Markets;
