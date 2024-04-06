import { useEffect, useState } from "react";

export default function SleepTracker() {
	const [sleepTime, setSleepTime] = useState(null);

	useEffect(() => {
		fetch("http://localhost:3000/sleeps/609d91d9e2d6d41768a092d8")
			.then((response) => response.json())
			.then((data) => {
				console.log(data)
				setSleepTime(data[0].dailySleepHours)})
			 
			.catch((error) => console.error("Error:", error));
	}, []);
    
	return (
		<div className="w-full">
			<div className=" px-8 py-4 flex flex-col rounded-xl">
				
				<div className="border-2 border-black px-5 py-4 rounded-2xl bg-green-100 mb-8">
					<div className="flex space-x-2 items-center mb-5 text-black">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
							/>
						</svg>
						<div className="font-semibold text-lg text-black">Sleep time</div>
					</div>
					<div className="flex justify-between mb-3">
						<div className="font-semibold text-gray-600">{sleepTime}</div>
						<p className="text-black">interruptionLevel</p>
					</div>
				</div>
			</div>
		</div>
	);
}
