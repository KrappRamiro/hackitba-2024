import { environment } from "../../environment";
import { useState } from "react";
import Jano from "../assets/img/jano.svg";

export default function Home() {
	const [message, setMessage] = useState("");
	const [conversation, setConversation] = useState<{ user: string; text: string }[]>([
		{
			user: "AI",
			text: "Hola, soy Jano, tu acompañante en este camino <3. ¿En qué puedo ayudarte hoy?",
		},
	]);
	const sendMessage = () => {
		if (message.trim() !== "") {
			const updatedConversation = [...conversation];

			updatedConversation.push({ user: "You", text: message });

			getOpenAITextGeneration(message)
				.then((chatbotResponse) => {
					// Once the response is available, update the conversation
					console.warn(chatbotResponse);

					updatedConversation.push({ user: "AI", text: chatbotResponse });
					setConversation(updatedConversation);
					setMessage("");
				})
				.catch((error) => {
					// Handle any errors that occur during the request
					console.error("Error:", error);
				});
		}
	};

	const getOpenAITextGeneration = async (userQuestion: string): Promise<string> => {
		try {
			const url = `${environment.backendUrl}/chatbot/ask`;
			const data = {
				message: userQuestion,
			};
			const response = await fetch(url, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});

			if (!response.ok) {
				throw new Error("Network response was not ok");
			}

			const jsonResponse = await response.json();
			return jsonResponse.message.content; // Assuming jsonResponse.message.content is a string
		} catch (error) {
			console.error("Error:", error);
			throw error; // Rethrow the error to be handled by the caller
		}
	};

	const handleKeyDown = (event) => {
		if (event.key === "Enter") {
			sendMessage();
		}
	};

	return (
		<div className="flex flex-col justify-between h-full">
			<h1 className="text-2xl font-bold mb-4 flex justify-between items-center px-5 mt-4">
				<span>Jano</span>
				<img src={Jano} className="w-8 h-8" style={{ filter: 'invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg) brightness(103%) contrast(103%)' }} />			</h1>{" "}
			<div className="flex p-4 overflow-auto flex-col-reverse" style={{ maxWidth: "80vw", height: "80vh" }}>
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
