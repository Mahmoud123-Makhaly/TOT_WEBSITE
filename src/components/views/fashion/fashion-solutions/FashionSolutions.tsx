import React from 'react';
import { Row, Col } from 'reactstrap';

import { fashionSolutionsInfo, MiniCard } from '@/components';

const FashionSolutions = () => {
  return (
    <React.Fragment>
      <h3 className="m-0 text-primary fw-bold font-24 pb-4">
        Our fashion solutions offer a range of features to revolutionize your fashion retail business:
      </h3>
      <Row>
        {fashionSolutionsInfo.map((item, index) => (
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

export default FashionSolutions;
