import React, { useState } from 'react';
import DashboardDataSection from '../../components/DashboardDataSection/DashboardDataSection';
import InfoBar from '../../components/InfoBar/InfoBar';

function Dashboard() {
  return (
    <div className={`d-flex flex-column bg-dark w-100 h-100`}>
      <div>
        <InfoBar heading={'DASHBOARD'} />
      </div>
      <div className="text-white p-4 pb-0">
        <DashboardDataSection />
      </div>
    </div>
  );
}

export default Dashboard;
