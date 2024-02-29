import React from 'react';
import { Container } from 'reactstrap';

import { ContactBanner } from './contact-banner';
import { Messages } from './messages';
import { GetInTouch } from './get-in-touch';
import { Faqs } from './faqs';
import { Location } from './location';

const ContactUs = () => {
  return (
    <React.Fragment>
      <ContactBanner />
      <Container>
        <Messages />
        <GetInTouch />
        {/* <Faqs /> */}
        <Location />
      </Container>
    </React.Fragment>
  );
};

export default ContactUs;
