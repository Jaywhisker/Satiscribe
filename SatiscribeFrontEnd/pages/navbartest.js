'use client'

import React from 'react'
import style from '/styles/Navbar.module.css'
import colourstyle from '/styles/Colourtest.module.css'
import logos from '/styles/Logos.module.css'
import Sidebar from '../components/Sidebar';
import StyledComponentsRegistry from '../components/registery.tsx'

function navbar({ text }) {
    return (
        <StyledComponentsRegistry>
            <div className={style.topnav}>
                <div className={style.left_nav}>
                    <Sidebar />
                    <h3>Satiscribe</h3>
                </div>
                <div className={style.centralize}>
                    <h3>{text}</h3>
                </div>
                <div className={style.right_nav}>
                    <h6>Home</h6>
                    <h6>Profile</h6>
                    <h6>Logout</h6>
                </div>
            </div>
        </StyledComponentsRegistry>
    )
}

export default navbar;