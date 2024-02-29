import React from 'react';
import { Row, Col } from 'reactstrap';

import { foodServicesInfo, MiniCard } from '@/components';

const FoodServices = () => {
  return (
    <React.Fragment>
      <h3 className="m-0 text-primary fw-bold font-24 pb-4">Our restaurant or food service solutions offer:</h3>
      <Row>
        {foodServicesInfo.map((item, index) => (
          <Col md={6} key={index}>
            <MiniCard
              imgSrc={item.imgSrc}
              title={item.title}
              text={item.desc}
              className={`${item.className}`}
              desktopBackground={item.desktopBackground}
              mobileBackground={item.mobileBackground}
            />
          </Col>
        ))}
      </Row>
    </React.Fragment>
  );
};

export default FoodServices;
