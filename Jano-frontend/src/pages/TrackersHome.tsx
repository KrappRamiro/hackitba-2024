import SendIcon from '@mui/icons-material/Send';

export default function TrackersHome() {
    return (
        <div className="flex flex-col justify-end">
        <div className="flex p-4 overflow-auto">
            <p>
            <strong>AI:</strong> I'm an AI, I don't have feelings, but I'm functioning as expected. How can I assist you today?
            </p>
        </div>
    
        
        <div className="flex flex-col justify-end p-4 ">
            <div className="flex ">
            <input
                className="rounded-full pl-3 border-gray-200 dark:border-gray-800 flex-1 mr-2"
                placeholder="Que tienes en mente?"
                type="text"
            />
            <button
                className="h-[3rem] w-[3rem] rounded-full ml-auto"
            >
                <SendIcon className="h-6 w-6" />
                <span className="sr-only">Send</span>
            </button>
            </div>
        </div>
        </div>
    );
    }
    