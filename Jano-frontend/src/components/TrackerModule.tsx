import React, { useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";

interface TrackerModuleProps {
	tracker: Tracker;
}

interface Tracker {
	userId: string;
	date: string;
	title: string;
	fields: string[][];
}

export default function TrackerModule({ tracker }: TrackerModuleProps) {
	return (
		<>
			<div className="w-full p-5">
				<div className="flex flex-col rounded-xl">
					<h2>{tracker.title}</h2>
					<div className="border-2 border-black px-3 py-3 rounded-2xl bg-green-100 mb-8">
						<div className="flex justify-between ">
							<div className="flex flex-col">
								<div className="text-black font-bold">{tracker?.fields[0][0]}</div>
                <div className="flex">
                  <div className="font-semibold text-gray flex flex-col mr-5">
                    <span className="text-yellow-500 text-3xl">{tracker?.fields[0][1]}</span>
                    <span className="text-gray-700 font-light text-sm">{tracker?.fields[0][0]}</span>
                  </div>
                  <div className="font-semibold text-gray flex flex-col mr-5">
                    <span className="text-yellow-500 text-3xl">{tracker?.fields[1][1]}</span>
                    <span className="text-gray-700 font-light text-sm">{tracker?.fields[1][0]}</span>
                  </div>
                  <div className="font-semibold text-gray flex flex-col">
                    <span className="text-yellow-500 text-3xl">{tracker?.fields[2][1]}</span>
                    <span className="text-gray-700 font-light text-sm">{tracker?.fields[2][0]}</span>
                  </div>
                </div>
							</div>
							<AddCircleIcon className="text-lime-500 addIcon" />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
