import { SVGProps } from "react"
import { JSX } from "react/jsx-runtime"

export default function Home() {
    return (
    <div className="grid h-screen w-full max-w-sm mx-auto rounded-t-xl border-t-2 border-gray-100/40 bg-white shadow-2xl overflow-hidden dark:border-gray-950 dark:bg-gray-950/60">
      <div className="flex h-14 items-center px-4 border-b dark:border-gray-800">
        <div className="font-bold text-lg">Chatbot</div>
        <button className="ml-auto w-8 h-8 rounded-full"  >
          <XIcon className="w-4 h-4" />
          <span className="sr-only">Toggle menu</span>
        </button>
      </div>
      <div className="flex-1 grid gap-4 p-4">
        <div className="flex items-start gap-2">
          <img
            alt="User"
            className="rounded-full"
            height="40"
            src="/placeholder.svg"
            style={{
              aspectRatio: "40/40",
              objectFit: "cover",
            }}
            width="40"
          />
          <div className="grid gap-1 p-2 bg-gray-100 rounded-lg text-sm dark:bg-gray-800">
            Hi there! How can I help you today?
          </div>
        </div>
        <div className="flex items-end gap-2 justify-end">
          <div className="grid gap-1 p-2 bg-gray-100 rounded-lg text-sm dark:bg-gray-800">
            You have a great day too!
          </div>
          <img
            alt="User"
            className="rounded-full"
            height="40"
            src="/placeholder.svg"
            style={{
              aspectRatio: "40/40",
              objectFit: "cover",
            }}
            width="40"
          />
        </div>
      </div>
      <div className="border-t-2">
        <div className="grid grid-cols-5 h-12">
          <a
            className="flex flex-col items-center justify-center text-xs transition-colors duration-150 hover:text-gray-900"
            href="#"
          >
            <AppleIcon className="w-6 h-6" />
            Nutrition
          </a>
          <a
            className="flex flex-col items-center justify-center text-xs transition-colors duration-150 hover:text-gray-900"
            href="#"
          >
            <MoonStarIcon className="w-6 h-6" />
            Sleep
          </a>
          <a
            className="flex flex-col items-center justify-center text-2xl font-light transition-colors duration-150 hover:text-gray-900"
            href="#"
          >
            Chat
            <MessagesSquareIcon className="w-6 h-6" />
          </a>
          <a
            className="flex flex-col items-center justify-center text-xs transition-colors duration-150 hover:text-gray-900"
            href="#"
          >
            <DumbbellIcon className="w-6 h-6" />
            Workout
          </a>
          <a
            className="flex flex-col items-center justify-center text-xs transition-colors duration-150 hover:text-gray-900"
            href="#"
          >
            <UsersIcon className="w-6 h-6" />
            Social
          </a>
        </div>
      </div>
    </div>
    )
}

function AppleIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
        <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
        <path d="M10 2c1 .5 2 2 2 5" />
      </svg>
    )
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
  
  
  function MoonStarIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        <path d="M19 3v4" />
        <path d="M21 5h-4" />
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
    )
  }
  