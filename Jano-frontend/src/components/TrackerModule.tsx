import AddCircleIcon from "@mui/icons-material/AddCircle";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface TrackerModuleProps {
	title: string;
	value: any;
	titleValues: any;
}

const dictionary = {
	"a few times": 1,
	"several times": 2,
	"many times": 3,
  };

export default function TrackerModule({ title, value,titleValues }: TrackerModuleProps) {
	const circleStyle = {
		width: "50px",
		height: "50px",
		borderRadius: "50%",
		display: "flex",
		border: "2px solid #4B5563",
		justifyContent: "center",
		alignItems: "center",
		margin: "0 5px",
	};
	var interruptionLevel;
	if (title === "Control del sueño") interruptionLevel = dictionary[value?.interruptionLevel as keyof typeof dictionary];
	return (
		<div className="w-full px-5">
			<div className="flex flex-col rounded-xl">
				<div className="px-3 py-3 rounded-2xl bg-gray-800 mb-4">
					<div className="flex justify-between ">
						<div className="flex flex-col">
							<div className="text-white font-bold mb-2">
								<h2>{title}</h2>
							</div>
							<div className="flex">
								<div className="font-semibold text-gray flex flex-col mr-5">
									<div style={circleStyle}>
										<CircularProgressbar
											value={(parseInt(value?.dailySleepHours) * 100) / 8}
											text={`${value?.dailySleepHours}/8 hs`}
											styles={{
												text: {
													fill: "white",
													fontSize: "1.5rem",
												},
												path: {
													stroke: "#3b82f6",
												},
												trail: {
													stroke: "#4B5563",
												},
											}}
										/>
									</div>
									<span className="text-gray-300 font-light text-sm text-center">{titleValues.Frecuencia}</span>
								</div>
								{title === "Control del sueño" ? (
								<div className="flex">
									<div className="font-semibold text-gray flex flex-col mr-5">
										<div style={circleStyle}>
											<CircularProgressbar
												value={(interruptionLevel ?? 0) * 33}
												text={`${value?.interruptionLevel}`}
												styles={{
													text: {
														fill: "white",
														fontSize: "1.5rem",
													},
													path: {
														stroke: "#3b82f6",
													},
													trail: {
														stroke: "#4B5563",
													},
												}}
											/>
										</div>
										<span className="text-gray-300 font-light text-sm text-center">{titleValues.Objectivo}</span>
									</div>
									</div>
									):
										(

								<div className="flex">
									<div className="font-semibold text-gray flex flex-col mr-5">
										<div style={circleStyle}>
											<CircularProgressbar
												value={50}
												text={`${4}/8 hs`}
												styles={{
													text: {
														fill: "white",
														fontSize: "1.5rem",
													},
													path: {
														stroke: "#3b82f6",
													},
													trail: {
														stroke: "#4B5563",
													},
												}}
											/>
										</div>
										<span className="text-gray-300 font-light text-sm text-center">{titleValues.Objectivo}</span>
									</div>
									</div>
										)}
									
									<div className="flex">
										<div className="font-semibold text-gray flex flex-col mr-5">
											<div style={circleStyle}>
												<CircularProgressbar
													value={(5 * 100) / 8}
													text={`${5}/8 hs`}
													styles={{
														text: {
															fill: "white",
															fontSize: "1.5rem",
														},
														path: {
															stroke: "#3b82f6",
														},
														trail: {
															stroke: "#4B5563",
														},
													}}
												/>
											</div>
											<span className="text-gray-300 font-light text-sm text-center">{titleValues.Promedio}</span>
										</div>
										<div className="font-semibold text-gray flex flex-col mr-5">
											<div style={circleStyle}>
												{/* Aquí puedes mantener el icono de agregar */}
												<a href="/form">
													<AddCircleIcon style={{ color: "#3b82f6" }} />
												</a>
											</div>
											<span className="text-gray-300 font-light text-sm text-center">Agregar</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

	);
}
