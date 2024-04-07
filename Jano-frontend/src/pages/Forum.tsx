import {environment} from "../../environment"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AddForumModal from "../components/Social/AddForumModal";

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

    const requestAllForums = () => {
        fetch(`${environment.backendUrl}/forums`)
                .then((response) => response.json())
                .then((data) => {
                    //console.log();                    
                    data.reverse()
                    setForumList(data);
                })
                .catch((error) => console.error("Error:", error));
    }

    useEffect(() => {
        requestAllForums();
        
    }, []);

    const handleForumUpload= () => {
        requestAllForums();
    }

    return (
        <div>
            <div className="flex justify-between text-2xl font-bold mb-4 flex justify-between items-center px-5 mt-4">
                <h1 className="" >Foros</h1>
                <AddForumModal handleForumUpload={handleForumUpload}></AddForumModal>
            </div>
            
            
            <div className="flex flex-col justify-end p-4 gap-4">
                {
                    forumList.map((forum, index) => (
                        <Link to={`/foro/${forum._id}`}  key={forum._id} className="bg-gray-800 max-w-sm min-h-40 rounded-lg overflow-hidden shadow-lg cursor-pointer hover:bg-gray-900 transition-colors">
                            <div className="px-6 py-4">
                                <div className="flex justify-between font-bold mb-2">
                                    <h2 className="text-lg">{truncateText(forum.title, 18)}</h2>
                                    <h4 className="text-xs rounded-full p-2 bg-blue-500" >{truncateText(forum.topic, 10)}</h4>
                                </div>
                                <p className="text-sm font-semibold text-gray-300 mb-4">
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