import React from 'react';
import Link from 'next/link';

const InvitationMessage = () => {
  return (
    <div className="invitaion-msg">
      <p className="desc font-20 text-primary line-height-30 mb-4 mb-md-5">
        We invite you to step into the future by immersing your business in the digital revolution, and unlocking
        unparalleled potential with TOTs’ integrated solutions.
      </p>
      <h6 className="join mb-0 font-24   line-height-36 text-primary">
        <Link href="/contact-us" className="fw-bold">
          Join us
        </Link>
        in redefining your business for the digital age.
      </h6>
    </div>
  );
};

export default InvitationMessage;
