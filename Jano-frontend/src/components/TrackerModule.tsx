//create a template to build any tracker, that consists on 2 default fields and a add button to add any new field

import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import axios from "axios";

interface TrackerModuleProps {
  tracker: Tracker;
}

interface Tracker {
  userId: string;
  date: string;
  title: string;
  fields: [];
}

export default function TrackerModule({ tracker }: TrackerModuleProps) {
  const [fields, setFields] = useState(tracker.fields);

  return (
    <>
    <div className="w-full">
			<div className="flex flex-col rounded-xl">
                <h2>
                    {tracker.title}
                </h2>
				<div className="border-2 border-black px-5 py-4 rounded-2xl bg-green-100 mb-8">
					<div className="flex justify-between mb-3">
						<div className="font-semibold text-gray-600 rounded-full bg-lime-500 p-2">
							{tracker?.fields[0]}
						</div>
						<p className="text-black">{tracker?.fields[1]}</p>
					<AddCircleOutlineIcon className="text-lime-500 "/>
					</div>
				</div>
			</div>
		</div>
    </>
  );
}

