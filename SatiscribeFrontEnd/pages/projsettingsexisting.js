import React, { useState } from 'react';
import navstyle from '/styles/Navbar.module.css'
import Tasklist from '../components/tasklist';
import Sidebar from '../components/Sidebar';
import styled from 'styled-components';
import { Button } from '../components';
import pagestyle from '../styles/projsettings.module.css';
import ProjSettingsDropdown from '@/components/projsettingsDropdown';
import EmailDropdown from '@/components/EmailDropdown';

const Container = styled.div`
  position: relative;
  padding: 0px;
  display: flex;
  flex-direction: column;
`;

const emailIconMap = {
  'hubob@gmail.com': '/profiles/Profile Pict (Cream).png',
  'morgan@gmail.com': '/profiles/Profile Pict (Pink).png',
  'derrick@gmail.com': '/profiles/Profile Pict (Purple).png',
  'jefferson@gmail.com': '/profiles/Profile Pict (Yellow).png',
  // add more mappings as needed
};

const EmailDropdownWrapper = styled.div`
  width: 30vw;
  position: absolute;
  top: 5vw;
`;

const TextInputWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-top: 5vw;
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
  background-color: var(--Final_White);
  border-radius: 10px;
`;

const VisibilityContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 20px;
`;

const VisibilityHeading = styled.h4`
  margin: 0;
  margin-top: 60px;
  color: var(--Final_Light_Purple);
`;

function ProjSettingsPageNew() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [linkCopied, setLinkCopied] = useState(false);
  const initialEmails = ['hubob@gmail.com', 'morgan@gmail.com', 'derrick@gmail.com', 'jefferson@gmail.com'];
  const [dataset, setDataset] = useState(
    initialEmails.reduce((acc, email) => {
      acc[email] = false;
      return acc;
    }, {})
  );
  const [isDropdownSelected, setIsDropdownSelected] = useState(false);
  const [isPublic, setIsPublic] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdownSelect = (option) => {
    setSelectedOption(option);
    if (option === 'Private' || option === 'Public') {
      setIsDropdownSelected(true);
    }
    if (option === 'Public') {
      setIsPublic(true);
    } else {
      setIsPublic(false);
      setLinkCopied(false);
    }
  };

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

  const [sidebarShown, setSideBarShown] = useState(false)
    console.log(sidebarShown)
    const handleClick = () => {
        setSideBarShown(!sidebarShown)
        console.log('yes')
    }

  return (
    <Container>
      <div className={navstyle.topnav}>
        <div className={navstyle.left_nav}>
          <div style={{ width: '200px' }}>
            <Sidebar
              sidebarShown={sidebarShown}
              onClick={handleClick}
            />
          </div>
          <h3>Satiscribe</h3>
        </div>
        <div className={navstyle.centralize}>
          <h3>HCI</h3>
        </div>
        <div className={navstyle.right_nav}>
          <h6>Home</h6>
          <h6>Profile</h6>
          <h6>Logout</h6>
        </div>
      </div>
      <div className={pagestyle.centeredContainer}>
        <h4 className={pagestyle.centeredText}>
          Client Template
        </h4>
      </div>
      <div className={pagestyle.ParentContainer}>
        <div className={pagestyle.CenteredContainer}>
          <TextInputWrapper>
            <TextInput type="text" placeholder="HCI" />
            <Line />
          </TextInputWrapper>
        </div>
      </div>
      <div className={pagestyle.MainbodyContainerNoHover}>
        <div className={pagestyle.CenteredContainer}>
          <EmailDropdownWrapper>
            <EmailDropdown
              clickable={true}
              dataset={dataset}
              onClick={handleEmailSelect}
              isOpen={isOpen}
              emailIconMap={emailIconMap}
              setIsOpen={setIsOpen} />
          </EmailDropdownWrapper>
        </div>
      </div>
      <div className={pagestyle.ParentContainer}>
        <div className={pagestyle.CenteredContainer}>
          <VisibilityContainer>
            <VisibilityHeading>Visibility</VisibilityHeading>
            <ProjSettingsDropdown clickable={["Private", "Public"]} onClick={handleDropdownSelect} />
          </VisibilityContainer>
        </div>
      </div>
      <div className={pagestyle.ParentContainer}>
        <div className={pagestyle.CenteredContainer}>
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
          ) : isPublic ? (
            <Button
              size="medium"
              logo="left"
              logoStyle={{ backgroundImage: `url("/icons/Link.png")`, zIndex: 1 }}
              onClick={handleCopyLink}
            >
              Copy Link
            </Button>
          ) : (
            <Button
              size="medium"
              logo="left"
              fill={true}
              disabled={true}
              logoStyle={{ backgroundImage: `url("/icons/Link.png")`, zIndex: 1 }}
              disabledLogoStyle={{ backgroundImage: `url("/iconsGrey/Link.png")`, zIndex: 1 }}
              onClick={() => alert('Filled Button (Large) with Right logo clicked!')}
            >
              Copy Link
            </Button>
          )}
        </div>
      </div>
      <div className={pagestyle.ParentContainer}>
        <div className={pagestyle.Aligncenter}>
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
        <div className={pagestyle.AlignButton2}>
          <Button
            size="small"
            logo="left"
            logoStyle={{ backgroundImage: `url("/iconsPurple/file folder approved-2.png")`, zIndex: 1 }}
            onClick={() => alert('Border Button (Smol) with left logo clicked!')}
          >
            Archive Projects
          </Button>
        </div>
      </div>
    </Container>
  );
}

export default ProjSettingsPageNew;
