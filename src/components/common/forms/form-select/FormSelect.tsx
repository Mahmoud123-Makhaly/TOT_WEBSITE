'use client';

import React from 'react';
import { Field, useField } from 'formik';

interface IFormSelect {
  name: string;
  children: any;
}
const FormSelect = ({ ...props }: IFormSelect) => {
  const [field, meta] = useField(props);
  const { children } = props;
  return (
    <div>
      <select {...field} {...props} className="form-control">
        {children}
      </select>
      <div className="text-danger  mb-3">{meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}</div>
    </div>
  );
};

export default FormSelect;
