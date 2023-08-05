import React from 'react';
import logos from '../../styles/Logos.module.css'
import styles from '../../styles/buttons.module.css';
import flex from '../../styles/Flexible.module.css'

const Button = ({ size, logo, fill, logoStyle, disabledLogoStyle, onClick, children, disabled}) => {
  const getButtonSizeClass = () => {
    switch (size) {
      // case 'smallest':
      //   return styles.smallestButton;
      case 'small':
        return styles.smallButton;
      case 'smallmedium':
        return styles.smallmediumButton;
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
      default:
        return '';
    }
  };

  const renderLogo = () => {
    if (logo && (logo === 'left' || logo === 'right')) {
      const logoClasses = `${styles.logoContainer} ${getLogoClass()} ${flex.flexRowSmolGap} ${flex.alignCenter}`;
      const textClasses = `${fill ? styles.fillLogoText : ''} ${disabled ? styles.disabledText : ''}`;
      const logoSrc = disabled && disabledLogoStyle ? disabledLogoStyle.backgroundImage.replace(/url\((['"])?(.*?)\1\)/gi, '$2') : logoStyle.backgroundImage.replace(/url\((['"])?(.*?)\1\)/gi, '$2');
      return (
        <span className={logoClasses}>
          {logo === 'left' && (
            <>
              <img src={logoSrc} alt="Left Logo" className={`${styles.leftLogo} ${logos.medium}`}/>
              <h5 className={textClasses}>{children}</h5>
            </>
          )}
          {logo === 'right' && (
            <>
              <h5 className={textClasses}>{children}</h5>
              <img src={logoSrc} alt="Right Logo" className={`${styles.rightLogo} ${logos.medium}`} />
            </>
          )}
        </span>
      );
    }
    const textClasses = `${fill ? styles.fillLogoText : ''} ${disabled ? styles.disabledText : ''}`;
    return <h5 className={textClasses}>{children}</h5>;
  };
  

  return (
    <button
      className={`${styles.sharedButton} ${getButtonSizeClass()} ${getLogoClass()} ${fill ? styles.fillButton : ''} ${disabled ? styles.disabledButton : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      {renderLogo()}
    </button>
  );
};

export default Button;
