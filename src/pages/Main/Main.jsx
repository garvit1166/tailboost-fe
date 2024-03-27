import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import SideNav from '../../components/SideNav/SideNav';

import './Main.css';

const Main = () => {
  const [showSideNav, setShowSideNav] = useState(true);
  const [showTopNav, setShowTopNav] = useState(window.innerWidth < 768);

  window.onresize = () => {
    setShowTopNav(window.innerWidth < 768);
  };

  return (
    <div
      className={`d-flex w-100 h-100 ${
        showTopNav ? 'flex-column' : 'flex-row'
      } `}
    >
      <div className={`${showSideNav ? 'sideNav' : 'slimSideNav'} `}>
        <SideNav
          showSideNav={showSideNav}
          setShowSideNav={setShowSideNav}
          showTopNav={showTopNav}
        />
      </div>
      <div className="outlet">
        <Outlet />
      </div>
    </div>
  );
};
export default Main;
