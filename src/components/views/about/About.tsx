import React from 'react';

import { Specialties } from './specialties';
import { Container } from 'reactstrap';
import { TouchPoints } from './touch-points';
import { TransFormation } from './tansformation';
import { Mission } from './mission';
import { Vision } from './vision';
import { AboutBanner } from './about-banner';

const About = () => {
  return (
    <React.Fragment>
      <AboutBanner />
      <Container>
        <Mission />
        <Vision />
        <Specialties />
        <TouchPoints />
        <TransFormation />
      </Container>
    </React.Fragment>
  );
};

export default About;
