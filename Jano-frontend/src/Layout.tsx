// create a layout 

import  { SVGProps } from 'react';
import Header from './components/Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-screen w-full max-w-sm mx-auto rounded-t-xl border-t-2 border-gray-100/40 bg-white shadow-2xl overflow-auto dark:border-gray-950 dark:bg-gray-950/60">
      <div className="flex h-14 items-center px-4 border-b dark:border-gray-800">
        <div className="font-bold text-lg">Ali</div>
        <button className="ml-auto w-8 h-8 rounded-full">
          <XIcon className="w-4 h-4" />
          <span className="sr-only">Toggle menu</span>
        </button>
      </div>
      <div className="flex-1 grid gap-4 p-4 overflow-auto">
        {children}
      </div>
      <Header />
    </div>
  );
}
function XIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
      </svg>
    );
  }