import {  useState } from "react";
import { redirect } from "react-router-dom";

export default function TrackerForm() {
	const [metricName, setNombreMetrica] = useState('');
	const [centralName, setNombreCentral] = useState('');
	const [numeroObjetivo, setNumeroObjetivo] = useState(0);

	const handlerSubmit = (e: { preventDefault: () => void; }) => {
		e.preventDefault();
		
		redirect('/home');
	};

	return (
		<div className="">
			<form onSubmit={handlerSubmit} className="shadow-md rounded px-8 pt-6 pb-8 mb-4">
				<fieldset>
					<legend className="text-sm font-semibold leading-6 text-white">Crea tu nuevo tracker</legend>
					<div className="mb-6">
						<label className="block text-gray-700 text-sm font-bold mb-2">Nombre de la metrica</label>
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 text-white mb-3 leading-tight focus:outline-none focus:shadow-outline"
							id="text"
							type="text"
							placeholder="Horas de sueño"
							onChange={e => setNombreMetrica(e.target.value)}
						/>
					</div>
					<div className="mb-6">
						<label className="block text-gray-700 text-sm font-bold mb-2">Nombre central</label>
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 text-white mb-3 leading-tight focus:outline-none focus:shadow-outline"
							id="text"
							type="text"
							placeholder="Nombre central "
							onChange={e => setNombreCentral(e.target.value)}
						/>
					</div>
					<div className="mb-6">
						<label className="block text-gray-700 text-sm font-bold mb-2">Objetivo</label>
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 text-white mb-3 leading-tight focus:outline-none focus:shadow-outline"
							id="number"
							type="number"
							placeholder="1"
							onChange={e => setNumeroObjetivo(Number(e.target.value))}
						/>
					</div>
					<div className="flex items-center justify-between">
						<button
							className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
							type="submit"
						>
							Crear
						</button>
					</div>
				</fieldset>
			</form>
		</div>
	);
}
