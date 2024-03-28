import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import SideNav from '../../components/SideNav/SideNav';

import './Main.css';

const Main = () => {
  const [showSideNav, setShowSideNav] = useState(true);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  window.onresize = () => {
    setIsSmallScreen(window.innerWidth < 768);
  };

  return (
    <div
      className={`d-flex w-100 h-100 ${
        isSmallScreen ? 'flex-column' : 'flex-row'
      } `}
    >
      <div className={`${showSideNav ? 'sideNav' : 'slimSideNav'} `}>
        <SideNav
          showSideNav={showSideNav}
          setShowSideNav={setShowSideNav}
          isSmallScreen={isSmallScreen}
        />
      </div>
      <div className="outlet w-100 h-100 outlet">
        <Outlet />
      </div>
    </div>
  );
};
export default Main;
