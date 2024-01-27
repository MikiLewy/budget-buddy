import { ReactNode } from 'react';

import DashboardTemplate from '@/components/templates/dashboard';

interface Props {
  children: ReactNode;
}

const DashboardLayout = ({ children }: Props) => {
  return (
    <div className="h-screen w-screen">
      <DashboardTemplate>{children}</DashboardTemplate>
    </div>
  );
};

export default DashboardLayout;
