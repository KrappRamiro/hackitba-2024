
import { SVGProps } from 'react';
import { JSX } from 'react/jsx-runtime';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
export default function Header() {
  return (
    <div className="">
        <div className="grid grid-cols-3 h-12">
          <a
            className="flex flex-col items-center justify-center text-xs transition-colors duration-150  "
            href="/home"
          >
            <HomeOutlinedIcon className="w-6 h-6" />
            
          </a>
          <a
            className="flex flex-col items-center justify-center text-2xl font-light transition-colors duration-150 rounded-full bg-gray-100 dark:bg-gray-800 dark:text-gray-100 overflow-visible"
            href="/"
          >
            
            <MessagesSquareIcon className="w-6 h-6 " />
          </a>
          <a
            className="flex flex-col items-center justify-center text-xs transition-colors duration-150"
            href="/social"
          >
            <UsersIcon className="w-6 h-6" />
            
          </a>
        </div>
      </div>
  );
}

  
  function DumbbellIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
        <path d="m6.5 6.5 11 11" />
        <path d="m21 21-1-1" />
        <path d="m3 3 1 1" />
        <path d="m18 22 4-4" />
        <path d="m2 6 4-4" />
        <path d="m3 10 7-7" />
        <path d="m14 21 7-7" />
      </svg>
    )
  }
  
  
  function MessagesSquareIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
        <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
        <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
      </svg>
    )
  }
  
  
  function UsersIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    )
  }
  
  
  
  