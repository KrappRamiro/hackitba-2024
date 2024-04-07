import TrackerModule from '../components/TrackerModule';

const trackerMock = [{
    userId: "609d91d9e2d6d41768a092d8",
    date: "2024-04-06",
    title: "Descanso",
    fields: [["Diario ",6], ["Mision",8],["Promedio",5]],
    },
    {
        userId: "609d91d9e2d6d41768a092d8",
        date: "2024-04-06",
        title: "Entrenamiento",
        fields: [["Semanal",3], ["Mision",5],["promedio",4]],
        }]
    
export default function TrackersHome() {
    
    return (
        <div className="flex flex-col justify-end">
            {trackerMock.map((tracker) => (
                <TrackerModule tracker={tracker} />
            ))    
            }
            <div className="flex justify-center mt-5">
                <a href='/form' className="flex items-center justify-center bg-lime-500 text-white rounded-full p-3" >
                    add new
                </a>
        </div>
        </div>
    );
    }
    