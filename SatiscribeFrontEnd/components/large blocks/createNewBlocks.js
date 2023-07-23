import React from 'react'
import style from '../../styles/Colourtest.module.css'
import flexi from '../../styles/Flexible.module.css'
import logos from '../../styles/Logos.module.css'
import largeblockStyles from '../../styles/components/large blocks/createNewBlockStyles.module.css'
import contentblock from '../../styles/components/contentblocks.module.css'

function CreateNewBlock() {
    return (
        <>
            <div className={`${contentblock.largeBlockContainer} ${flexi.flexcolumnSmolGap} ${flexi.aligncenter}`}>
                <div className={`${flexi.flexrowSmolGap} ${flexi.aligncenter}`}>
                    <div className={logos.big} style={{ backgroundImage: `url("/icons/plus.png")`, zIndex: 1, }}></div>
                    <h2 style={{color: `var(--Final_Light_Purple)`}}> New Component</h2>
                </div>
            </div>

            <div className={`${contentblock.largeBlockContainernohover}`}>
                <div className={`${flexi.padding50vert} ${flexi.flexcolumnMediumGap}`}>
                    <div className={`${contentblock.topContainer}  ${flexi.alginstart}`}> 
                        <h5>Please Choose A Content Block</h5>
                    </div>

                    <div className={`${contentblock.bottomContainer} ${flexi.flexcolumnMediumGap}`}> 
                        <div>
                            <p style={{color: `var(--Final_White)`}}>Task Summariser and Assigner Block</p>
                            <div className={largeblockStyles.line}></div>
                        </div>
                        <div>
                            <p style={{color: `var(--Final_White)`}}>Full Transcript Block</p>
                            <div className={largeblockStyles.line}></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={contentblock.largeBlockContainernohover} style={{backgroundImage:`url(/components/thetrueoptions.png)`, backgroundSize:'cover', backgroundPosition:'center'}}>
                <div className={largeblockStyles.buttonplacement} style={{right: `calc(50% + 16.5vh)`, bottom: `calc(50% + 5.5vh)`}}></div>
                <div className={largeblockStyles.buttonplacement} style={{left: `calc(50% + 16vh)`, bottom: `calc(50% + 5.5vh)`}}></div>
                <div className={largeblockStyles.buttonplacement} style={{right: `calc(50% + 16.5vh)`, top: `calc(50% + 6vh)`}}></div>
                <div className={largeblockStyles.buttonplacement} style={{left: `calc(50% + 16vh)`, top: `calc(50% + 6vh)`}}></div>
            </div>
        </>
    )
}

export default CreateNewBlock