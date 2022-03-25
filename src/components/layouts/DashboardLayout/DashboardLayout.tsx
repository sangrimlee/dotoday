import React from 'react';
import { Outlet } from 'react-router-dom';
import { DashboardHeader } from './DashboardHeader';
import { DashboardBottomNavigation } from './DashboardBottomNavigation';
import { DashboardSidebar } from './DashboardSidebar';

export default function DashboardLayout() {
  return (
    <div className="dashboard-wrap">
      <DashboardSidebar />
      <DashboardHeader />
      <DashboardBottomNavigation />
      <main className="dashboard-main">
        <Outlet />
      </main>
    </div>
  );
}
