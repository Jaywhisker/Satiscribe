import React from 'react';
import logos from '../../styles/Logos.module.css'
import styles from '../../styles/buttons.module.css';
import flex from '../../styles/Flexible.module.css'

const ButtonWithLogo = ({ size, logo, fill, logoStyle, onClick, children }) => {
  const getButtonSizeClass = () => {
    switch (size) {
      case 'small':
        return styles.smalllogoButton;
      case 'medium':
        return styles.mediumlogoButton;
      case 'large':
        return styles.largelogoButton;
      default:
        return styles.mediumlogoButton;
    }
  };

  const getLogoClass = () => {
    switch (logo) {
      case 'left':
        return styles.leftLogo;
      case 'right':
        return styles.rightLogo;
      default:
        return '';
    }
  };

  const renderLogo = () => {
    if (logo && (logo === 'left' || logo === 'right')) {
      return (
        <span className={`${styles.logoContainer} ${getLogoClass()} ${flex.flexRowSmolGap} ${flex.alignCenter}`}>
          {logo === 'left' && (
            <>
              <img src={logoStyle.backgroundImage.replace(/url\((['"])?(.*?)\1\)/gi, '$2')} alt="Left Logo" className={`${styles.leftLogo} ${logos.small}`}/>
              <h5 className={styles.logoText}>{children}</h5>
            </>
          )}
          {logo === 'right' && (
            <>
              <h5 className={styles.logoText}>{children}</h5>
              <img src={logoStyle.backgroundImage.replace(/url\((['"])?(.*?)\1\)/gi, '$2')} alt="Right Logo" className={`${styles.rightLogo} ${logos.small}`} />
            </>
          )}
        </span>
      );
    }
    return <h5>{children}</h5>;
  };
  

  return (
    <button
      className={`${styles.sharedButton} ${getButtonSizeClass()} ${getLogoClass()}`}
      onClick={onClick}
    >
      {renderLogo()}
    </button>
  );
};

export default ButtonWithLogo;
