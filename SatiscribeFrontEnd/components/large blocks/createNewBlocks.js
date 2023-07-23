import React from 'react'
import style from '../../styles/Colourtest.module.css'
import flexi from '../../styles/Flexible.module.css'
import logos from '../../styles/Logos.module.css'
import largeblockStyles from '../../styles/components/large blocks/createNewBlockStyles.module.css'

function CreateNewBlock() {
    return (
        <>
            <div className={`${largeblockStyles.largeBlockContainer} ${flexi.flexcolumn} ${flexi.aligncenter}`}>
                <div className={`${flexi.flexrow} ${flexi.aligncenter}`}>
                    <div className={logos.big} style={{ backgroundImage: `url("/icons/plus.png")`, zIndex: 1, }}></div>
                    <h2 style={{color: `var(--Final_Light_Purple)`}}> New Component</h2>
                </div>
            </div>

            <div className={`${largeblockStyles.largeBlockContainer} ${flexi.flexcolumn} ${flexi.alignSpaceevenly}`}>
                <div className={largeblockStyles.topContainer}> 
                    <h5>Please Choose A Content Block</h5>
                </div>

                <div className={largeblockStyles.bottomContainer}> 
                    <p style={{color: `var(--Final_White)`}}>Task Summariser and Assigner Block</p>
                    <div className={largeblockStyles.line}></div>

                    <p style={{color: `var(--Final_White)`}}>Full Transcript</p>
                    <div className={largeblockStyles.line}></div>
                </div>
            </div>

            <div className={largeblockStyles.largeBlockContainernohover} style={{backgroundImage:`url(/components/thetrueoptions.png)`, backgroundSize:'cover', backgroundPosition:'center'}}>
                <div className={largeblockStyles.buttonplacement}></div>
            </div>
        </>
    )
}

export default CreateNewBlock