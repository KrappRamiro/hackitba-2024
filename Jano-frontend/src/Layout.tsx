// create a layout 

import  { SVGProps } from 'react';
import Header from './components/Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-screen w-full max-w-sm mx-auto rounded-t-xl border-t-2 border-gray-100/40 bg-white shadow-2xl overflow-auto dark:border-gray-950 dark:bg-gray-950/60">
      
      <div className="flex-1 grid gap-4 p-4 overflow-auto">
        {children}
      </div>
      <Header />
    </div>
  );
}
