'use client';

import React from 'react';
import Sidebar from './Sidebar';
import TopNav from './TopNav';

export const LayoutContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="flex h-screen overflow-hidden">
      <nav className="flexShrink-0 h-screen ">
        <Sidebar />
      </nav>
      <div className="flex flex-col w-full h-screen overflow-hidden flex-1">
        <header className="flexShrink-0  ">
          <TopNav />{' '}
        </header>
        {/* {isMobileMenuOpen && (
          <Box
            position="fixed"
            top={0}
            left={0}
            right={0}
            bottom={0}
            bg="blackAlpha.600"
            display={{ base: 'block', lg: 'none' }}
            onClick={() => setIsMobileMenuOpen(false)}
            zIndex={998}
          />
        )} */}
        <main className="flex-1 overflow-y-auto min-w-0 p-6 bg-custom-gray">
          {children}
        </main>
      </div>
    </div>
  );
};
