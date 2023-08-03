import React from 'react'
import styles from '../../styles/buttons.module.css'

const Button = ({ size, fill, onClick, children }) => {
    const getButtonSizeClass = () => {
      switch (size) {
        case 'small':
          return styles.smallButton;
        case 'medium':
          return styles.mediumButton;
        case 'large':
          return styles.largeButton;
        default:
          return styles.mediumButton; // Default to medium size
      }
    };
  
    return (
      <button
        className={`${styles.sharedButton} ${getButtonSizeClass()} ${
          fill ? `${styles.fillButton}` : styles.borderButton
        }`}
        onClick={onClick}
      >
         <h5 style={fill ? { color: 'var(--Final_Gray, #323135)' } : {}}>{children}</h5>
      </button>
    );
  };
  
  export default Button;
