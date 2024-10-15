import React from 'react';
import Icon from '../assets/icon.svg';
import Button from '../assets/button.svg';
import '../App.css'

const SubCard = ({title,progress}) => {
  
  return (
    <div className="sub-card">
      <div className="sub-card-content">
        <p className="sub-card-title">
          {title}
        </p>
        <div className="sub-card-footer">
          <div className="progress-info">
            <img className="icon" src={Icon} alt="icon" />
            <span className="progress-text">{progress}</span>
          </div>
          <img className="ellipsis-button" src={Button} alt="button" />
        </div>
      </div>
    </div>
  );
};

export default SubCard;
