import React from 'react';
import { Col, Row } from 'reactstrap';
import Image from 'next/image';

import { ecommerceInfo, ContentBlock } from '@/components';
import ecommerce from '@assets/images/solutions/ecommerce.jpg';

const Ecommerce = () => {
  return (
    <div id="e-commerce" className=" pt-42">
      <Row>
        <Col xxl={7}>
          <Image src={ecommerce} alt="ecommerce" width={0} height={0} className="img-responsive mb-3 mb-xxl-0" />
        </Col>
        <Col xxl={5}>
          <ContentBlock
            title={ecommerceInfo.title}
            description={ecommerceInfo.description}
            contentBackground="light-green"
            endOverLayed
          />
        </Col>
      </Row>
    </div>
  );
};

export default Ecommerce;
