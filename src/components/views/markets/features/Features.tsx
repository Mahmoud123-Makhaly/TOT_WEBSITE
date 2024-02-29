import React from 'react';
import { Row, Col } from 'reactstrap';
import { MiniCard, featuresInfo } from '@components';

const Features = () => {
  return (
    <React.Fragment>
      <h3 className="m-0 text-primary fw-bold font-24 pb-4">
        Our E-Commerce Solution from TOT is packed with a wide array of features designed to reach more customers,
        increase sales, and improve efficiency:
      </h3>
      <Row>
        {featuresInfo.map((item, index) => (
          <Col md={6} key={index}>
            <MiniCard
              imgSrc={item.imgSrc}
              title={item.title}
              text={item.desc}
              className={`${item.className}`}
              mobileBackground={item.mobileBackground}
              desktopBackground={item.desktopBackground}
            />
          </Col>
        ))}
      </Row>
    </React.Fragment>
  );
};

export default Features;
