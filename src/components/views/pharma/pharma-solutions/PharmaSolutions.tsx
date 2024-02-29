import { MiniCard, pharmaSolutionInfo } from '@/components';
import React from 'react';
import { Row, Col } from 'reactstrap';

const PharmaSolutions = () => {
  return (
    <React.Fragment>
      <h3 className="m-0 text-primary fw-bold font-24 pb-4">
        Our Pharma Solution from TOT is packed with a wide array of features designed to optimize and streamline
        pharmaceutical operations:
      </h3>
      <Row>
        {pharmaSolutionInfo.map((item, index) => (
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

export default PharmaSolutions;
