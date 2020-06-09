import React from 'react';

import './styles.css';
import './responsive.css';

export default function ContainerDiferencial(props) {
  return (
    <div className="container-diferencial-component">
      <img 
        src={props.img} 
        alt={props.imgTitle} 
        title={props.imgTitle} 
      />

    <p><strong>{props.firstText}</strong></p>
    <p>{props.secondText}</p>
    </div>
  )
}
