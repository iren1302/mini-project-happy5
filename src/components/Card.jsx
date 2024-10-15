// Card.jsx
import React from 'react';
import '../App.css';
import SubCard from './SubCard';


const Card = ({ title, bulan, cards } ) => {
  
  
  return (
    <div className="card-utama">
      <div className='card'>

      <h2 className="card-utama-title">{title}</h2>
      <p className="card-utama-date">{bulan}</p>

      <div className="card-content">
      {cards && cards.length > 0 ? (
      cards.map((card) => (
      <SubCard 
        key={card.id}
        title={card.title} 
        progress={card.progress}
      />
        ))
        ) : (
          <p className='no-task'>No Task Available</p>
        )}
      </div>

      {/* Tombol Tambah Task */}
      <button className="add-task-button">
        <span>+</span> Create new task
      </button>
      </div>
    </div>
  );
};

export default Card;
