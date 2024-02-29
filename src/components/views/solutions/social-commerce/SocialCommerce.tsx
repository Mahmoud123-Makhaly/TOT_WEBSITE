import React from 'react';
import Image from 'next/image';
import { Col, Row } from 'reactstrap';

import social from '@assets/images/solutions/social.jpg';
import { ContentBlock, socialInfo } from '@/components';

const SocialCommerce = () => {
  return (
    <div id="social-e-commerce" className="social-e-commerce mb-42">
      <Row className=" flex-column-reverse flex-xxl-row">
        <Col xxl={4}>
          <ContentBlock
            title={socialInfo.title}
            description={socialInfo.description}
            contentBackground="AntiqueWhite"
          />
        </Col>
        <Col xxl={8}>
          <Image src={social} alt="social" width={0} height={0} className="img-responsive mb-3 mb-xxl-0" />
        </Col>
      </Row>
    </div>
  );
};

export default SocialCommerce;
