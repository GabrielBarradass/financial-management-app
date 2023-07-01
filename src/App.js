import React, {useState} from 'react';
import './App.css';
import Modal from './components/modal';

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <>
      <button onClick={() => setIsModalVisible(true) }>Open</button>
      {isModalVisible ? (
      <Modal onClose={ () => setIsModalVisible(false)}/>
      ) : null}
    </>
  );
}

export default App;
