import React from 'react';

import { Col, Container, Row } from 'reactstrap';
import Image from 'next/image';
import Link from 'next/link';

import logo from '@assets/images/footer/logo.png';
import twitter from '@assets/images/footer/twitter.svg';
import instagram from '@assets/images/footer/instagram.svg';
import facebook from '@assets/images/footer/facebook.svg';
import linkedin from '@assets/images/footer/linkedin.svg';
import dribbble from '@assets/images/footer/dribbble.svg';
import phone from '@assets/images/footer/phone.svg';
import whatsap from '@assets/images/footer/whatsap.svg';
import location from '@assets/images/footer/location.svg';
const Footer = () => {
  return (
    <div className="footer bg-dark">
      <Container>
        <div className="footer-content">
          <Row className="align-items-start   pb-3">
            <Col lg={3}>
              <Link href="/" className="text-white text-decoration-none">
                <Image src={logo} width={0} height={0} alt="logo" className="logo" />
              </Link>
            </Col>
            <Col lg={4}>
              <Row>
                <Col className="col-lg-5 col-5 col-sm-6">
                  <p className="text-white fw-semibold mb-0 pb-4">About us</p>
                  <ul className="list-unstyled text-white">
                    <li className="mb-2 font-12">
                      <Link href="/about-tot" className="text-white text-decoration-none">
                        Who we are?
                      </Link>
                    </li>

                    <li className="mb-2 font-12">
                      <Link href="/about-tot#mission" className="text-white text-decoration-none">
                        Mission
                      </Link>
                    </li>
                    <li className="font-12">
                      <Link href="/about-tot#vission" className="text-white text-decoration-none">
                        Vision
                      </Link>
                    </li>
                  </ul>
                </Col>
                <Col className="col-lg-7 col-7 col-sm-6">
                  <p className="text-white fw-semibold mb-0 pb-4">Solutions</p>
                  <ul className="list-unstyled text-white">
                    <li className="mb-2 font-12">
                      <Link href="/solutions#crm" className="text-white text-decoration-none">
                        CRM
                      </Link>
                    </li>
                    <li className="mb-2 font-12">
                      <Link href="/solutions#oms" className="text-white text-decoration-none">
                        OMS
                      </Link>
                    </li>
                    <li className="mb-2 font-12">
                      <Link href="/solutions#pim" className="text-white text-decoration-none">
                        PIM
                      </Link>
                    </li>
                    <li className="mb-2 font-12">
                      <Link href="/solutions#channel-management" className="text-white text-decoration-none">
                        Channel Management
                      </Link>
                    </li>
                    <li className="mb-2 font-12">
                      <Link href="/solutions#pos" className="text-white text-decoration-none">
                        POS
                      </Link>
                    </li>
                    <li className="font-12">
                      <Link href="/solutions#lastMile-solution" className="text-white text-decoration-none">
                        Last Mile Solution
                      </Link>
                    </li>
                  </ul>
                </Col>
              </Row>
            </Col>
            <Col lg={5}>
              <Row className="pt-3 pt-lg-0">
                <Col className="col-lg-4   col-5 col-sm-6">
                  <p className="text-white fw-semibold mb-0 pb-4">Industries</p>
                  <ul className="list-unstyled text-white">
                    <li className="mb-2 font-12">
                      <Link href="/industries/restaurant" className="text-white text-decoration-none">
                        Resturants
                      </Link>
                    </li>
                    <li className="mb-2 font-12">
                      <Link href="/industries/fashion" className="text-white text-decoration-none">
                        Fashion
                      </Link>
                    </li>
                    <li className="mb-2 font-12">
                      <Link href="/industries/pharma" className="text-white text-decoration-none">
                        Pharma
                      </Link>
                    </li>
                    <li className="mb-0 font-12">
                      <Link href="/industries/markets" className="text-white text-decoration-none">
                        Market
                      </Link>
                    </li>
                  </ul>
                </Col>
                <Col className="col-lg-8   col-7 col-sm-6">
                  <p className="text-white fw-semibold mb-0 pb-4">Contact Us</p>
                  <ul className="list-unstyled text-white">
                    <li className="mb-13 font-12 d-flex align-items-center">
                      <Link
                        href="mailto:info@totplatform.com"
                        target="_blank"
                        className="text-white text-decoration-none  d-flex align-items-center"
                      >
                        <Image src={dribbble} className="me-3" width={0} height={0} alt="dribble" />
                        <p className="m-0">info@totplatform.com</p>
                      </Link>
                    </li>
                    <li className="mb-13 font-12 d-flex align-items-center">
                      <Link
                        href="tel:(+02)01000651136"
                        target="_blank"
                        className="text-white text-decoration-none  d-flex align-items-center"
                      >
                        <Image src={phone} className="me-3" width={0} height={0} alt="phone" />
                        <p className="m-0">(+02)01000651136</p>
                      </Link>
                    </li>
                    <li className="mb-13 font-12 d-flex align-items-center">
                      <Link
                        href="https://wa.me/+201000651136"
                        target="_blank"
                        className="text-white text-decoration-none  d-flex align-items-center"
                      >
                        <Image src={whatsap} className="me-3" width={0} height={0} alt="whatsap" />
                        <p className="m-0">(+02)01000651136</p>
                      </Link>
                    </li>
                    <li className="mb-0 font-12 d-flex align-items-center">
                      <Link
                        href="https://www.google.com/maps/place/30%C2%B003'13.7%22N+31%C2%B012'31.4%22E/@30.0538065,31.2061386,17z/data=!3m1!4b1!4m4!3m3!8m2!3d30.0538065!4d31.2087135?hl=en&entry=ttu"
                        target="_blank"
                        className="text-white text-decoration-none d-flex align-items-center"
                      >
                        <Image src={location} className="me-3" width={0} height={0} alt="location" />
                        <p className="m-0">48 El-Farik Abd El-Moneim Riad, Agouza, Giza</p>
                      </Link>
                    </li>
                  </ul>
                </Col>
              </Row>
            </Col>
          </Row>
          <div className="copy-right">
            <h4 className="fw-semibold text-white copyright-title font-16">Follow us</h4>
            <div className="d-lg-flex justify-content-between align-items-center">
              <div className="gallery">
                <Link href="https://twitter.com/totplatform" target="_blank">
                  <Image src={twitter} width={0} height={0} alt="X" className="me-3" />
                </Link>
                <Link href="https://www.instagram.com/totplatformsolution/" target="_blank">
                  <Image src={instagram} width={0} height={0} alt="instagram" className="me-3" />
                </Link>
                <Link
                  href="https://www.facebook.com/profile.php?id=61551924177512&is_tour_dismissed=true"
                  target="_blank"
                >
                  <Image src={facebook} width={0} height={0} alt="facebook" className="me-3" />
                </Link>
                <Link href="https://www.linkedin.com/company/tot-platform/about/?viewAsMember=true" target="_blank">
                  <Image src={linkedin} width={0} height={0} alt="linkedin" className="me-3" />
                </Link>
              </div>
              <p className="font-12 fw-ligt text-white mb-0">
                &copy; {new Date().getFullYear()} Copyright TOT. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
