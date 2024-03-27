import React, { useState } from 'react';
import './SideNav.css';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import { navItems } from './config';

function SideNav({ showSideNav, setShowSideNav, showTopNav }) {
  const toggleSideNav = () => {
    setShowSideNav(!showSideNav);
  };
  console.log(navItems);
  return (
    <>
      {showTopNav ? (
        <div>HI</div>
      ) : (
        <div className="sidenavPanel d-flex h-100 text-white flex-column p-3 position-relative">
          <div className=" sidenavHeading mx-auto mt-4 h3">TailBoost</div>
          <hr />
          <div className="position-relative text-end">
            <button
              className="closeButton"
              onClick={() => setShowSideNav(!showSideNav)}
            >
              {showSideNav ? <IoIosArrowBack /> : <IoIosArrowForward />}
            </button>
          </div>
          <div className="d-flex flex-column justify-content-start align-items-start mx-auto w-80">
            {navItems.map((nav, index) => (
              <div className="">
                <button
                  key={index}
                  className="bg-transparent w-100 border-0 my-2 text-white fs-5 text-start"
                >
                  <a href={nav.link} className="nav-link">
                    <nav.icon
                      className={`mx-2 ${showSideNav ? 'fs-5' : 'fs-3'}`}
                    />
                    <p
                      className={`d-inline ms-2 ${showSideNav ? '' : 'd-none'}`}
                    >
                      {nav.name}
                    </p>
                  </a>
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default SideNav;
