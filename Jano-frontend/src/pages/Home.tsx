import { SVGProps, useState } from "react";
import { JSX } from "react/jsx-runtime";

export default function Home() {
  const [message, setMessage] = useState("");
  const [conversation, setConversation] = useState<
    { user: string; text: string }[]
  >([
    {
      user: "AI",
      text: "I'm an AI, I don't have feelings, but I'm functioning as expected. How can I assist you today?",
    },
  ]);

  const sendMessage = async () => {
    //const response = await axios.post("/api/chat", { prompt: message });

    setConversation([
      ...conversation,
      { user: "You", text: message },
      { user: "AI", text: "response.data" },
    ]);
    setMessage("");
  };

  return (
    <div className="flex flex-col justify-end">
      <div className="flex p-4 overflow-auto">
        {conversation.map((message, index) => (
          <p key={index}>
            <strong>{message.user}:</strong> {message.text}
          </p>
        ))}
      </div>

      <div className="flex flex-col justify-end p-4 ">
        <div className="flex ">
          <input
            className="rounded-full pl-3 border-gray-200 dark:border-gray-800 flex-1 mr-2"
            placeholder="Que tienes en mente?"
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            className="h-[3rem] w-[3rem] rounded-full ml-auto"
            onClick={sendMessage}
          >
            <SendIcon className="h-6 w-6" />
            <span className="sr-only">Send</span>
          </button>
        </div>
      </div>
    </div>
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
