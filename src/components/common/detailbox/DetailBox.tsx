import React from 'react';

import { ButtonMaker } from '@components';
interface IDetailBox {
  title?: string;
  desc?: string;
  className?: string;
  boldDesc?: string;
  btnText?: string;
  onClick?: () => void;
}
const DetailBox = (props: IDetailBox) => {
  const { title, desc, className, boldDesc, btnText, onClick } = props;
  return (
    <div className={`detail_box bg-white  border-raduis-23 ${className && className}`}>
      {title && <h3 className="title font-24 font-weight-700 text-primary">{title}</h3>}
      {desc && <p className="text m-0">{desc}</p>}
      {btnText && <ButtonMaker btnText={btnText} onClick={onClick} />}
      {boldDesc && <p className="text  m-0 fw-semibold">{boldDesc}</p>}
    </div>
  );
};

export default DetailBox;
