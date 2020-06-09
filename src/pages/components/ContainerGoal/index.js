import React, { useState, useEffect } from 'react';

import './styles.css';
import './responsive.css';


export default function ContainerGoal(props){
  const [shadowStyle, setShadowStyle] = useState('');

  useEffect(() => {
    if (props.shadowed){
      setShadowStyle('shadowed');
    }
  }, [props.shadowed]);


  return (
    <div className={`container-goal ${shadowStyle}`}>
      <div className="container-img">
        <img src={props.img} alt={props.imgText} title={props.imgText} />
      </div>
      <div className="container-text">
        <h4>{props.firstText}</h4>
        <p>{props.secondText}</p>
      </div>
    </div>
  )
}
