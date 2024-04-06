import Modal from "../Modal"

export default function ModalUploadFood({ open, setOpen}) {
    return (
        <Modal open={open} onClose={() => setOpen(false)}>
          <div className="text-center w-56">
            
            <div className="mx-auto my-4 w-48">
              <h3 className="text-lg font-black text-white mb-5">¿Quedaste satisfecho?</h3>
              <p className="text-sm text-gray-400 my-5">
                Indícanos qué tan grande consideras que fué la porción
              </p>
            </div>
            <div className="flex text-sm px-2 justify-center gap-4">
              <button className="h-9 px-3 bg-yellow-600 rounded-full">
                Poca
              </button>
              <button className="h-9 px-3 bg-lime-600 rounded-full">
                Suficiente
              </button>
              <button className="h-9 px-3 bg-orange-600 rounded-full">
                Abundante
              </button>
            </div>
          </div>
        </Modal>
    )
  }