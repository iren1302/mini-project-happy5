// src/App.jsx
import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Icon from './assets/icon.svg'
import Button from './assets/button.svg'

const App = () => {
  return (
    <div className="container">
      <Sidebar />
      <section className="section">
        <h1>Product Roadmap</h1>

        {/* Card Utama */}
        <div className="card-utama">
          <h2 className="card-utama-title">Q1 2019</h2>
          <p className="card-utama-date">January - March</p>

          {/* Sub-Card 1 */}
          <div className="sub-card">
            <div className="sub-card-content">
              <p className="sub-card-title">
                Re-designed the zero-g doggie bags. No more spills!
              </p>
              <div className="sub-card-footer">
                <div className="progress-info">
                  <img className="icon" src={Icon} />
                  <span className="progress-text">64%</span>
                </div>
                <img className="ellipsis-button" src={Button} />
              </div>
            </div>
          </div>

          {/* Sub-Card 2 */}
          <div className="sub-card">
            <div className="sub-card-content">
              <p className="sub-card-title">Travel & Relocation Support</p>
              <div className="sub-card-footer">
                <div className="progress-info">
                <img className="icon" src={Icon} />
                  <span className="progress-text">12%</span>
                </div>
                <img className="ellipsis-button" src={Button} />
              </div>
            </div>
          </div>

          {/* Tombol Tambah Task */}
          <button className="add-task-button"> <span>+</span> Create new task</button>
        </div>
      </section>
    </div>
  );
};

export default App;
