import '../styles/cryptedText.scss';
import React from 'react';

const CryptedText = ({ text }) => {
  return (
    <div className="animated-text">
      {text.split('').map((char, index) => (
        <span key={index} className="animated-char">{char} douze</span>
      ))}
    </div>
  );
};

export default CryptedText;