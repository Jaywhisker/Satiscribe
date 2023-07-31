import React from 'react'
import navstyle from '/styles/Navbar.module.css'
import pagestyle from '/styles/newmeeting.module.css'
import { Button } from '../components';
import colourstyle from '/styles/Colourtest.module.css'
import logos from '/styles/Logos.module.css'
import Sidebar from '../components/Sidebar';

function newmeeting() {
    return (
        <div >
            <div className={navstyle.topnav}>
                <div className={navstyle.left_nav}>
                    <div style={{ width: '200px' }}> 
                        <Sidebar />
                    </div>
                    <h3>Satiscribe</h3>
                </div>
                <div className={navstyle.centralize}>
                    <h3>Project Name</h3>
                </div>
                <div className={navstyle.right_nav}>
                    <h6>Home</h6>
                    <h6>Profile</h6>
                    <h6>Logout</h6>
                </div>
            </div>
            <div className={pagestyle.centeredContainer}>
                <h4 className={pagestyle.centeredText}>
                    Template
                </h4>
            </div>
            <div className={pagestyle.parentContainer}>
                <div className={pagestyle.alignButton}>
                    <Button
                        size="small"
                        logo="left"
                        logoStyle={{ backgroundImage: `url("/icons/Save.png")`, zIndex: 1 }}
                        onClick={() => alert('Border Button (Smol) with left logo clicked!')}
                    >
                        Edit Template
                    </Button>
                    <Button
                        size="small"
                        logo="left"
                        fill={true}
                        logoStyle={{ backgroundImage: `url("/icons/Cancellation.png")`, zIndex: 1 }} // Change this to the URL of your right logo
                        onClick={() => alert('Filled Button (small) with Right logo clicked!')}
                    >
                        Small Fill Left
                    </Button>

                </div>
            </div>

            <div className={pagestyle.centerContainer} style={{ marginBottom: '5vh' }}>
                <div className={pagestyle.alignBlock}>
                    <img className={pagestyle.blockMargin} src="/Blocks/Attendance Block.png" />
                    <img src="/Blocks/Keydates Block.png" />
                </div>
            </div>
            <div className={pagestyle.centerContainer} style={{ marginBottom: '5vh' }}>
                <div className={pagestyle.alignBlock}>
                    <img className={pagestyle.blockMargin} src="/Blocks/Meeting Details Block.png" />
                    <img src="/Blocks/Link Block.png" />
                </div>
            </div>
            <div className={pagestyle.centerContainer} style={{ marginBottom: '5vh' }}>
                <div className={pagestyle.alignBlock}>
                    <img className={pagestyle.blockMargin} src="/Blocks/Question Block.png" />
                    <img src="/Blocks/Feedback Blocks.png" />
                </div>
            </div>
            <div className={pagestyle.centerContainer} style={{ marginBottom: '5vh' }}>
                <div className={pagestyle.alignBlock}>
                    <img className={pagestyle.blockMargin} src="/Blocks/Poll Block.png" />
                    <img src="/Blocks/Budgeting Block.png" />
                </div>
            </div>
        </div>


    )
}

export default newmeeting