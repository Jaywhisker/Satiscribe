import { useState } from 'react';
import styled from 'styled-components';
import { AiOutlineMenu } from 'react-icons/ai';
import logos from '/styles/Logos.module.css'
// import { Button, ButtonWithLogo } from '../components';
import styles from '/styles/sidebar.module.css';
import projectData from '../json/project_test';
import { useRouter } from 'next/router';


const SidebarStyled = styled.div`
display: ${props => props.$isOpen ? 'block' : 'none'};
width: ${props => props.$isOpen ? '13vw' : '0'};
position: fixed;
top: 87px;  // Adjust this value to shift the sidebar down
height: calc(99% - 10px);  // Adjust the height to keep the sidebar within the viewport
background-color: #333;
color: #fff;
transition: 0.3s;
overflow-x: hidden;
`;

const SidebarItemStyled = styled.div`
display: ${props => props.$isOpen ? 'block' : 'none'};
padding: 10px 0;
cursor: pointer;
opacity: ${props => props.$isOpen ? '1' : '0'};
transition: opacity 0.3s;
height: calc(100% - 87px); /* Adjust the height to leave space for the top bar (87px in this example) */
overflow-y: auto; /* Enable vertical scrolling when content overflows */
&:hover {
    background-color: #555;
}
`;

// const HamburgerButton = styled(AiOutlineMenu)`
//     font-size: 2em;
//     cursor: pointer;
// `;




  
const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const router = useRouter();

    const handleSidebarItemClick = (projectName) => {
      // Perform the action you want when an item is clicked, for example, navigate to a new page
      router.push('/projectDashboard');
    };
    
  
    
    return (
        <div>
            <button className={logos.small} style={{ backgroundImage: `url("/icons/PurpleHamburger.png")`, backgroundColor: 'transparent', zIndex: 1, border: 'none',   marginLeft: '20px'}} onClick={() => setIsOpen(!isOpen)} />
            <SidebarStyled $isOpen={isOpen}>
                {/* <Button size="small" onClick={() => alert('Small button clicked!')}>
                    Small Button
                </Button>
                <Button size="small" onClick={() => alert('Small button clicked!')}>
                    Small Button
                </Button>
                <Button size="small" onClick={() => alert('Small button clicked!')}>
                    Small Button
                </Button> */}
                <h6 className={styles.projectcontainer} > Create New</h6>
                <h6 className={styles.projectcontainer} onClick={() => handleSidebarItemClick('HCI')} > HCI </h6>
                {/* <h6 className={styles.projectcontainer}> Project Name</h6>
                <h6 className={styles.projectcontainer}> Project Name</h6>
                <h6 className={styles.projectcontainer}> Project Name</h6> */}
            </SidebarStyled>
        </div>
    );
  };
  
  export default Sidebar;