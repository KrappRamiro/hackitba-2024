import AddCircleIcon from "@mui/icons-material/AddCircle";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

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

	return (
		<div className="w-full px-5">
			<div className="flex flex-col rounded-xl">
				<div className="px-3 py-3 rounded-2xl bg-gray-800 mb-4">
					<div className="flex justify-between ">
						<div className="flex flex-col">
							<div className="text-white font-bold mb-2">
								<h2>{tracker.title}</h2>
							</div>
							<div className="flex">
								{tracker.fields.map((field, index) => (
									<div key={index} className="font-semibold text-gray flex flex-col mr-5">
										<div style={circleStyle}>
											<CircularProgressbar
												value={parseInt(field[1]) * 100 / 8}
												text={`${field[1]}/8 hs`}
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
										<span className="text-gray-300 font-light text-sm text-center">{field[0]}</span>
									</div>
								))}
								<div className="font-semibold text-gray flex flex-col mr-5">
									<div style={circleStyle}>
										{/* Aquí puedes mantener el icono de agregar */}
										<AddCircleIcon style={{ color: "#3b82f6" }} />
									</div>
									<span className="text-gray-300 font-light text-sm text-center">Agregar</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
