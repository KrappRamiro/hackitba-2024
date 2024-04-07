import { useEffect, useState } from "react";
import TrackerModule from "../components/TrackerModule";


export default function TrackersHome() {
	const [sleepTime, setSleepTime] = useState({ dailySleepHours: 0, interruptionLevel: "" });
	const [exerciseTime, setExerciseTime] = useState({exercises:{running:"",yoga:"",weightlifting:""}});
	const userId = "609d91d9e2d6d41768a092d8";
	useEffect(() => {
		fetch(`http://localhost:3000/workouts/${userId}`)
			.then((response) => response.json())
			.then((data) => {
				setExerciseTime(data[0]);
			})
			.catch((error) => console.error("Error:", error));
	}, []);

	useEffect(() => {
		fetch(`http://localhost:3000/sleeps/${userId}`)
			.then((response) => response.json())
			.then((data) => {
				setSleepTime(data[0]);
			})
			.catch((error) => console.error("Error:", error));
	}, []);
	const titlesSleep = {
		Frecuencia: "Sueño de hoy",
		Objectivo: "Objetivo",
		Promedio: "Promedio",
	};
	const titlesEnergia = {
		Frecuencia: "Semanal",
		Objectivo: "Mision",
		Promedio: "Promedio",
	};

	return (
		<div className="flex flex-col justify-end">
			<TrackerModule
				title="Control del sueño"
				value={sleepTime}
				titleValues={titlesSleep}
			/>
			<TrackerModule
				title="Energia y vitalidad"
				value={sleepTime}
				titleValues={titlesEnergia}
			/>


		</div>
	);
}
