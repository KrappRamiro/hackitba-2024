import {environment} from "../../environment"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export interface IComment {
    user: string,
    content: string
}

export interface IForum {
    _id: string,
    title: string,
    description: string,
    topic: string,
    tags: Array<String>,
    comments: Array<IComment>
}

const truncateText = (text: string, numberOfCharacters: number) => {
    if (text.length <= numberOfCharacters) {
        return text;
    }
    return text.substring(0,numberOfCharacters) + "...";
}

export default function Forum() {
    const [forumList, setForumList] = useState<Array<IForum>>([]);

    useEffect(() => {
        fetch(`${environment.backendUrl}/forums`)
            .then((response) => response.json())
            .then((data) => {
                setForumList(data);
            })
            .catch((error) => console.error("Error:", error));
    }, []);

    return (
        <div>
            <h1 className="font-bold text-xl m-4" >Foros</h1>
            
            <div className="flex flex-col justify-end">
                {
                    forumList.map((forum, index) => (
                        <Link to={`/foro/${forum._id}`}  key={forum._id} className="max-w-sm min-h-40 rounded overflow-hidden shadow-lg cursor-pointer hover:bg-gray-900 transition-colors">
                            <div className="px-6 py-4">
                                <div className="flex justify-between font-bold mb-2">
                                    <h2 className="text-lg">{truncateText(forum.title, 18)}</h2>
                                    <h4 className="text-xs rounded-full p-2 bg-blue-500" >{forum.topic}</h4>
                                </div>
                                <p className="text-gray-600 text-base">
                                    {truncateText(forum.description, 150)}
                                </p>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    );

}