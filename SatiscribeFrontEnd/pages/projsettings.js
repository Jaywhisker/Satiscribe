import React, { useState } from 'react';
import Navbar from './navbartest';
import Tasklist from '../components/tasklist';
import styled from 'styled-components'; // You don't need this import
import { Button } from '../components';
import pagestyle from '../styles/projsettings.module.css';
import ProjSettingsDropdown from './projsettingsDropdown';
import EmailDropdown from './EmailDropdown';

const Container = styled.div`
  position: relative;
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

const EmailDropdownWrapper = styled.div`
  width: 30vw; // Set the width you want
  position: absolute; // Position it absolutely within its container
  top: 100px; // Push it down from the top of the container
`;

const TextInputWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-top: 8vw;
`;

const TextInput = styled.input`
  background-color: transparent;
  border: none;
  padding: 2px;
  width: 100%;
`;

const Line = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: var(--Final_White); /* Replace --Final_White with your desired line color variable */
  border-radius: 10px; /* Adjust the value to control the roundness */
`;

const VisibilityContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 20px;
`;

const VisibilityHeading = styled.h4`
  margin: 0;
  margin-top: 60px
  color: var(--Final_White); /* Replace --Final_White with your desired text color variable */
`;

function ProjSettingsPage() {
  const [selectedOption, setSelectedOption] = useState('Private');
  const [linkCopied, setLinkCopied] = useState(false);
  const initialEmails = ['hubob@gmail.com', 'morgan@gmail.com', 'derrick@gmail.com', 'jefferson@gmail.com'];
  const [dataset, setDataset] = useState(
    initialEmails.reduce((acc, email) => {
      acc[email] = false;
      return acc;
    }, {})
  );

  const handleDropdownSelect = (option) => {
    setSelectedOption(option);
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleEmailSelect = (email) => {
    setDataset((prevDataset) => ({
      ...prevDataset,
      [email]: !prevDataset[email],
    }));
    setIsOpen(true);
  };

  const handleCopyLink = () => {
    setLinkCopied(true);
  };
  return (
    <Container>
      <Navbar text="HCI" />
      <div className={pagestyle.parentContainer}>
        <div className={pagestyle.centeredContainer}>
          <TextInputWrapper>
            <TextInput type="text" placeholder="Project Name" />
            <Line />
          </TextInputWrapper>
        </div>
      </div>
      <div className={pagestyle.mainbodyContainerNoHover}>
        <div className={pagestyle.centeredContainer}>
          <EmailDropdownWrapper>
            <EmailDropdown
              
              clickable={true}
              dataset={dataset}
              onClick={handleEmailSelect}
              isOpen={isOpen}
              setIsOpen={setIsOpen} />
          </EmailDropdownWrapper>
        </div>
      </div>
      <div className={pagestyle.parentContainer}>
        <div className={pagestyle.centeredContainer}>
          <VisibilityContainer>
            <VisibilityHeading>Visibility</VisibilityHeading>
            <ProjSettingsDropdown clickable={["Private", "Public"]} onClick={handleDropdownSelect} />
          </VisibilityContainer>
        </div>
      </div>
      <div className={pagestyle.parentContainer}>
        <div className={pagestyle.centeredContainer}>
          {linkCopied ? (
            <Button
              size="small"
              logo="left"
              fill={true}
              logoStyle={{ backgroundImage: `url("/icons/Link.png")`, zIndex: 1 }}
              onClick={() => alert('Link Already Copied!')}
            >
              Link Copied
            </Button>
          ) : (
            <Button
              size="medium"
              logo="left"
              logoStyle={{ backgroundImage: `url("/icons/Link.png")`, zIndex: 1 }}
              onClick={handleCopyLink}
            >
              Copy Link
            </Button>
          )}
        </div>
      </div>
      <div className={pagestyle.parentContainer}>
        <div className={pagestyle.aligntext}>
          <Button
            size="small"
            logo="left"
            fill={true}
            logoStyle={{ backgroundImage: `url("/icons/Save.png")`, zIndex: 1 }}
            onClick={() => alert('Border Button (Smol) with left logo clicked!')}
          >
            Save
          </Button>
        </div>
        <div className={pagestyle.alignButton2}>
          <Button
            size="small"
            logo="left"
            logoStyle={{ backgroundImage: `url("/icons/file folder approved-2.png")`, zIndex: 1 }}
            onClick={() => alert('Border Button (Smol) with left logo clicked!')}
          >
            Archive Projects
          </Button>
        </div>
      </div>
    </Container >
  );
}

export default ProjSettingsPage;
