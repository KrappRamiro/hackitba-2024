import SleepForm from "../components/Sleep/SleepForm";
import SleepTracker from "../components/Sleep/SleepTracker";
import {useState} from "react"
export default function Suenio() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
  
	return (
		<div>
       {isModalOpen && (
                <div className="modal">
                <div className="modal-content">
                    <span className="close" onClick={closeModal}>&times;</span>
                    <SleepForm/>
                </div>
                </div>
            )}
			<div className="flex justify-between mb-8 ">
				<button onClick={openModal} className="border-2 border-black rounded-xl px-4 py-2 font-semibold bg-lime-500">
					<span>Cargar</span>
				</button>
			</div>
           
			<SleepTracker />
		</div>
	);
}
