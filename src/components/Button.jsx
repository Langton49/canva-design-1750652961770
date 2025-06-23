// src/components/Button.jsx
import React from 'react';
import '../styles/Button.css';

/**
 * Common Button with pill shape used throughout site.
 * Props:
 * - children: text inside button,
 * - onClick: optional click handler,
 * - fullWidth: button filled horizontally (mobile),
 * - style: pass style overrides.
 */
export default function Button({ children, onClick, fullWidth = false, style = {}, ...props }) {
  return (
    <button
      className={`custom-btn${fullWidth ? ' full-width' : ''}`}
      onClick={onClick}
      style={style}
      {...props}
    >
      {children}
    </button>
  );
}
