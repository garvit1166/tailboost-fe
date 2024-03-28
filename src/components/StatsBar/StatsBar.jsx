import "./StatsBar.css";
import React, { useState } from "react";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { GiReceiveMoney } from "react-icons/gi";
import { TbSitemap } from "react-icons/tb";
import { CiDeliveryTruck } from "react-icons/ci";
import StatsTile from "../StatsTile/StatsTile";

function StatsBar({ stats }) {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);
  const icons = [
    RiMoneyDollarCircleLine,
    GiReceiveMoney,
    TbSitemap,
    CiDeliveryTruck,
  ];

  window.onresize = () => {
    setIsSmallScreen(window.innerWidth < 768);
  };

  return (
    <div className="text-center statsBar">
      {stats ? (
        <div className="row">
          {stats &&
            stats.map((stat, index) => (
              <div className="col-sm-6 col-md-4 col-lg-3" key={index}>
                <StatsTile stat={stat} icon={icons[index]} />
              </div>
            ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default StatsBar;
