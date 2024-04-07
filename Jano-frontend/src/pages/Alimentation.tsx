import SwiperComponent from "../components/SwiperComponent";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import HuevosKeto from "../assets/img/platos/huevosketo.jpg";
import HamburguesaPlantBased from "../assets/img/platos/hamburguesaplantbased.jpeg";
import EnsaladaMediterranea from "../assets/img/platos/ensaladamediterranea.jpg";
import BoniatosWholefood from "../assets/img/platos/boniatoswhole.jpeg";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";

export default function Alimentation() {
	return (
		<div className="p-4">
			<div className="space-y-4">
				<div>
					<h1 className="text-2xl font-bold">Alimentación</h1>
					<h2 className="text-lg text-gray-300 mb-2">Cambia un poco tu dieta, mejora mucho tu vida. </h2>
				</div>
				<div>
					<SwiperComponent slides={slides} />
				</div>
				<div className="bg-gray-800 p-4 rounded-lg flex items-center justify-between">
					<div className="flex items-baseline">
						<div className="ml-4">
							<div className="flex items-center mb-3">
								<MenuBookIcon style={{ fontSize: 24, color: "#fff" }} />
								<h2 className="text-xl font-semibold ml-2">Lectura nutritiva</h2>
							</div>
							<ul>
								<li>
									<strong>¡Es la microbiota, idiota!</strong> - Dra. Sari Arponen
								</li>
								<li>
									<strong>Hábitos atómicos</strong> - James Clear
								</li>
								<li>
									<strong>Cocina Keto</strong> - Laura Garat
								</li>
								<li>
									<strong>Happy Food Therapy</strong> - Mareva Gillioz
								</li>
								<li>
									<strong>Respira</strong> - James Nestor
								</li>
								<li>
									<strong>Recetas Ketomediterráneas</strong> - Marina Ribas
								</li>
							</ul>
							<p className="text-sm text-gray-500">
								Encuentra más libros como estos{" "}
								<a
									href="https://munkombucha.com/los-12-mejores-libros-de-alimentacion-y-habitos-saludables/"
									className="text-blue-500"
								>
									aquí.{" "}
								</a>
							</p>
						</div>
					</div>
				</div>

				<div className="bg-gray-800 p-4 rounded-lg">
					<div className="flex items-center justify-center mb-4">
						<PlayCircleFilledWhiteIcon style={{ fontSize: 24, color: "#fff" }} />

						<p className="ml-1 text-lg font-semibold text-gray-300">Dale play a tu próximo plato!</p>
					</div>
					<div className="grid grid-cols-4 gap-2 mb-4">
						<a href="https://www.youtube.com/watch?v=xKdw8404js0" className="relative group">
							<img
								src={HuevosKeto}
								className="w-24 h-16 object-cover transition duration-300 transform group-hover:opacity-50"
							/>
							<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 bg-black bg-opacity-50">
								<p className="text-white text-xs text-center">Huevos Cremosos Keto</p>
							</div>
						</a>
						<a href="https://www.youtube.com/watch?v=xj8rM-Yvppg" className="relative group">
							<img
								src={HamburguesaPlantBased}
								className="w-24 h-16 object-cover transition duration-300 transform group-hover:opacity-50"
							/>
							<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 bg-black bg-opacity-50">
								<p className="text-white text-xs text-center">Hamburguesa Plant-Based</p>
							</div>
						</a>
						<a href="https://www.youtube.com/watch?v=rYgJskIIeC0" className="relative group">
							<img
								src={EnsaladaMediterranea}
								className="w-24 h-16 object-cover transition duration-300 transform group-hover:opacity-50"
							/>
							<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 bg-black bg-opacity-50">
								<p className="text-white text-xs text-center">Ensalada Mediterranea</p>
							</div>
						</a>
						<a href="https://www.youtube.com/shorts/Z-94H_jBsCc" className="relative group">
							<img
								src={BoniatosWholefood}
								className="w-24 h-16 object-cover transition duration-300 transform group-hover:opacity-50"
							/>
							<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 bg-black bg-opacity-50">
								<p className="text-white text-xs text-center">Boniatos Whole Food</p>
							</div>
						</a>
					</div>
					<div className="grid grid-cols-4 gap-2">
						<a href="https://www.youtube.com/watch?v=xKdw8404js0" className="relative group">
							<img
								src={HuevosKeto}
								className="w-24 h-16 object-cover transition duration-300 transform group-hover:opacity-50"
							/>
							<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 bg-black bg-opacity-50">
								<p className="text-white text-xs text-center">Huevos Cremosos Keto</p>
							</div>
						</a>
						<a href="https://www.youtube.com/watch?v=xj8rM-Yvppg" className="relative group">
							<img
								src={HamburguesaPlantBased}
								className="w-24 h-16 object-cover transition duration-300 transform group-hover:opacity-50"
							/>
							<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 bg-black bg-opacity-50">
								<p className="text-white text-xs text-center">Hamburguesa Plant-Based</p>
							</div>
						</a>
						<a href="https://www.youtube.com/watch?v=rYgJskIIeC0" className="relative group">
							<img
								src={EnsaladaMediterranea}
								className="w-24 h-16 object-cover transition duration-300 transform group-hover:opacity-50"
							/>
							<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 bg-black bg-opacity-50">
								<p className="text-white text-xs text-center">Ensalada Mediterranea</p>
							</div>
						</a>
						<a href="https://www.youtube.com/shorts/Z-94H_jBsCc" className="relative group">
							<img
								src={BoniatosWholefood}
								className="w-24 h-16 object-cover transition duration-300 transform group-hover:opacity-50"
							/>
							<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 bg-black bg-opacity-50">
								<p className="text-white text-xs text-center">Boniatos Whole Food</p>
							</div>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
const slides = [
	{
		imageUrl: "src/assets/img/cetogenica.png",
		title: "Dieta Cetogénica",
		description:
			"Reducción de carbohidratos, aumento de grasas, estado de cetosis, promoviendo la quema de grasa para obtener energía.",
		link: "https://ejemplo.com/dieta-cetogenica",
	},
	{
		imageUrl: "src/assets/img/mediterra.png",
		title: "Mediterránea",
		description:
			"Enfoque en frutas, verduras, aceite de oliva y pescado, inspirada en los patrones alimenticios de las regiones mediterráneas.",
		link: "https://ejemplo.com/dieta-mediterranea",
	},
	{
		imageUrl: "src/assets/img/whole.png",
		title: "Whole-foods",
		description: "Priorización de alimentos naturales y sin procesar, evitando los productos industriales y refinados.",
		link: "https://ejemplo.com/whole-foods",
	},
	{
		imageUrl: "src/assets/img/plant.png",
		title: "Plant based",
		description:
			"Basada en productos vegetales como frutas, verduras y legumbres, excluyendo en gran medida los productos de origen animal.",
		link: "https://ejemplo.com/plant-based",
	},
];
