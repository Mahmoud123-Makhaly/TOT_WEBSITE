'use client';
import React from 'react';
import { FormikProvider, useFormik } from 'formik';
import { Form } from 'reactstrap';
import Image from 'next/image';
import getintouch from '@assets/images/contact-us/gitintouch.png';

import { ButtonMaker, FormSelect, ModalBox, TextInput, phoneRegExp } from '@components';
interface IGetInTouchForm {
  initialValues?: any;
  validationSchema?: any | (() => any);
  onSubmit?: any;
}
const GetInTouchForm = (props: IGetInTouchForm) => {
  const { initialValues, validationSchema, onSubmit } = props;
  const handling = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <div>
      <FormikProvider value={handling}>
        <Form
          onSubmit={e => {
            e.preventDefault();
            handling.handleSubmit();
          }}
          className="touch-form position-relative"
        >
          <TextInput name="name" type="text" placeholder="Name*" />
          <TextInput name="email" type="email" placeholder="Email*" />
          <TextInput name="phoneNumber" type="text" placeholder="Phone number*" />
          <div className="touch-img position-absolute top-50 translate-middle-y d-none d-xl-block">
            <Image src={getintouch} alt="getintouch" width={0} height={0} />
          </div>
          <FormSelect name="industry">
            <option>What is the industry you provide?</option>
            <option>What is segmentation in marketing?</option>
            <option>What is segmentation in marketing?</option>
            <option>What is segmentation in marketing?</option>
            <option>What is segmentation in marketing?</option>
            <option>What is segmentation in marketing?</option>
          </FormSelect>

          <FormSelect name="identify">
            <option>How do you identify yourself?</option>
            <option>What is segmentation in marketing?</option>
            <option>What is segmentation in marketing?</option>
            <option>What is segmentation in marketing?</option>
            <option>What is segmentation in marketing?</option>
            <option>What is segmentation in marketing?</option>
          </FormSelect>
          <FormSelect name="hearing">
            <option>How did you find us?</option>
            <option>What is segmentation in marketing?</option>
            <option>What is segmentation in marketing?</option>
            <option>What is segmentation in marketing?</option>
            <option>What is segmentation in marketing?</option>
            <option>What is segmentation in marketing?</option>
          </FormSelect>
          <ButtonMaker btnText="Submit" type="submit" disabled={!handling.dirty} />
        </Form>
      </FormikProvider>
    </div>
  );
};

export default GetInTouchForm;
