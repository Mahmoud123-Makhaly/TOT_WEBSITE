'use client';

import React from 'react';
import { Button } from 'reactstrap';

interface IButtonMakerProps {
  btnText?: string;
  className?: string;
  onClick?: (e: any) => void;
  type?: 'button' | 'reset' | 'submit' | undefined;
  disabled?: boolean;
}
const ButtonMaker = (props: IButtonMakerProps) => {
  const { btnText, className, onClick, type, disabled = false } = props;
  return (
    <Button
      onClick={e => onClick && onClick(e)}
      className={`button-maker btn-outline-primary ${className && className}`}
      type={type}
      disabled={disabled}
    >
      {btnText}
    </Button>
  );
};

export default ButtonMaker;
