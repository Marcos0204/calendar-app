import React, {useState} from 'react'
import Modal from 'react-modal';


const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

Modal.setAppElement('#root');
export const CalendarModal = () => {

    const [isOpen, setisOpen] = useState(true)

    const closeModal = () => {
        console.log('clossing')
        setisOpen(false)
    }
    return (
        <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={ customStyles }
        closeTimeoutMS={ 200 }
        className="modal"
        overlayClassName="modal-fondo"
      >
          <h1>modal </h1>
      </Modal>
    )
}