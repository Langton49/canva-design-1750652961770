// src/components/SpeakerCard.jsx
import React from 'react';
import '../styles/SpeakerCard.css';

/**
 * SpeakerCard: renders a speaker headshot and info in speakers section.
 * Replace the img src with any suitable professional image.
 */
export default function SpeakerCard({ img, name, title, org, date }) {
  return (
    <div className="speaker-card">
      <div className="speaker-img-wrapper">
        {/* Replace src with your speaker's headshot if you wish */}
        <img className="speaker-img" src={img} alt={name + ' Headshot'} />
      </div>
      <div className="speaker-info">
        <h3 className="speaker-name">{name}</h3>
        <div className="speaker-title">{title}</div>
        <div className="speaker-org">{org}</div>
        <div className="speaker-date">{date}</div>
      </div>
    </div>
  );
}
