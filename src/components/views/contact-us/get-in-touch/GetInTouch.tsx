'use client';

import React, { useMemo, useState } from 'react';
import { Row } from 'reactstrap';
import Image from 'next/image';
import * as Yup from 'yup';

import getintouch from '@assets/images/contact-us/gitintouch.png';
import { ModalBox, phoneRegExp } from '@components';

import GetInTouchForm from './GetInTouchForm';
import ContactModal from './ContactModal';

const GetInTouch = () => {
  const [toggle, setToggle] = useState(false);
  const initialValues = useMemo(() => {
    return { name: '', email: '', phoneNumber: '', industry: '', identify: '', hearing: '' };
  }, []);
  const validationSchema = Yup.object({
    name: Yup.string().max(15, 'Must be 15 characters or less').required('Name Is Required'),
    email: Yup.string().email('Invalid email address').required('Email Is Required'),
    phoneNumber: Yup.string()
      .required('PhoneNumber Is Required')
      .matches(phoneRegExp, 'Phone number is not valid')
      .min(10, 'too short')
      .max(10, 'too long'),
    industry: Yup.string().required('Please select  value'),
    identify: Yup.string().required('Please select  value'),
    hearing: Yup.string().required('Please select  value'),
  });
  const onSubmit = () => {
    setToggle(true);
  };
  return (
    <React.Fragment>
      <div className="git_in_touch">
        <h4 className="mb-0 pb-3 font-24 fw-bold text-primary">Get in Touch</h4>
        <Row>
          <div className="col-xl-8  col-12">
            <GetInTouchForm initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} />
          </div>
          <div className="col-xl-4   col-12">
            <div className="touch-img d-block d-xl-none">
              <Image src={getintouch} alt="getintouch" width={0} height={0} />
            </div>
          </div>
        </Row>
        <ModalBox toggle={toggle} setToggle={setToggle} size="md">
          <ContactModal toggle={toggle} setToggle={setToggle} />
        </ModalBox>
      </div>
    </React.Fragment>
  );
};

export default GetInTouch;
