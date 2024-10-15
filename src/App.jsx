// App.jsx
import React from 'react';
import './App.css';
import SubCard from './components/SubCard';
import Sidebar from './components/Sidebar';
import Card from './components/Card';

const App = () => {
  const datas = [
    {
      q : "Q1 2019",
      bulan : "January - March",
      cards: [
        {
          title: "Re-designed the zero-g doggie bags. No more spills!",
          progress: "64%"
        },
        {
          title: "Travel & Relocation Support",
          progress: "12%"
        },
      ]
    },
    {
      q : "Q2 2019",
      bulan : "April - June",
      cards: []
    },
    {
      q : "Q3 2019",
      bulan : "July - September",
      cards: [
        {
          title: "Bundle interplanetary analytics for improved transmission",
          progress: "90%"
        },
      ]
    },
    {
      q : "Q4 2019",
      bulan : "October - December",
      cards: [
        {
          title: "Data Migration: Performance & Culture End Game",
          progress: "63%"
        },
      ]
    },
  ]
  return (
    <div className="container">
      <Sidebar />
      <section className="section">
        <h1>Product Roadmap</h1>
        <div className="container-card">
         {datas.map((data) => (
          <Card key={data.q} title={data.q} bulan={data.bulan} cards={data.cards}/>
         ))}
        </div>
      </section>
    </div>
  );
};

export default App;
