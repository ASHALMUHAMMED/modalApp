import { useState } from 'react';
import './App.css';
import Modal from './components/modal/Modal';

function App() {
      const [showModal,setShowModal] = useState(false)

      const handleShowModal = () =>{
        setShowModal(true)
      }

      const handleCloseModal = (event) =>{
        if(event.target.classList.contains('close-modal'))
        setShowModal(false)
      }

  return (
    <div>
       <section className='intro-section'>
      <div className='intro'>
        <h1 className=''>Lets <span>Create a Modal!!!</span></h1>
        <p>Click the button below</p>
        <button className='btn btn-success' onClick={handleShowModal}>OPEN MODAL</button>
      </div>  
    </section>
      { showModal && <Modal onCloseModal={handleCloseModal} /> }
    </div>
  );
}

export default App;
