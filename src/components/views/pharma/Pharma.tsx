import React from 'react';
import { Container } from 'reactstrap';

import { Support } from '@/components';

import { PharmaBanner } from './banner';
import { PharmaSolutions } from './pharma-solutions';
import { PharmaBusiness } from './pharma-business';

const Pharma = () => {
  return (
    <React.Fragment>
      <PharmaBanner />
      <Container>
        <PharmaSolutions />
      </Container>
      <Container>
        <PharmaBusiness />
      </Container>
      <Container>
        <Support />
      </Container>
    </React.Fragment>
  );
};

export default Pharma;
