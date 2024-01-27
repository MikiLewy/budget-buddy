import { ReactNode } from 'react';

import Navbar from '@/components/organisms/navbar';
import { ResizableHandle, ResizablePanel } from '@/components/ui/resizable';

import ClientDashboard from './dashboard.client';

interface Props {
  children: ReactNode;
}

const ServerDashboard = ({ children }: Props) => {
  return (
    <ClientDashboard>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={1150}>
        <Navbar />
        {children}
      </ResizablePanel>
    </ClientDashboard>
  );
};

export default ServerDashboard;
