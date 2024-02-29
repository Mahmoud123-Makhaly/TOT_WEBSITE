import React from 'react';
import { Container } from 'reactstrap';

import { SolutionBanner } from './solutions-banner';
import { ChannelManagement } from './channel-management';
import { Crm } from './crm';
import { Oms } from './oms';
import { Pim } from './pim';
import { Pos } from './pos';
import { LastMile } from './last-mile';
import { Ecommerce } from './ecommerce';
import { SocialCommerce } from './social-commerce';

const Solutions = () => {
  return (
    <React.Fragment>
      <SolutionBanner />
      <Container>
        <Crm />
        <Oms />
        <Pim />
        <ChannelManagement />
        <Pos />
        <LastMile />
        <Ecommerce />
        <SocialCommerce />
      </Container>
    </React.Fragment>
  );
};

export default Solutions;
