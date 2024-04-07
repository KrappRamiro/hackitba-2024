import {environment} from "../../environment"
import { useState, useEffect } from "react"
import { IComment, IForum } from "./Social"
import Person from '@mui/icons-material/Person';
import { Link } from "react-router-dom";
import ArrowBack from '@mui/icons-material/ArrowBackIosNew';
import { useParams } from "react-router-dom";


export default function Forum() {

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
            <div className="max-w-sm rounded overflow-hidden shadow-lg h-60 flex flex-col justify-around">
                <div className="flex justify-between font-bold text-xl mb-2">
                    <h2>{detailedForum.title}</h2>
                    <Link to={"/social"}>
                        <ArrowBack></ArrowBack>
                    </Link>
                </div>
                <p className="text-gray-600 text-base">
                    {detailedForum.description}
                </p>
                <div className="flex justify-start gap-4">
                    {
                        detailedForum.tags.map((tag) => (
                            <span className="inline-block bg-blue-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">#{tag}</span>
                        )
                        )}
                </div>
            </div>
            <div className="flex flex-col justify-start">
                <h2 className="font-bold text-xl my-8 shadow-lg py-4">Comentarios</h2>
                {
                    detailedForum.comments.map((comment, index) => (
                        <div className="max-w-sm rounded overflow-hidden shadow-lg">
                            <div className="px-6 py-4">
                                <div className="flex justify-start gap-2">
                                    <Person></Person>
                                    <div className="font-bold text-sm mb-2">{comment.user}</div>
                                </div>
                                <p className="text-gray-600 text-base">
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