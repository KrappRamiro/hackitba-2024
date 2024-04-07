import TrackerModule from "../components/TrackerModule";

const trackerMock = [
	{
		userId: "609d91d9e2d6d41768a092d8",
		date: "2024-04-06",
		title: "Control del sueño",
		fields: [
			["Sueño de hoy ", 6],
			["Objetivo", 8],
			["Promedio", 5],
		],
	},
	{
		userId: "609d91d9e2d6d41768a092d8",
		date: "2024-04-06",
		title: "Energía y vitalidad",
		fields: [
			["Semanal", 3],
			["Mision", 5],
			["Promedio", 4],
		],
	},
];

export default function TrackersHome() {
	return (
		<div className="flex flex-col justify-end">
			{trackerMock.map((tracker) => (
				<TrackerModule tracker={tracker} />
			))}
		</div>
	);
}
