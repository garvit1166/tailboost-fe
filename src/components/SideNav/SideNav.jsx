import React, { useEffect } from 'react';
import './SideNav.css';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import { LiaUserCircle } from 'react-icons/lia';
import { MdLogout } from 'react-icons/md';
import { navItems } from './config';
import NavItem from './NavItem';
import logo from '../../assets/logo.png';
import TopNavbar from '../TopNavbar/TopNavbar';
//import useValue from '../../context/userContext';
import useUser from '../../context/userContext';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

function SideNav({ showSideNav, setShowSideNav, isSmallScreen }) {
  //const { setUserLoggedIn } = useValue();
  const { userName } = useUser();
  let navigate = useNavigate();
  const handleLogout = () => {
    
      Cookies.remove('auth');
    //setUserLoggedIn(false);
     navigate('/'); 
    
    
  };

  return (
    <>
      {isSmallScreen ? (
        <>
          <TopNavbar />
        </>
      ) : (
        <div className="sidenavPanel d-flex h-100 text-white flex-column p-3 position-relative">
          <div className=" sidenavHeading mx-auto mt-4 h3 text-center">
            <img
              className="w-10"
              src={logo}
              style={{ width: ` ${showSideNav ? '20%' : '50%'} ` }}
            ></img>
            <p className={`fs-5 ms-2 ${showSideNav ? 'd-inline' : 'd-none'}`}>
              TailBoost
            </p>
          </div>
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
            {navItems.map((nav) => (
              <NavItem nav={nav} showSideNav={showSideNav} />
            ))}
          </div>
          <div className="mt-auto mx-auto">
            <NavItem
              showSideNav={showSideNav}
              handleLogout={handleLogout}
              nav={{
                id: 4,
                name: 'Logout',
                icon: MdLogout,
                link: '/',
              }}
            />
          </div>
          <hr />
          <div className="d-flex fs-5 mx-auto">
            <LiaUserCircle className="fs-2" />
            <p className={`ms-4 ${showSideNav ? '' : 'd-none'}`}> {userName}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default SideNav;
