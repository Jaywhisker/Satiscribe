import React from 'react';
import styles from '../../styles/buttons.module.css';

const ButtonWithLogo = ({ size, logo, onClick, children }) => {
  const getButtonSizeClass = () => {
    switch (size) {
      case 'small':
        return styles.smallButton;
      case 'medium':
        return styles.mediumButton;
      case 'large':
        return styles.largeButton;
      default:
        return styles.mediumButton;
    }
  };

  const getLogoClass = () => {
    switch (logo) {
      case 'left':
        return styles.leftLogo;
      case 'right':
        return styles.rightLogo;
      case 'none':
        return styles.noLogo;
      default:
        return ''; 
    }
  };

  return (
    <button
      className={`${styles.sharedButton} ${getButtonSizeClass()} ${getLogoClass()}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ButtonWithLogo;
