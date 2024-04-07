import {environment} from "../../../environment"
import React from "react";
import { useState, useEffect } from "react";
import TagSelector from "./TagSelector";

export default function AddForumForm({handleForumUpload}) {

    const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [topic, setTopic] = useState("Alimentación");
    const [tags, setTags] = useState("");

    useEffect(() => {
        setIsSubmitDisabled(false)
    }, []);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const req = {
            title: title,
            description: description,
            topic: topic,
            tags: tags,
            comments: []
        }

        // Fetch options for the POST request
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' // Specify the content type as JSON
            },
            body: JSON.stringify(req) // Convert the data to JSON format
        };

        setIsSubmitDisabled(true);
        await fetch(`${environment.backendUrl}/forums`, options)
            .then((response) => response.json())
            .then((data) => {
                handleForumUpload();
            })
            .catch((error) => console.error("Error:", error))
            .finally(()=> {
                setIsSubmitDisabled(true);
            })
    };

    return (
        <div className="max-w-md mx-auto bg-gray-800 rounded p-8 shadow-md">
        <h2 className="text-xl font-semibold mb-4">Iniciar nuevo debate</h2>
        <form onSubmit={handleSubmit} method="post">
            <div className="mb-4">
                <label htmlFor="titulo" className="block text-gray-300 font-semibold mb-2">Titulo</label>
                <input type="text" value={title} onChange={e => setTitle(e.target.value)} id="titulo" name="titulo" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"/>
            </div>
            <div className="mb-4">
                <label htmlFor="topico" className="block text-gray-300 font-semibold mb-2">Tópico</label>
                <select id="topico" value={topic} onChange={e => setTopic(e.target.value)} name="topico" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500">
                    <option value="Alimentación">Alimentación</option>
                    <option value="Sueño">Sueño</option>
                    <option value="Social">Social</option>
                    <option value="Actividades">Energía y vitalidad</option>
                </select>
            </div>
            <div className="mb-4">
                <label htmlFor="descripcion" className="block text-gray-300 font-semibold mb-2">Descripción</label>
                <textarea id="descripcion" value={description} onChange={e => setDescription(e.target.value)} name="descripcion" rows={3} className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"></textarea>
            </div>
            <div className="mb-4">
                <label htmlFor="mensaje" className="block text-gray-300 font-semibold mb-2">Tags</label>
                <TagSelector handleTags={setTags}></TagSelector>
            </div>
            <div>
                <button type="submit" disabled={isSubmitDisabled} className={`bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600`}>Enviar</button>
            </div>
        </form>
    </div>
    )
}