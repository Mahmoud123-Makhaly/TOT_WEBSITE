'use client';

import React, { useState } from 'react';
import { Container, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Input, Nav, NavItem } from 'reactstrap';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import logo from '@assets/images/navbar/logo.svg';
import cheveron from '@assets/images/navbar/cheveron.svg';
import search from '@assets/images/navbar/search.svg';
import menu from '@assets/images/navbar/menu.svg';

import { dropdownItems } from './DropdownItems';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const pathname = usePathname();
  const isActive = (path: any) => path === pathname;

  return (
    <nav className="navbar navbar-expand-lg  bg-white shadow p-0 position-fixed w-100  bg-white">
      <Container>
        <div className="d-flex flex-grow-1 brand-container align-items-center">
          <Link className="navbar-brand py-0 pe-4 me-4 border-2" href={'/'}>
            <Image src={logo} alt="logo" width={0} height={0} />
          </Link>
          <div className="brand-input flex-grow-1 position-relative">
            <Input type="text" className="form-control border-1 shadow-none  " placeholder="Search" />
            <Link href="">
              <Image
                src={search}
                alt="search"
                width={0}
                height={0}
                className="search-icon position-absolute top-50 translate-middle-y ms-2"
              />
            </Link>
          </div>
          <Image
            src={menu}
            alt="bars"
            width={0}
            height={0}
            className="d-lg-none bars"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvas"
          />
        </div>

        <div className="offcanvas  offcanvas-end" id="offcanvas">
          <div className="offcanvas-header flex-row-reverse">
            <Link href="/">
              <Image src={logo} alt="logo" width={0} height={0} />
            </Link>
            <i className="fa-regular fa-circle-xmark text-reset text-info fa-lg" data-bs-dismiss="offcanvas"></i>
          </div>
          <Nav className="navbar-nav   mb-2 mb-lg-0">
            <NavItem data-bs-dismiss="offcanvas">
              <Link href="/about-tot" className={`nav-link ${isActive('/about-tot') ? 'active' : ''}`}>
                About Us
              </Link>
            </NavItem>

            <NavItem data-bs-dismiss="offcanvas">
              <Link href="/solutions" className={`nav-link ${isActive('/solutions') ? 'active' : ''}`}>
                Solutions
              </Link>
            </NavItem>
            <NavItem>
              <Dropdown isOpen={isOpen} toggle={toggleMenu}>
                <DropdownToggle className="nav-link rounded-0">
                  Industries
                  <Image src={cheveron} alt="cheveron" width={0} height={0} className="ms-2 chevron" />
                </DropdownToggle>
                <DropdownMenu className="border-0 rounded-top-0 m-0 p-0 text-center w-100">
                  {dropdownItems.map((item, index) => {
                    return (
                      <DropdownItem key={index} data-bs-dismiss="offcanvas">
                        <Link href={item.href} className={`text-decoration-none`}>
                          {item.text}
                        </Link>
                      </DropdownItem>
                    );
                  })}
                </DropdownMenu>
              </Dropdown>
            </NavItem>
            <NavItem data-bs-dismiss="offcanvas">
              <Link href="/contact-us" className={`nav-link  ${isActive('/contact-us') ? 'active' : ''}`}>
                Contact us
              </Link>
            </NavItem>
          </Nav>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
