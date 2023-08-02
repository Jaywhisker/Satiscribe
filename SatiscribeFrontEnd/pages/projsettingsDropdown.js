import React, { useState } from 'react';
import styled from 'styled-components';
import pagestyle from '../styles/projsettings.module.css';

const DropdownContainer = styled.div`
  position: relative;
  border: 4px solid var(--Final_Black);
  
  width: 30vw; /* Adjust the width to make the dropdown longer */
`;

const DropdownButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px; /* Adjust the padding to control the height of the button */
  background-color: var(--Final_Component_Dark_Grey);
  color: var(--Final_White);
  cursor: pointer;
  width: 100%; /* Make the button take the full width of the container */
  height: 100%; /* Make the button take the full height of the container */
`;

const DropdownContent = styled.div`
  display: ${({ open }) => (open ? 'block' : 'none')};
  border-top: 4px solid var(--Final_Black);
  background-color: transparent;
`;

const DropdownOption = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  background-color: ${({ active }) => (active ? 'var(--Final_Light_Purple_25)' : 'var(--Final_Light_Purple_25)')};
  color: var(--Final_White);
  cursor: pointer;
  opacity: ${({ active }) => (active ? '1' : '0.5')};
`;

function ProjSettingsDropdown({ clickable, onClick }) {
  const [dropDown, setDropDown] = useState(false);
  const [selectedOption, setSelectedOption] = useState(clickable && clickable.length > 0 ? clickable[0] : null);

  const toggleDropDown = () => {
    setDropDown((prevDropDown) => !prevDropDown);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    onClick(option);
    setDropDown(false); // Close the dropdown after selecting an option
  };

  return (
    <DropdownContainer>
      <DropdownButton onClick={toggleDropDown}>
        <div className={`${pagestyle.flexRowSmolGap}`}>
          <p style={{ color: 'rgba(255, 255, 255, 0.5)' }}>{selectedOption}</p>
        </div>
        <div className={pagestyle.smolclickable} style={{ backgroundImage: `url("/icons/Dropdown.png")`, zIndex: 1 }}></div>
      </DropdownButton>
      <DropdownContent open={dropDown}>
        {clickable &&
          clickable.map((option) => (
            <DropdownOption key={option} onClick={() => handleOptionClick(option)} active={selectedOption === option}>
              <div className={`${pagestyle.flexRowSmolGap} ${pagestyle.contentblockClickable}`}>
                <p style={{ color: 'var(--Final_White)' }}>{option}</p>
              </div>
            </DropdownOption>
          ))}
      </DropdownContent>
    </DropdownContainer>
  );
}

export default ProjSettingsDropdown;