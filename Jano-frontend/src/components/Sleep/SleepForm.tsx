// create a form that captures the sleep time of the user and the interruption level and post it on the backend
//

import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from "@mui/material";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { JSX } from "react/jsx-runtime";

export default function SleepForm() {
	const [sleepTime, setSleepTime] = useState(0);
	const [interruptionLevel, setInterruptionLevel] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInterruptionLevel((event.target as HTMLInputElement).value);
  };
  const handleChangeSleep = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSleepTime(Number((event.target as HTMLInputElement).value));
  };
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log( sleepTime)
    const req = {
      "userId": "609d91d9e2d6d41768a092d8",
      "date": "2024-04-06",
      "dailySleepHours": sleepTime,
      "interruptionLevel": interruptionLevel,
      "userFeelsDisorder": false
  }
		//const response = await axios.post("/api/sleep", { sleepTime, interruptionLevel });
		axios.post("http://localhost:3000/sleeps", 
    req
    ).then((response) => {
      console.log(response);
    }).catch((error) => {
      console.error("Error:", error);
    }
    );
	};

	return (
		<form onSubmit={handleSubmit} className="flex flex-col">
			<TextField id="standard-basic" label="Horas de sueño" variant="standard" onChange={handleChangeSleep}/>
			<FormLabel id="demo-radio-buttons-group-label">Cuantas veces te despertaste?</FormLabel>
			<RadioGroup onChange={handleChange} aria-labelledby="demo-radio-buttons-group-label" defaultValue="Never" name="radio-buttons-group">
				<FormControlLabel value="no interruptions" control={<Radio />} label="no interruptions" />
				<FormControlLabel value="a few times" control={<Radio />} label="a few times" />
				<FormControlLabel value="too much interruptions" control={<Radio />} label="too much interruptions" />
			</RadioGroup>
			<button className="bg-green-500 text-white rounded-lg py-2" type="submit">
				Enviar
			</button>
		</form>
	);
}
