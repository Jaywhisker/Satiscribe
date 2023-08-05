import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../styles/meetinglabel.module.css'; 

const versionStyles = {
  1: {
    display: 'flex',
    alignItems: 'center',
    alignSelf: 'stretch',
    borderRadius: '0.1875rem',
    background: 'var(--Final_Calendar_Pink, #AE6378)',
    color:'var(--Final_White)',
    padding: '1vh 2vw',
  },
  2: {
    display: 'flex',
    color:'var(--Final_Dark_Purple)',
    alignItems: 'center',
    alignSelf: 'stretch',
    borderRadius: '0.1875rem',
    background: 'var(--Final_Calendar_Skin)',
    padding: '1vh 2vw'
  },
  3: {
    display: 'flex',
    color:'var(--Final_White)',
    alignItems: 'center',
    alignSelf: 'stretch',
    borderRadius: '0.1875rem',
    background: 'var(--Final_Calendar_Green, #7A927C)',
    padding: '1vh 2vw'
  },
  4: {
    display: 'flex',
    height: '1.5rem',
    color:'var(--Final_White)',
    alignItems: 'center',
    alignSelf: 'stretch',
    borderRadius: '0.1875rem',
    background: 'var(--Final_Calendar_Purple, #79616F)',
    padding: '1vh 2vw'
  },
};

const StyledBox = ({ version, text }) => {
    const boxStyles = {
      ...versionStyles[version] || versionStyles[1], //the default is version1 aka pink
      textTransform: 'uppercase',
      cursor: 'pointer',
    };
  
    return (
      <div className={styles.styledBox} style={boxStyles}>
        {text}
      </div>
    );
  };

StyledBox.propTypes = {
  version: PropTypes.oneOf([1, 2, 3, 4]), // allow specifying which version to use
  text: PropTypes.string.isRequired,
};

export default StyledBox;
