'use client'
import React, { useState } from 'react'
import style from '/styles/Navbar.module.css'
import colourstyle from '/styles/Colourtest.module.css'
import logos from '/styles/Logos.module.css'
import Sidebar from '../components/Sidebar';
import StyledComponentsRegistry from '../components/registery.tsx'
import { useRouter } from 'next/router';
import LogoButton from './buttons/LogoButton'
import flex from '/styles/Flexible.module.css'

function navbar() {

    const [sidebarShown, setSideBarShown] = useState(false)
    console.log(sidebarShown)
    const handleClick = () => {
        setSideBarShown(!sidebarShown)
        console.log('yes')
    }

    const router = useRouter();

    const handleLogout = () => {
        // Navigate to the login page (or any other route you want)
        router.push('/');
    };

    return (
        <StyledComponentsRegistry>
            <div className={style.topnav}>
                <div className={style.left_nav}>
                    <div style={{ width: '200px' }}>
                        <Sidebar
                            sidebarShown={sidebarShown}
                            onClick={handleClick}
                        />
                    </div>
                    <h3>Satiscribe</h3>
                </div>
                <div className={`${style.centralize} ${flex.flexRowSmollerGap}`}>
                    <h3>HCI</h3>
                    <LogoButton
                        logoSize="small"
                        logoStyle={{ backgroundImage: `url("/iconsPurple/Edit Page.png")` }}
                        onClick={() => alert('Icon Button (Small) clicked!')}
                    />
                </div>
                <div className={style.right_nav}>
                    <h6>Home</h6>
                    <h6>Profile</h6>
                    <h6 onClick={handleLogout} >Logout</h6>
                </div>
            </div>
        </StyledComponentsRegistry >
    )
}

export default navbar;