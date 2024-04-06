import SoulRelajanteIcon from "../assets/img/youtube-channel-icon/SoulRelajante.jpg";
import LluviaParaDormirIcon from "../assets/img/youtube-channel-icon/LluviaParaDormir.jpg";
import HealingYourSoul from "../assets/img/youtube-channel-icon/HealingSoul.jpg";
import QuietRelaxation from "../assets/img/youtube-channel-icon/QuietRelaxation.jpg";
import SlowTime from "../assets/img/youtube-channel-icon/SlowTime.jpg";
import { useState } from "react";
import SleepForm from "../components/Sleep/SleepForm";
import SleepTracker from "../components/Sleep/SleepTracker";
import ModalSleep from "../components/Sleep/ModalSleep";

export default function Suenio() {
	return (
		<div className="p-4">
			<h1 className="text-2xl font-bold mb-4">Sueño</h1>
      <div>
            <ModalSleep/>

			<SleepTracker />
		</div>
			<div className="space-y-4">
				<div className="bg-gray-800 p-4 rounded-lg">
					<div className="flex items-center justify-center mb-4">
						<div className="text-center">
							<box-icon name="headphone" color="#fff" size="3xl" className="mb-2"></box-icon>
							<p className="text-sm font-semibold text-gray-300">
								Descubre videos y canales que ofrecen contenido relajante para ayudarte a dormir.
							</p>
						</div>
					</div>
					<div className="grid grid-cols-5 gap-2">
						<a href="https://www.youtube.com/@SoulRelajante" className="relative group">
							<img
								src={SoulRelajanteIcon}
								className="w-12 h-12 object-cover rounded-full transition duration-300 transform group-hover:opacity-50"
							/>
							<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 bg-black bg-opacity-50 rounded-full">
								<p className="text-white text-xs text-center">Soul Relajante</p>
							</div>
						</a>
						<a href="https://www.youtube.com/@lluvia369" className="relative group">
							<img
								src={LluviaParaDormirIcon}
								className="w-12 h-12 object-cover rounded-full transition duration-300 transform group-hover:opacity-50"
							/>
							<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 bg-black bg-opacity-50 rounded-full">
								<p className="text-white text-xs text-center">Lluvia para Dormir</p>
							</div>
						</a>
						<a href="https://www.youtube.com/channel/UCHcS4wManoSxoo5XxzIbWqg" className="relative group">
							<img
								src={HealingYourSoul}
								className="w-12 h-12 object-cover rounded-full transition duration-300 transform group-hover:opacity-50"
							/>
							<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 bg-black bg-opacity-50 rounded-full">
								<p className="text-white text-xs text-center">Healing Your Soul</p>
							</div>
						</a>
						<a href="https://www.youtube.com/@QuietRelaxation" className="relative group">
							<img
								src={QuietRelaxation}
								className="w-12 h-12 object-cover rounded-full transition duration-300 transform group-hover:opacity-50"
							/>
							<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 bg-black bg-opacity-50 rounded-full">
								<p className="text-white text-xs text-center">Quiet Relaxation</p>
							</div>
						</a>
						<a href="https://www.youtube.com/@iuhouah2928" className="relative group">
							<img
								src={SlowTime}
								className="w-12 h-12 object-cover rounded-full transition duration-300 transform group-hover:opacity-50"
							/>
							<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 bg-black bg-opacity-50 rounded-full">
								<p className="text-white text-xs text-center">slow time</p>
							</div>
						</a>
					</div>
				</div>
				<div className="bg-gray-800 p-4 rounded-lg">
					<div className="flex items-center gap-4 mb-4">
						<box-icon name="book" color="#fff" size="md" className="mr-2"></box-icon>
						<h2 className="text-lg font-semibold text-white">Lecturas para dormir mejor</h2>
					</div>
					<ul className="text-gray-300 text-sm">
						<li className="mb-1">
							<span className="font-semibold">"Que nada te quite el sueño"</span> -{" "}
							<a
								href="https://www.google.com/search?q=Que+nada+te+quite+el+sueño+M.+Ángeles+Bonmatí"
								target="_blank"
								rel="noopener noreferrer"
								className="underline"
							>
								M. Ángeles Bonmatí
							</a>
						</li>
						<li className="mb-1">
							<span className="font-semibold">"Los 7 hábitos para dormir bien"</span> -{" "}
							<a
								href="https://www.google.com/search?q=Los+7+hábitos+para+dormir+bien+Ana+Muñoz"
								target="_blank"
								rel="noopener noreferrer"
								className="underline"
							>
								Ana Muñoz
							</a>
						</li>
						<li className="mb-1">
							<span className="font-semibold">"Libro para dormir"</span> -{" "}
							<a
								href="https://www.google.com/search?q=Libro+para+dormir+Xavier+Gimeno+Ronda"
								target="_blank"
								rel="noopener noreferrer"
								className="underline"
							>
								Xavier Gimeno Ronda
							</a>
						</li>
						<li className="mb-1">
							<span className="font-semibold">"Meditar día a día"</span> -{" "}
							<a
								href="https://www.google.com/search?q=Meditar+día+a+día+Christopher+Titmuss"
								target="_blank"
								rel="noopener noreferrer"
								className="underline"
							>
								Christopher Titmuss
							</a>
						</li>
						<li className="mb-1">
							<span className="font-semibold">"Relájate y vive sin estrés"</span> -{" "}
							<a
								href="https://www.google.com/search?q=Relájate+y+vive+sin+estrés+Sergio+Fernández"
								target="_blank"
								rel="noopener noreferrer"
								className="underline"
							>
								Sergio Fernández
							</a>
						</li>
						<li className="mb-1">
							<span className="font-semibold">"Sueño Profundo"</span> -{" "}
							<a
								href="https://www.google.com/search?q=Sueño+Profundo+Dan+Gates"
								target="_blank"
								rel="noopener noreferrer"
								className="underline"
							>
								Dan Gates
							</a>
						</li>
						<li className="mb-1">
							<span className="font-semibold">"Dormir sin pastillas"</span> -{" "}
							<a
								href="https://www.google.com/search?q=Dormir+sin+pastillas+María+López"
								target="_blank"
								rel="noopener noreferrer"
								className="underline"
							>
								María López
							</a>
						</li>
						<li className="mb-1">
							<span className="font-semibold">"Descansa y duerme bien"</span> -{" "}
							<a
								href="https://www.google.com/search?q=Descansa+y+duerme+bien+Juan+Fernández"
								target="_blank"
								rel="noopener noreferrer"
								className="underline"
							>
								Juan Fernández
							</a>
						</li>
					</ul>
					<a
						href="https://www.casadellibro.com/libros-ebooks-gratis/184"
						target="_blank"
						rel="noopener noreferrer"
						className="block bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded mt-4 mx-auto filter grayscale text-center"
					>
						Descubre otros libros gratis
					</a>
					<p className="text-gray-400 text-sm text-center mt-2">
						Una buena lectura antes de ir a la cama puede ayudarte a dormir mejor.
					</p>
				</div>

				<div className="bg-gray-800 p-4 rounded-lg flex">
					<div className="mr-4 flex items-center justify-center">
						<box-icon name="music" color="#fff" size="lg"></box-icon>
					</div>
					<div>
						<h2 className="text-lg font-semibold text-white mb-2">Aplicaciones para dormir mejor</h2>
						<p className="text-white">
							Te invitamos a descubrir aplicaciones como{" "}
							<a href="https://ambieapp.com/" className="underline">
								Ambie
							</a>
							,{" "}
							<a href="https://github.com/rafaelmardojai/blanket" className="underline">
								Blanket
							</a>{" "}
							o{" "}
							<a
								href="https://play.google.com/store/apps/details?id=com.github.ashutoshgngwr.noice&hl=en_US"
								className="underline"
							>
								Noise
							</a>{" "}
							para generar tu propio ruido blanco personalizado y mejorar tu calidad de sueño.
						</p>
					</div>
				</div>

				<div className="bg-gray-800 p-4 rounded-lg flex">
					<div className="flex-grow">
						<h2 className="text-lg font-semibold text-white text-right mb-2">
							Consejos para crear un ambiente propicio
						</h2>
						<p className="text-white text-right">
							Pequeños detalles como controlar la temperatura, la humedad, el flujo de aire, y hasta alejar los aparatos
							electrónicos de la habitación pueden lleagar a mejorar mucho el sueño
						</p>
						<a
							href="https://www.google.com/search?q=cómo+configurar+un+ambiente+propicio+para+dormir"
							target="_blank"
							rel="noopener noreferrer"
							className="block bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded mt-2 text-right"
						>
							Conocer más al respecto{" "}
						</a>
					</div>
					<div className="ml-4 flex items-center justify-center">
						<box-icon name="bed" color="#fff" size="lg"></box-icon>
					</div>
				</div>

				<div className="bg-gray-800 p-4 rounded-lg text-center">
					<h2 className="text-lg font-semibold text-white mb-2">Técnicas de relajación y respiración</h2>
					<p className="text-white">
						Descubre técnicas que te ayudarán a reducir el estrés y la ansiedad antes de dormir.
					</p>
					<ul className="text-white list-disc list-inside mt-4">
						<li className="flex items-center">
							<a
								href="https://porquequieroestarbien.com/bienestar-emocional/fortalecer-la-mente/respiracion-lunar-y-otras-3-tecnicas-para-conciliar-el"
								className="underline"
							>
								Respiración lunar y otras 3 técnicas para conciliar el sueño
							</a>
						</li>
						<br></br>
						<li className="flex items-center">
							<a
								href="https://www.healthline.com/health/es/ansiedad-por-la-noche#consejos-de-estilo-de-vida"
								className="underline"
							>
								Cómo calmar la ansiedad durante la noche
							</a>
						</li>
						<br></br>
						<li className="flex items-center">
							<a href="https://www.bbc.com/mundo/noticias-63705037" className="underline">
								5 técnicas simples y científicamente probadas que te ayudarán a quedarte dormido
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}