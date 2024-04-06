import { useState } from "react";

export default function Home() {
	const [message, setMessage] = useState("");
	const [conversation, setConversation] = useState<{ user: string; text: string }[]>([
		{
			user: "AI",
			text: "Soy una IA, no tengo sentimientos, pero estoy funcionando como se espera. ¿En qué puedo ayudarte hoy?",
		},
	]);
	const sendMessage = () => {
		if (message.trim() !== "") {
			const updatedConversation = [...conversation];

			updatedConversation.push({ user: "You", text: message });

			const randomResponse = getRandomResponse();

			updatedConversation.push({ user: "AI", text: randomResponse });

			setConversation(updatedConversation);

			setMessage("");
		}
	};

	const getRandomResponse = () => {
		const responses = [
			"Entendido. ¿Hay algo más en lo que pueda ayudarte?",
			"¡Claro! ¿Qué más necesitas?",
			"Hmm, eso es interesante. Permíteme buscar más información al respecto.",
		];
		const randomIndex = Math.floor(Math.random() * responses.length);
		return responses[randomIndex];
	};

	const handleKeyDown = (event) => {
		if (event.key === "Enter") {
			sendMessage();
		}
	};

	return (
		<div className="flex flex-col justify-end">
			<div className="flex p-4 overflow-auto flex-col-reverse" style={{ maxWidth: "80vw" }}>
				{conversation
					.map((message, index) => (
						<div key={index} className={`flex ${message.user === "You" ? "justify-end" : "justify-start"} mb-2`}>
							<div
								className={`rounded-lg p-3 ${
									message.user === "You" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
								} max-w-[200px] break-words`}
							>
								{message.text}
							</div>
						</div>
					))
					.reverse()}{" "}
			</div>

			<div className="flex flex-col justify-end p-4">
				<div className="flex ">
					<input
						className="rounded-full pl-3 border-gray-200 dark:border-gray-800 flex-1 mr-2"
						placeholder="¿Qué tienes en mente?"
						type="text"
						value={message}
						onChange={(e) => setMessage(e.target.value)}
						onKeyDown={handleKeyDown}
					/>
					<button
						className="h-[3rem] w-[3rem] rounded-full ml-auto bg-blue-500 text-white flex items-center justify-center"
						onClick={sendMessage}
					>
						<box-icon name="send" color="#ffffff" size="md" />
						<span className="sr-only">Enviar</span>
					</button>
				</div>
			</div>
		</div>
	);
}
