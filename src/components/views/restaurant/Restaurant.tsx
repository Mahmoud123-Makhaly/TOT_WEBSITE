import React from 'react';
import { Container } from 'reactstrap';

import { RestaurantBanner } from './banner';
import { FoodServices } from './food-services';
import { RestaurantSoftware } from './restaurant-software';
import { Support } from '@/components';

const Restaurant = () => {
  return (
    <React.Fragment>
      <RestaurantBanner />
      <Container>
        <FoodServices />
      </Container>
      <Container>
        <RestaurantSoftware />
      </Container>
      <Container>
        <Support />
      </Container>
    </React.Fragment>
  );
};

export default Restaurant;
