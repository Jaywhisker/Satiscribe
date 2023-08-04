import React, { useState } from 'react';
import styles from '../../styles/customPaginationStyles.module.css';

const CustomDropdown = ({ options, selectedOptions, handleOptionSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOption = (option) => {
    handleOptionSelect(option);
  };

  const handleToggleDropdown = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  

  return (
    <div className={styles.customdropdown}>
      <div className={styles.dropdownHeader} onClick={handleToggleDropdown}>
        {selectedOptions.length === 0 ? 'Select Members' : selectedOptions.join(', ')}
        <span className={`${styles.dropdownArrow} ${isOpen ? styles.open : ''}`}>&#9660;</span>
      </div>
      {isOpen && (
        <div className={styles.dropdownOptions}>
          {options.map((option) => (
            <label key={option}>
              <input
                type="checkbox"
                checked={selectedOptions.includes(option)}
                onChange={() => toggleOption(option)}
              />
              {option}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
