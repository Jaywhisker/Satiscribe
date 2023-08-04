import React from 'react';
import logos from '../../styles/Logos.module.css';
import styles from '../../styles/LogoButton.module.css';

const LogoButton = ({ logoSize, logoStyle, onClick, disabled, disabledLogoStyle }) => {
  const getLogoSizeClass = (size) => {
    switch (size) {
      case 'small':
        return styles.smallLogo;
      case 'medium':
        return styles.mediumLogo;
      case 'large':
        return styles.largeLogo;
      default:
        return styles.mediumLogo;
    }
  };

  const renderLogo = () => {
    const logoSrc = disabled && disabledLogoStyle ? disabledLogoStyle.backgroundImage : logoStyle.backgroundImage;
    return <div className={`${styles.logo} ${getLogoSizeClass(logoSize)}`} style={{ backgroundImage: logoSrc }} />;
  };
  

  return (
    <button className={styles.iconButton} onClick={onClick} disabled={disabled}>
      {renderLogo()}
    </button>
  );
};

export default LogoButton;
