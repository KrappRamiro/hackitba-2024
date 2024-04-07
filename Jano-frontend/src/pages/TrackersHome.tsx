import { useEffect, useState } from "react";
import TrackerModule from "../components/TrackerModule";
import Forum from "../assets/img/cards/friends.jpg";
import Sleep from "../assets/img/cards/my-bed-is-my-best-friend.jpg";
import Energy from "../assets/img/cards/healthy-female-is-doing-exercise-outdoor.jpg";
import Food from "../assets/img/cards/tasty-fresh-appetizing-italian-food-ingredients-dark-background-ready-cook-home-italian-healthy-food-cooking-concept-toning.jpg";
import { Link } from "react-router-dom";

export default function TrackersHome() {
	const [sleepTime, setSleepTime] = useState({ dailySleepHours: 0, interruptionLevel: "" });
	const [exerciseTime, setExerciseTime] = useState({ exercises: { running: "", yoga: "", weightlifting: "" } });
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
		<>
			<div className="flex flex-col justify-end">
				<h1 className="text-2xl font-bold mb-4 flex justify-between items-center px-5 mt-5">
					<span>Hola Ari!</span>
					<box-icon name="user-circle" size="lg" color="white"></box-icon>
				</h1>
				<TrackerModule title="Control del sueño" value={sleepTime} titleValues={titlesSleep} />
				<TrackerModule title="Energia y vitalidad" value={sleepTime} titleValues={titlesEnergia} />
			</div>
			<div className="p-4">
				<h1 className="text-xl font-bold mb-4">Mi espacio seguro</h1>
				<div className="flex flex-wrap -mx-4">
					<div className="w-1/2 pl-3 pr-1 mb-4">
						<Link to={`/alimentacion`}>
							<div className="max-w-sm rounded-2xl overflow-hidden shadow-lg  bg-gray-800">
								<img className="w-full" src={Food} />
								<div className="px-6 py-4 min-h-44">
									<div className="font-bold text-xl mb-2">Alimentación</div>
									<p className="text-gray-300 text-base">Descubre cómo nutrir tu cuerpo para potenciar tu bienestar.</p>
								</div>
							</div>
						</Link>
					</div>
					<div className="w-1/2 pr-3 pl-1 mb-4">
						<Link to={`/suenio`}>
							<div className="max-w-sm rounded-2xl overflow-hidden shadow-lg  bg-gray-800">
								<img className="w-full" src={Sleep} />
								<div className="px-6 py-4 min-h-44">
									<div className="font-bold text-xl mb-2">Sueño</div>
									<p className="text-gray-300 text-base">Mejora tu calidad de vida con un descanso reparador.</p>
								</div>
							</div>
						</Link>
					</div>
					<div className="w-1/2 pl-3 pr-1 mb-4">
						<div className="max-w-sm rounded-2xl overflow-hidden shadow-lg  bg-gray-800">
							<img className="w-full" src={Energy} />
							<div className="px-6 py-4 min-h-44">
								<div className="font-bold text-xl mb-2">Energía & Vitalidad</div>
								<p className="text-gray-300 text-base">Potencia tu día con buenos hábitos.</p>
							</div>
						</div>
					</div>
					<div className="w-1/2 pr-3 pl-1 mb-4">
						<div className="max-w-sm rounded-2xl overflow-hidden shadow-lg  bg-gray-800">
							<img className="w-full" src={Forum} />
							<div className="px-6 py-4 min-h-44">
								<div className="font-bold text-xl mb-2">Social</div>
								<p className="text-gray-300 text-base">Únete y comparte con personas afines en nuestra comunidad.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
