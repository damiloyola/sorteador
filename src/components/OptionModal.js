import React from 'react';
import Modal from 'react-modal';



const OptionModal = (props) => (
    <Modal
        isOpen = {!!props.selectedOption} // al ponerle !! va a ser false cuando este undefined y true cuando tenga string
        contentLabel = "Opcion Ganadora" //opcion para screenreaders
        onRequestClose = {props.handleClearSelected} //para que se cierre cuando se apriete esc o click afuera del modal
    >
        <h3>Ganador</h3>
        {props.selectedOption && <p>{props.selectedOption}</p> }
        <button onClick = {props.handleClearSelected} >Ok</button>
    </Modal>
    

);

export default OptionModal;