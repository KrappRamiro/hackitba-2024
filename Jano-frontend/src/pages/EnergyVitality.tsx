import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import AirIcon from "@mui/icons-material/Air";
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";
import EstiramientoBrazo from "../assets/img/fitness-cards/estiramiento-brazos.jpg";
import EstiramientoCuello from "../assets/img/fitness-cards/estiramiento-cuello.jpg";
import EstiramientoEspalda from "../assets/img/fitness-cards/estiramiento-espalda.jpg";
import EstiramientoHombro from "../assets/img/fitness-cards/estiramiento-hombro.jpg";
import EstiramientoPierna from "../assets/img/fitness-cards/estiramiento-pierna.jpg";

function EnergiaVitalidad() {
	return (
		<div className="p-4">
			<h1 className="text-2xl font-bold mb-4">Energía y Vitalidad</h1>
			<div className="space-y-4">
				<div className="bg-gray-800 p-4 rounded-lg flex items-center justify-between">
					<div className="flex items-center">
						<SelfImprovementIcon style={{ fontSize: 68, color: "#fff" }} />
						<div className="ml-2">
							<h2 className="text-xl font-bold mb-2">Meditación</h2>
							<p className="text-sm font-semibold text-gray-300 mb-4">
								Descubre la práctica de la meditación para calmar la mente y reducir el estrés. <br></br>
							</p>
							<p className="text-sm text-gray-500">
								{" "}
								Canal Recomendado:{" "}
								<a href="https://www.youtube.com/@GabrielaLitschi/videos" className="text-blue-500">
									Gabriela Litschi{" "}
								</a>
							</p>
						</div>
					</div>
				</div>

				<div>
					<h2 className="text-xl font-bold mb-2">Estiramientos y Elongaciones</h2>
					<p className="text-sm font-semibold text-gray-300 mb-4">
						Aprende ejercicios de estiramientos para mejorar la flexibilidad y aliviar la tensión muscular.
					</p>
				</div>
				<div className="overflow-x-auto flex flex-nowrap">
					<div className="w-40 mr-4">
						<div className="max-w-xs rounded-lg overflow-hidden shadow-lg bg-gray-800 mb-4">
							<img className="w-full" src={EstiramientoPierna} />
							<div className="px-4 py-2">
								<div className="font-bold text-sm mb-1">Estiramiento de Piernas</div>
								<p className="text-gray-300 text-xs">Duración: 2 minutos</p>
							</div>
						</div>
					</div>

					<div className="w-40 mr-4">
						<div className="max-w-xs rounded-lg overflow-hidden shadow-lg bg-gray-800 mb-4">
							<img className="w-full" src={EstiramientoEspalda} />
							<div className="px-4 py-2">
								<div className="font-bold text-sm mb-1">Estiramiento de Espalda</div>
								<p className="text-gray-300 text-xs">Duración: 3 minutos</p>
							</div>
						</div>
					</div>

					<div className="w-40 mr-4">
						<div className="max-w-xs rounded-lg overflow-hidden shadow-lg bg-gray-800 mb-4">
							<img className="w-full" src={EstiramientoHombro} />
							<div className="px-4 py-2">
								<div className="font-bold text-sm mb-1">Estiramiento de Hombros</div>
								<p className="text-gray-300 text-xs">Duración: 1 minuto</p>
							</div>
						</div>
					</div>

					<div className="w-40 mr-4">
						<div className="max-w-xs rounded-lg overflow-hidden shadow-lg bg-gray-800 mb-4">
							<img className="w-full" src={EstiramientoBrazo} />
							<div className="px-4 py-2">
								<div className="font-bold text-sm mb-1">Estiramiento de Brazos</div>
								<p className="text-gray-300 text-xs">Duración: 1 minuto</p>
							</div>
						</div>
					</div>

					<div className="w-40">
						<div className="max-w-xs rounded-lg overflow-hidden shadow-lg bg-gray-800 mb-4">
							<img className="w-full" src={EstiramientoCuello} />
							<div className="px-4 py-2">
								<div className="font-bold text-sm mb-1">Estiramiento de Cuello</div>
								<p className="text-gray-300 text-xs">Duración: 1 minuto</p>
							</div>
						</div>
					</div>
				</div>

				<div className="bg-gray-800 p-4 rounded-lg flex items-center justify-between">
					<div className="flex items-center">
						<div className="mr-2">
							<h2 className="text-xl font-bold mb-2 text-right">Respiración a consciencia</h2>
							<p className="text-sm font-semibold text-gray-300 mb-4 text-right">
								Descubre la práctica de la respiración consciente para mejorar tu bienestar y reducir la ansiedad.
							</p>
							<p className="text-sm text-gray-500 text-right">
								Artículo Recomendado:
								<a href="https://www.ejemplo.com/articulo-respiracion-consciente" className="text-blue-500">
									"Cómo Practicar la Respiración Consciente"
								</a>
							</p>
						</div>
						<AirIcon style={{ fontSize: 68, color: "#fff" }} />
					</div>
				</div>

				<div className="bg-gray-800 p-4 rounded-lg flex items-center justify-between">
					<DirectionsWalkIcon style={{ fontSize: 68, color: "#fff" }} />
					<div className="ml-2">
						<h2 className="text-xl font-bold mb-2">Salir a Caminar</h2>
						<p className="text-sm font-semibold text-gray-300 mb-4">
							Descubre los innumerables beneficios de caminar al aire libre, una actividad que no solo te permite
							recargar energías, sino que también transforma el estado de ánimo. Explora lugares de interés en tu ciudad
							para planificar un paseo placentero que despierte tus sentidos y estimule tu creatividad. ¿Qué tal probar
							el{" "}
							<a href="https://www.youtube.com/watch?v=aCwEwz1xU2M" className="text-blue-500">
								Mindful Walking
							</a>
							? Esta práctica te invita a estar presente en cada paso, conectando profundamente con tu entorno y
							encontrando paz en el movimiento.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default EnergiaVitalidad;
