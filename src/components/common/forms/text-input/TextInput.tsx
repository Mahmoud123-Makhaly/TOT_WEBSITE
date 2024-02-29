'use client';

import React from 'react';
import { Field, useField } from 'formik';

interface ITextInputProps {
  name: string;
  type: string;
  placeholder: string;
}
const TextInput = ({ ...props }: ITextInputProps) => {
  const [field, meta] = useField(props);
  return (
    <div className="mb-3">
      <Field className="form-control " {...field} {...props} />
      <p className="text-danger"> {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}</p>
    </div>
  );
};

export default TextInput;
