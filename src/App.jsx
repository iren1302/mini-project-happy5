// src/App.jsx
import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';

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
              <div className="sub-card-title">
                Re-designed the zero-g doggie bags. No more spills!
              </div>
              <div className="sub-card-footer">
                <div className="progress-info">
                  <span className="icon">🔒</span>
                  <span className="progress-text">64%</span>
                </div>
                <button className="ellipsis-button">⋯</button>
              </div>
            </div>
          </div>

          {/* Sub-Card 2 */}
          <div className="sub-card">
            <div className="sub-card-content">
              <div className="sub-card-title">Travel & Relocation Support</div>
              <div className="sub-card-footer">
                <div className="progress-info">
                  <span className="icon">🔒</span>
                  <span className="progress-text">12%</span>
                </div>
                <button className="ellipsis-button">⋯</button>
              </div>
            </div>
          </div>

          {/* Tombol Tambah Task */}
          <button className="add-task-button">+ Create new task</button>
        </div>
      </section>
    </div>
  );
};

export default App;
