import React from 'react'
import logos from '../styles/Logos.module.css'
import flexi from '../styles/Flexible.module.css'


export default function index() {
    return (
        <div>
            <div>
                <h1>Haro this is the display of the logosheet</h1>
            </div>

            <h2>Flexible module css: display layouts</h2>

            <p>This uses the flexrow found in Flexible.module.css, the gap can be controlled from global.css</p>
            <div className={flexi.flexrow}>
                <div className={logos.small} style={{ backgroundImage=`url()` }}></div>
                <div className={logos.smallCancel}></div>
                <div className={logos.bigCancel}></div>
            </div>

            <p>This uses the flexcolumn found in Flexible.module.css, the gap can be controlled from global.css</p>
            <div className={flexi.flexcolumn}>
                <div className={logos.smallCancel}></div>
                <div className={logos.smallCancel}></div>
                <div className={logos.bigCancel}></div>
            </div>

            <h2>Icons</h2>
            <p>Lmao they are so pixalated</p>

            <div className={flexi.flexrow}>
                <div className={logos.smallCancel}></div>
                <div className={logos.smallBack}></div>
                <div className={logos.smallAlignleft}></div>
                <div className={logos.smallCaution}></div>
                <div className={logos.smallCheck}></div>
                <div className={logos.smallDropdown}></div>
                <div className={logos.smallEdit}></div>
                <div className={logos.smallFile}></div>
                <div className={logos.smallFilter}></div>
                <div className={logos.smallHamburger}></div>
                <div className={logos.smallHome}></div>
                <div className={logos.smallInfo}></div>
                <div className={logos.smallLink}></div>
                <div className={logos.smallLogout}></div>
                <div className={logos.smallMaps}></div>
                <div className={logos.smallPlus}></div>
                <div className={logos.smallProfile}></div>
                <div className={logos.smallSave}></div>
                <div className={logos.smallSearch}></div>
                <div className={logos.smallSort}></div>
                <div className={logos.smallStart}></div>
                <div className={logos.smallTrash}></div>
                <div className={logos.smallComment}></div>
                <div className={logos.smallEditpage}></div>
                <div className={logos.smallReplace}></div>
            </div>
            <div className={flexi.flexrow}>
                <div className={logos.bigCancel}></div>
                <div className={logos.bigBack}></div>
                <div className={logos.bigAlignleft}></div>
                <div className={logos.bigCaution}></div>
                <div className={logos.bigCheck}></div>
                <div className={logos.bigDropdown}></div>
                <div className={logos.bigEdit}></div>
                <div className={logos.bigFile}></div>
                <div className={logos.bigFilter}></div>
                <div className={logos.bigHamburger}></div>
                <div className={logos.bigHome}></div>
                <div className={logos.bigInfo}></div>
                <div className={logos.bigLink}></div>
            </div>
            <div className={flexi.flexrow}>
                <div className={logos.bigLogout}></div>
                <div className={logos.bigMaps}></div>
                <div className={logos.bigPlus}></div>
                <div className={logos.bigProfile}></div>
                <div className={logos.bigSave}></div>
                <div className={logos.bigSearch}></div>
                <div className={logos.bigSort}></div>
                <div className={logos.bigStart}></div>
                <div className={logos.bigTrash}></div>
                <div className={logos.bigComment}></div>
                <div className={logos.bigEditpage}></div>
                <div className={logos.bigReplace}></div>
            </div>
        </div>
    )
}

