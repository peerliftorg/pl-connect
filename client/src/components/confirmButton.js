import React, {Component} from 'react'; 
import '../components/confirmButton.css';

const ConfirmButton = ({text, visible}) => {

    return(
    <div className = "ConfirmButton">{text}</div>
    
    )
  }

  export default ConfirmButton;
