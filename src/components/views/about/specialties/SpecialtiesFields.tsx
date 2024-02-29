'use client';

import React from 'react';
import { Col, Row } from 'reactstrap';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { fields } from '@/components';

const SpecialtiesFields = () => {
  const router = useRouter();
  return (
    <div className="specialties-fields">
      <Row className="g-3">
        {fields.map((item, index) => (
          <Col className="col-6 col-md-4 col-lg-3" key={index}>
            <div
              onClick={() => {
                router.push(`/solutions#${item.sectionId}`);
              }}
              className={`text-center fields-card  ${item.className} pt-32 d-flex flex-column justify-content-around align-items-center h-100 w-100`}
              style={{ background: item.background, cursor: 'pointer' }}
            >
              <Image src={item.imgSrc} width={0} height={0} alt={item.imgAlt} />
              <h4 className="m-0 pb-2 font-24 fw-semibold text-primary  text pt-3 line-height-24">{item.text}</h4>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default SpecialtiesFields;
