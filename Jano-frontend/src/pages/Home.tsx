import { SVGProps, useState } from "react";
import { JSX } from "react/jsx-runtime";
import Header from "../components/Header";
import axios from "axios";

export default function Home() {

  const [message, setMessage] = useState("");
  const [conversation, setConversation] = useState<{ user: string; text: string }[]>([]);

  const sendMessage = async () => {
    const response = await axios.post("/api/chat", { prompt: message });
    
    setConversation([
      ...conversation,
      { user: "You", text: message },
      { user: "AI", text: response.data },
    ]);
    setMessage("");
  };

  return (
    <div className="flex flex-col h-screen w-full max-w-sm mx-auto rounded-t-xl border-t-2 border-gray-100/40 bg-white shadow-2xl overflow-hidden dark:border-gray-950 dark:bg-gray-950/60">
      <div className="flex h-14 items-center px-4 border-b dark:border-gray-800">
        <div className="font-bold text-lg">Ali</div>
        <button className="ml-auto w-8 h-8 rounded-full">
          <XIcon className="w-4 h-4" />
          <span className="sr-only">Toggle menu</span>
        </button>
      </div>
      <div className="flex-1 grid gap-4 p-4">
        {conversation.map((message, index) => (
          <p key={index}>
            <strong>{message.user}:</strong> {message.text}
          </p>
        ))}
        <div className="flex flex-col justify-end p-4 ">
          <div className="flex ">
            <input
              className="rounded-full pl-3 border-gray-200 dark:border-gray-800 flex-1 mr-2"
              placeholder="Que tienes en mente?"
              type="text"
              onChange={e => setMessage(e.target.value)}
            />
            <button className="h-[3rem] w-[3rem] rounded-full ml-auto" onClick={sendMessage}>
              <SendIcon className="h-6 w-6" />
              <span className="sr-only">Send</span>
            </button>
          </div>
        </div>
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
function SendIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  );
}
