import React from 'react'
import styles from '../styles/Logos.module.css'
import flexi from '../styles/Flexible.module.css'


export default function index() {
    return (
        <div>
            <div>
                <h1>Haro this is the display of the stylesheet</h1>
            </div>

            <h2>Flexible module css: display layouts</h2>

            <p>This uses the flexrow found in Flexible.module.css, the gap can be controlled from global.css</p>
            <div className={flexi.flexrow}>
                <div className={styles.smallCancel}></div>
                <div className={styles.smallCancel}></div>
                <div className={styles.bigCancel}></div>
            </div>

            <p>This uses the flexcolumn found in Flexible.module.css, the gap can be controlled from global.css</p>
            <div className={flexi.flexcolumn}>
                <div className={styles.smallCancel}></div>
                <div className={styles.smallCancel}></div>
                <div className={styles.bigCancel}></div>
            </div>

            <h2>Icons</h2>
            <p>Lmao they are so pixalated</p>

            <div className={flexi.flexrow}>
                <div className={styles.smallCancel}></div>
                <div className={styles.smallBack}></div>
                <div className={styles.smallAlignleft}></div>
                <div className={styles.smallCaution}></div>
                <div className={styles.smallCheck}></div>
                <div className={styles.smallDropdown}></div>
                <div className={styles.smallEdit}></div>
                <div className={styles.smallFile}></div>
                <div className={styles.smallFilter}></div>
                <div className={styles.smallHamburger}></div>
                <div className={styles.smallHome}></div>
                <div className={styles.smallInfo}></div>
                <div className={styles.smallLink}></div>
                <div className={styles.smallLogout}></div>
                <div className={styles.smallMaps}></div>
                <div className={styles.smallPlus}></div>
                <div className={styles.smallProfile}></div>
                <div className={styles.smallSave}></div>
                <div className={styles.smallSearch}></div>
                <div className={styles.smallSettings}></div>
                <div className={styles.smallSort}></div>
                <div className={styles.smallStart}></div>
                <div className={styles.smallTrash}></div>
            </div>
            <div className={flexi.flexrow}>
                <div className={styles.bigCancel}></div>
                <div className={styles.bigBack}></div>
                <div className={styles.bigAlignleft}></div>
                <div className={styles.bigCaution}></div>
                <div className={styles.bigCheck}></div>
                <div className={styles.bigDropdown}></div>
                <div className={styles.bigEdit}></div>
                <div className={styles.bigFile}></div>
                <div className={styles.bigFilter}></div>
                <div className={styles.bigHamburger}></div>
                <div className={styles.bigHome}></div>
                <div className={styles.bigInfo}></div>
                <div className={styles.bigLink}></div>
                <div className={styles.bigLogout}></div>
                <div className={styles.bigMaps}></div>
                <div className={styles.bigPlus}></div>
                <div className={styles.bigProfile}></div>
                <div className={styles.bigSave}></div>
                <div className={styles.bigSearch}></div>
                <div className={styles.bigSettings}></div>
                <div className={styles.bigSort}></div>
                <div className={styles.bigStart}></div>
                <div className={styles.bigTrash}></div>
            </div>
        </div>
    )
}

