import React from 'react'
import style from '/styles/Navbar.module.css'
import colourstyle from '/styles/Colourtest.module.css'
import logos from '/styles/Logos.module.css'

function navbar() {
    return (
        <div className={style.topnav}>
            <div className={style.left_nav}>
                <div className={logos.small} style={{ backgroundImage: `url("/icons/Hamburger.png")`, zIndex: 1 }}></div>

                <div>
                    <h3 href="#" >Satiscribe</h3>
                </div>
            </div>
            <div className={style.centralize}>
                <h2 href="#" >Project Name</h2>
            </div>
            <div className={style.right_nav}>

                <div>
                    <p href="#" >Home</p>
                </div>
                <div>
                    <p href="#" >Profile</p>
                </div>
                <div>
                    <p href="#" >Logout</p>
                </div>
            </div>



        </div>

    )
}

export default navbar