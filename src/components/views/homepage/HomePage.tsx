import React from 'react';
import { Container } from 'reactstrap';

import { Support } from '@components';

import { Solutions } from './solutions';
import { Invitaion } from './invitation';
import { OurClients } from './our-clients';
import { HomeBanner } from './home-banner';
import { TotAdvantages } from './tot-advantages';

const HomePage = () => {
  return (
    <React.Fragment>
      <HomeBanner />
      <Container>
        <TotAdvantages />
        <Solutions />
      </Container>
      <Invitaion />
      <Container>
        <OurClients />
      </Container>
      <div className="bg-light-gray">
        <Container>
          <Support />
        </Container>
      </div>
    </React.Fragment>
  );
};

export default HomePage;
