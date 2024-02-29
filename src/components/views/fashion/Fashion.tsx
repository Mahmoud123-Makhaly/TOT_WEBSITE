import React from 'react';
import { Container } from 'reactstrap';

import { Support } from '@/components';

import { FashionBanner } from './banner';
import FashionSolutions from './fashion-solutions/FashionSolutions';
import { ManagementSolutions } from './management-solutions';

const Fashion = () => {
  return (
    <React.Fragment>
      <FashionBanner />
      <Container>
        <FashionSolutions />
      </Container>
      <Container>
        <ManagementSolutions />
      </Container>
      <Container>
        <Support />
      </Container>
    </React.Fragment>
  );
};

export default Fashion;
