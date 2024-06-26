import {environment} from "../../environment"
import { useState, useEffect } from "react"
import { IForum } from "./Forum"
import Person from '@mui/icons-material/Person';
import { Link } from "react-router-dom";
import ArrowBack from '@mui/icons-material/ArrowBackIosNew';
import { useParams } from "react-router-dom";


export default function ForumDetails() {

    const { forumId } = useParams();


    const [detailedForum, setdetailedForum] = useState<IForum>({_id: "",
        title: "",
        description: "",
        topic: "",
        tags: [],
        comments: []
    });

    useEffect(() => {
        fetch(`${environment.backendUrl}/forums/${forumId}`)
            .then((response) => response.json())
            .then((data) => {
                setdetailedForum(data);
            })
            .catch((error) => console.error("Error:", error));
    }, []);

    return (
        <div className="mx-4">
            <div className="max-w-sm rounded-lg overflow-hidden shadow-lg flex flex-col justify-start bg-gray-800 p-4 mt-4">
                <div className="flex justify-between font-bold text-xl mb-2">
                    <h2>{detailedForum.title}</h2>
                    <Link to={"/foro"}>
                        <ArrowBack></ArrowBack>
                    </Link>
                </div>
                <p className="text-gray-300 text-base">
                    {detailedForum.description}
                </p>
                <div className="flex justify-start gap-1 mt-4">
                    {
                        detailedForum.tags.map((tag) => (
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{tag}</span>
                        )
                        )}
                </div>
            </div>
            <div className="flex flex-col justify-start gap-4">
                <h2 className="font-bold text-xl my-4 shadow-lg">Comentarios</h2>
                {
                    detailedForum.comments.map((comment, index) => (
                        <div className="max-w-sm bg-gray-800 rounded overflow-hidden shadow-lg">
                            <div className="px-6 py-4">
                                <div className="flex justify-start gap-2">
                                    <Person></Person>
                                    <div className="font-bold text-sm mb-2">{comment.user}</div>
                                </div>
                                <p className="text-sm font-semibold text-gray-300">
                                    {comment.content}
                                </p>
                            </div>
                        </div>
                    )
                    )}
            </div>
        </div>
    )
}