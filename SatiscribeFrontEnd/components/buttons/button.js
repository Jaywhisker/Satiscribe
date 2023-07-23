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
          fill ? styles.fillButton : styles.borderButton
        }`}
        onClick={onClick}
      >
        {children}
      </button>
    );
  };
  
  export default Button;
