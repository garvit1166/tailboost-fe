import './StatsTile.css';
import React, { useState } from 'react';

function StatsTile({ stat, icon: Icon }) {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  window.onresize = () => {
    setIsSmallScreen(window.innerWidth < 768);
  };

  return (
    <div className="statsTile">
      <p className="statsTile-label">{stat.label}</p>
      <div className="d-flex justify-content-between">
        <p className="m-0">
          {(stat.label === 'Total Revenue') | (stat.label === 'Total Profit')
            ? `₹ `
            : ' '}
          {stat.value}
        </p>
        <Icon className="icon fs-3" />
      </div>
    </div>
  );
}

export default StatsTile;
