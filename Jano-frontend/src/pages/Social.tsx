import AquiEstoy from "../assets/img/aqui-estoy.png";

export default function Social() {
	return (
		<div className="p-4">
			<h1 className="text-2xl font-bold mb-4">Social</h1>
			<div className="space-y-4">
				<div className="bg-gray-800 p-4 rounded-lg items-center">
					<div>
						<h2 className="text-xl font-bold mb-2">Foros</h2>
						<p className="text-sm font-semibold text-gray-300 mb-4">
							Encuentra comunidades en línea que te ofrecen apoyo y consejos para tu bienestar mental.
						</p>
						<div className="grid grid-cols-1 gap-4">
							<a
								href="https://clinicadeansiedad.com/foro-debate/"
								className="bg-blue-500 rounded-lg p-4 flex items-center justify-between transition duration-300 transform hover:scale-105"
							>
								<p className="text-white text-lg font-semibold">Clinica de la Ansiedad</p>
								<box-icon name="chevron-right" color="#fff" size="md"></box-icon>
							</a>
							<a
								href="https://www.ocu.org/comunidad/salud-y-nutricion/dieta-vegetariana/conversacion/2895/bienvenido-al-foro-de-nuevas-tendencias-en-alimentacion"
								className="bg-green-500 rounded-lg p-4 flex items-center justify-between transition duration-300 transform hover:scale-105"
							>
								<p className="text-white text-lg font-semibold">Org. de Consumidores y Usuarios - Alimentación</p>
								<box-icon name="chevron-right" color="#fff" size="md"></box-icon>
							</a>
							<a
								href="https://www.carenity.es/foro/depresion-258"
								className="bg-yellow-500 rounded-lg p-4 flex items-center justify-between transition duration-300 transform hover:scale-105"
							>
								<p className="text-white text-lg font-semibold">Carenity - Foro de depresión</p>
								<box-icon name="chevron-right" color="#fff" size="md"></box-icon>
							</a>
						</div>
					</div>
					<p className="text-gray-400 text-sm text-center mt-4">
						Recomendamos los foros en línea listados anteriormente, pero es importante tener en cuenta que hay una
						amplia variedad de comunidades disponibles. Siempre es bueno investigar y encontrar la que mejor se adapte a
						tus necesidades, con la prudencia adecuada.
					</p>
				</div>

				<div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center justify-center">
    {/* Logo redondeado a un círculo */}
    <div className="mb-4 rounded-full overflow-hidden">
        <img src={AquiEstoy} alt="Aquí estoy logo" className="w-24 h-24 mx-auto rounded-full" />
    </div>
    {/* Textos centrados */}
    <div className="text-center">
        <h2 className="text-xl font-bold mb-2">Aquí estoy Chat</h2>
        <p className="text-sm font-semibold text-gray-300 mb-4">
            Descubre una línea de chat disponible las 24 horas para brindarte apoyo en momentos de necesidad.
        </p>
        <a
            href="https://aquiestoy.chat/"
            className="text-white py-2 px-4 rounded-lg inline-block transition duration-300"
            style={{ backgroundColor: '#00c8b2' }}
        >
            Visitar Aquí estoy Chat
        </a>
    </div>
</div>

			</div>
		</div>
	);
}
