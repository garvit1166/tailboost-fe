import React, { useState } from 'react';
import './InfoBar.css';
import { MdOutlineNotificationsNone } from 'react-icons/md';

function InfoBar({ heading }) {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  window.onresize = () => {
    setIsSmallScreen(window.innerWidth < 768);
  };

  return (
    <div
      className={`text-white d-flex justify-content-between infoBar ${
        isSmallScreen ? 'p-2' : 'p-4'
      }`}
    >
      <div className="fs-4 text-uppercase fw-bold infoHeading">{heading}</div>
      <div className="d-flex">
        <form
          className={`${isSmallScreen ? 'd-none' : 'd-flex'}`}
          role="search"
        >
          <input
            class=" bg-transparent text-white form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-light text-white" type="submit">
            Search
          </button>
        </form>
        <MdOutlineNotificationsNone className="ms-3 fs-2" />
      </div>
    </div>
  );
}

export default InfoBar;
