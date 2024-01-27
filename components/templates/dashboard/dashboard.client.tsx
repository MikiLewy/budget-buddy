'use client';

import { ReactNode, useState } from 'react';

import Sidebar from '@/components/organisms/sidebar';
import { ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
import { routes } from '@/constants/routes';
import { cn } from '@/lib/utils';

interface Props {
  children: ReactNode;
}

const ClientDashboard = ({ children }: Props) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="h-screen w-screen items-stretch"
      onLayout={(sizes: number[]) => {
        document.cookie = `react-resizable-panels:layout=${JSON.stringify(sizes)}`;
      }}>
      <ResizablePanel
        defaultSize={180}
        collapsible={true}
        collapsedSize={3}
        minSize={15}
        maxSize={20}
        className={cn(isCollapsed && 'min-w-[50px] transition-all duration-300 ease-in-out')}
        onCollapse={() => {
          setIsCollapsed(true);
          document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(true)}`;
        }}
        onExpand={() => {
          setIsCollapsed(false);
          document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(false)}`;
        }}>
        <Sidebar isCollapsed={isCollapsed} routes={routes} />
      </ResizablePanel>
      {children}
    </ResizablePanelGroup>
  );
};

export default ClientDashboard;
