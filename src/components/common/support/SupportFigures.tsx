import React from 'react';
import { Row, Col } from 'reactstrap';
import Link from 'next/link';

import { Figure, supportFigures } from '@/components';

const SupportFigures = () => {
  return (
    <Row>
      {supportFigures.map((item, index) => (
        <div className="col-6   col-sm-4 col-lg-3 col-xl-4" key={index}>
          <Link href={item.slug}>
            <Figure
              imgSrc={item.imgSrc}
              imgAlt={item.imgAlt}
              text={item.text}
              className={`${item.className} mb-32 w-100`}
            />
          </Link>
        </div>
      ))}
    </Row>
  );
};

export default SupportFigures;
