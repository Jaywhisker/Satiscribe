import React from 'react'
import style from '@/styles/Colourtest.module.css'
import flexi from '@/styles/Flexible.module.css'
import list from '@/styles/List.module.css'
import logos from '@/styles/Logos.module.css'
import contentblock from '@/styles/components/contentblocks.module.css'


function FullTranscriptBlock() {
    return (
        <>

            <div className={`${contentblock.largeBlockContainerNoHover} ${contentblock.contentBlockAlignment}`}>
                <div className={`${flexi.innerMargin}`}>
                    <h5>Full Transcript</h5>

                    <ul className={`${list.smolGap}`}>
                        <li> <p style={{ color: `var(--Final_White)` }}>Sentence 1</p></li>
                        <li> <p style={{ color: `var(--Final_White)` }}>Sentence 2</p></li>

                    </ul>
                </div>
            </div>

            <div className={`${contentblock.largeBlockContainerNoHover} ${contentblock.contentBlockAlignment}`}>
                <div className={`${flexi.innerMargin}`}>

                    <div className={`${flexi.flexRowSmolGap} ${flexi.justifySpaceBetween}`}>
                        <h5>Full Transcript</h5>
                        <div className={logos.smallclickable} style={{ backgroundImage: `url("/icons/Edit.png")`, zIndex: 1 }}></div>
                    </div>

                    <div>
                        <ul className={`${list.smolGap}`}>
                            <li>
                                <p style={{ color: `var(--Final_White)` }}>Sentence 1</p>
                                <div className={contentblock.line}></div>
                            </li>
                            <li>
                                <p style={{ color: `var(--Final_White)` }}>Sentence 2</p>
                                <div className={contentblock.line}></div>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>



            <div className={`${contentblock.largeBlockContainerNoHover} ${contentblock.contentBlockAlignment}`}>
                <div className={`${flexi.innerMargin}`}>
                    <div className={`${flexi.flexRowSmolGap} ${flexi.justifySpaceBetween}`}>
                        <h5>Full Transcript</h5>
                        <div className={`${flexi.flexRowSmolGap}`}>
                            <div className={logos.smallclickable} style={{ backgroundImage: `url("/icons/Check.png")`, zIndex: 1 }}></div>
                            <div className={logos.smallclickable} style={{ backgroundImage: `url("/iconsRed/Cancellation.png")`, zIndex: 1 }}></div>
                        </div>
                    </div>

                    <ul className={`${list.smolGap}`}>
                        <li>
                            <input type='text' placeholder='Sentence 1'></input>
                            <div className={contentblock.line}></div>
                        </li>
                        <li>
                            <input type='text' placeholder='Sentence 2'></input>
                            <div className={contentblock.line}></div>
                        </li>
                        <li>
                            <input type='text' placeholder='Sentence 3'></input>
                            <div className={contentblock.line}></div>
                        </li>
                        <li>
                            <input type='text' placeholder='Sentence 4'></input>
                            <div className={contentblock.line}></div>
                        </li>

                    </ul>
                </div>
            </div>
        </>
    )
}

export default FullTranscriptBlock