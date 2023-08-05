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
  color: ${({ $active }) => ($active ? 'var(--Final_White)' : 'rgba(255, 255, 255, 0.5)')};
  cursor: pointer;
  width: 100%; /* Make the button take the full width of the container */
  height: 100%; /* Make the button take the full height of the container */
`;

const DropdownContent = styled.div`
  display: ${({ open }) => (open ? 'block' : 'none')};
  border-top: 0px solid var(--Final_Black);
  background-color: transparent;
  width: 31.5vw;
`;

const DropdownOption = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  background-color: ${({ $active }) => ($active ? 'var(--Final_Light_Purple_25)' : 'var(--Final_Light_Purple_25)')};
  color: ${({ $active, open }) => ($active && !open ? 'rgba(255, 255, 255, 0.5)' : 'var(--Final_White)')};
  cursor: pointer;
`;

function ProjSettingsDropdown({ clickable, onClick }) {
  const [dropDown, setDropDown] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [defaultOption] = useState(clickable && clickable.length > 0 ? clickable[0] : null);

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
      <DropdownButton $active={selectedOption ? true : false} onClick={toggleDropDown}>
        <div className={`${pagestyle.flexRowSmolGap}`}>
          <p style={{ color: 'inherit' }}>{selectedOption || defaultOption}</p>
        </div>
        <div className={pagestyle.smolclickable} style={{ backgroundImage: `url("/icons/Dropdown.png")`, zIndex: 1 }}></div>
      </DropdownButton>
      <DropdownContent open={dropDown}>
        {clickable &&
          clickable.map((option) => (
            <DropdownOption key={option} onClick={() => handleOptionClick(option)} $active={selectedOption === option ? true : false} open={dropDown}>
              <div className={`${pagestyle.flexRowSmolGap} ${pagestyle.contentblockClickable}`}>
                <p style={{ color: 'inherit' }}>{option}</p>
              </div>
            </DropdownOption>
          ))}
      </DropdownContent>
    </DropdownContainer>
  );
}

export default ProjSettingsDropdown;