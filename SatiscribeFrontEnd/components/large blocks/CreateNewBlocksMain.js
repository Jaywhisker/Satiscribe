import React from 'react'
import style from '@/styles/Colourtest.module.css'
import flexi from '@/styles/Flexible.module.css'
import logos from '@/styles/Logos.module.css'
import list from '@/styles/List.module.css'
import largeblockStyles from '@/styles/components/large blocks/createNewBlockStyles.module.css'
import contentblock from '@/styles/components/contentblocks.module.css'

function CreateNewBlock() {
    return (
        <>
            <div className={`${contentblock.largeBlockContainer} ${flexi.flexColumnSmolGap} ${flexi.justifyCenter}`}>
                <div className={`${flexi.innerMargin}`}>
                    <div className={`${flexi.flexRowSmolGap} ${flexi.justifyCenter}`}>
                        <div className={logos.big} style={{ backgroundImage: `url("/iconsPurple/plus.png")`, zIndex: 1, }}></div>
                        <h2 style={{ color: `var(--Final_Light_Purple)` }}> New Component</h2>
                    </div>
                </div>
            </div>

            <div className={`${contentblock.largeBlockContainerNoHover}`}>
                <div className={`${flexi.innerMargin}`}>

                        <h5>Please Choose A Content Block</h5>

                        <div>
                            <ul className={`${list.mediumGapnobullet}`}>
                                <li>
                                    <p style={{ color: `var(--Final_White)` }}>Task Summariser and Assigner Block</p>
                                    <div className={contentblock.line}></div>
                                </li>

                                <li>
                                    <p style={{ color: `var(--Final_White)` }}>Full Transcript Block</p>
                                    <div className={contentblock.line}></div>
                                </li>
                            </ul>
                        </div>
                </div>
            </div>

            <div className={`${contentblock.largeBlockContainerNoHover}`} style={{ backgroundImage: `url(/components/thetrueoptions.png)`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className={largeblockStyles.buttonPlacement} style={{ right: `calc(50% + 16vh)`, bottom: `calc(50% + 5vh)` }}></div>
                <div className={largeblockStyles.buttonPlacement} style={{ left: `calc(50% + 16vh)`, bottom: `calc(50% + 5vh)` }}></div>
                <div className={largeblockStyles.buttonPlacement} style={{ right: `calc(50% + 16vh)`, top: `calc(50% + 6vh)` }}></div>
                <div className={largeblockStyles.buttonPlacement} style={{ left: `calc(50% + 16vh)`, top: `calc(50% + 6vh)` }}></div>
            </div>
        </>
    )
}

export default CreateNewBlock