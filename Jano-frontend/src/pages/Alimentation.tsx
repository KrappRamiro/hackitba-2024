import SwiperComponent from "../components/SwiperComponent";
import MenuBookIcon from "@mui/icons-material/MenuBook";

export default function Alimentation() {
	return (
		<div className="p-4">
			<h1 className="text-2xl font-bold mb-4">Alimentación</h1>
			<div>
				<h2 className="text-sm font-semibold text-gray-300 mb-4">Cambia un poco tu dieta, mejora mucho tu vida. </h2>
				<SwiperComponent slides={slides} />
			</div>
			<div className="bg-gray-800 p-4 rounded-lg flex items-center justify-between">
				<div className="flex items-center">
					<MenuBookIcon style={{ fontSize: 68, color: "#fff" }} />
					<div className="ml-2">
						<h2 className="text-xl font-bold mb-2">Lectura nutritiva</h2>
						<p className="text-sm font-semibold text-gray-300 mb-4">
							Aprende de los mejores como mejorar tu vida comiendo bien y rico <br></br>
						</p>
						<p className="text-sm text-gray-500">
							{" "}
							Canal Recomendado:{" "}
							<a href="https://www.youtube.com/@DRLAROSA" className="text-blue-500">
								Dr La Rosa{" "}
							</a>
						</p>
					</div>
				</div>
			</div>
			<div>
				<h2 className="text-xl mt-4 mb-3">Dale play a tu proximo plato</h2>
				
				<iframe
					width="100%"
					height="250px"
					src="https://www.youtube.com/watch?v=tMlpTggczQg"
					title="YouTube video player"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
				></iframe>
			</div>
		</div>
	);
}
const slides = [
	{
		imageUrl: "src/assets/img/cetogenica.png",
		title: "Dieta Cetogénica",
		description:
			"Baja en carbohidratos y alta en grasas que induce al cuerpo a un estado de cetosis, donde quema grasa como fuente de energía principal en lugar de carbohidratos.",
	},
	{
		imageUrl: "src/assets/img/mediterra.png",
		title: "Mediterranea",
		description:
			"Se basa en el consumo abundante de frutas, verduras, legumbres, cereales integrales, aceite de oliva y frutos secos, con un consumo moderado de pescado, carne y lácteos, y un bajo consumo de azúcares refinados y carnes rojas.",
	},
	{
		imageUrl: "src/assets/img/whole.png",
		title: "Whole-foods",
		description:
			"Se centra en comer alimentos enteros y sin procesar, como frutas, verduras, carnes magras y granos integrales, limitando los alimentos refinados y procesados.",
	},
	{
		imageUrl: "src/assets/img/plant.png",
		title: "Plant based",
		description:
			"Se basa principalmente en alimentos vegetales como frutas, verduras, granos enteros, legumbres, frutos secos y semillas.",
	},
];
