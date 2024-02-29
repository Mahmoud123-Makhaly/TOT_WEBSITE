import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import close from '@assets/images/contact-us/close.svg';
import check from '@assets/images/contact-us/check.svg';
import { ButtonMaker } from '@/components';

interface IContactModal {
  toggle?: boolean;
  setToggle?: React.Dispatch<React.SetStateAction<boolean>>;
}
const ContactModal = (props: IContactModal) => {
  const { setToggle, toggle } = props;
  const router = useRouter();
  return (
    <div className="contact-modal p-2">
      <div className="d-flex justify-content-start">
        <Image src={close} alt="close" width={0} height={0} className="close" onClick={() => setToggle!(!toggle)} />
      </div>
      <Image src={check} alt="check" width={0} height={0} className="my-3" />
      <p className="font-24 fw-bold ">Thank you for contacting us!</p>
      <p className="pt-3 mb-1">We appreciate you contacting us.</p>
      <p className="mb-4">Representatives will respond to you shortly.</p>
      <ButtonMaker btnText="Go to home page" className="btn btn-primary text-white " onClick={() => router.push('/')} />
    </div>
  );
};

export default ContactModal;
