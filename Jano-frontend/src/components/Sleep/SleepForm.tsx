// create a form that captures the sleep time of the user and the interruption level and post it on the backend
//

import { useState } from "react";
import { JSX } from "react/jsx-runtime";

export default function SleepForm() {
  const [sleepTime, setSleepTime] = useState("");
  const [interruptionLevel, setInterruptionLevel] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //const response = await axios.post("/api/sleep", { sleepTime, interruptionLevel });
    console.log(sleepTime, interruptionLevel);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <label className="mb-2" htmlFor="sleepTime">
        Sleep time
      </label>
      <input
        id="sleepTime"
        type="time"
        value={sleepTime}
        onChange={(e) => setSleepTime(e.target.value)}
        className="mb-4"
      />
      <label className="mb-2" htmlFor="interruptionLevel">
        Interruption level
      </label>
      <input
        id="interruptionLevel"
        type="number"
        value={interruptionLevel}
        onChange={(e) => setInterruptionLevel(e.target.value)}
        className="mb-4"
      />
      <button className="bg-green-500 text-white rounded-lg py-2" type="submit">
        Submit
      </button>
    </form>
  );
}