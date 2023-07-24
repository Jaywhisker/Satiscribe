import React from 'react'
import style from '@/styles/Colourtest.module.css'
import flexi from '@/styles/Flexible.module.css'
import logos from '@/styles/Logos.module.css'
import list from '@/styles/List.module.css'
import contentblock from '@/styles/components/contentblocks.module.css'
import largeblockStyles from '@/styles/components/large blocks/createNewBlockStyles.module.css'


function AgendaBlock() {
    return (
        <>

            <div className={`${contentblock.largeBlockContainerNoHover} ${contentblock.contentBlockAlignment}`}>
                <div className={`${flexi.innerMargin}`}>
                    <div className={`${flexi.flexRowSmolGap} ${flexi.justifyLeft}`}>
                        <h5>Agenda</h5>
                        <div className={logos.small} style={{ backgroundImage: `url("/icons/LinkPurple.png")`, zIndex: 1 }}></div>
                        <h5  style={{ color: `var(--Final_Light_Purple_50)` }}>Task Summariser & Assigner</h5>
                    </div>

                    <ul className={`${list.mediumgap}`}>
                        <li> <p style={{ color: `var(--Final_White)` }}>Agenda 1</p></li>
                        <li> <p style={{ color: `var(--Final_White)` }}>Agenda 2</p></li>
                        <li> <p style={{ color: `var(--Final_White)` }}>Agenda 3</p></li>

                    </ul>
                </div>
            </div>

            <div className={`${contentblock.largeBlockContainerNoHover} ${contentblock.contentBlockAlignment}`}>
                <div className={`${flexi.innerMargin}`}>

                    <div className={`${flexi.flexRowSmolGap} ${flexi.justifySpaceBetween}`}>
                        <h5>Agenda</h5>
                        <div className={logos.smallclickable} style={{ backgroundImage: `url("/icons/Edit.png")`, zIndex: 1 }}></div>
                    </div>

                    <div>
                        <ul className={`${list.mediumgap}`}>
                            <li>
                                <p style={{ color: `var(--Final_White)` }}>Agenda 1</p>
                                <div className={contentblock.line}></div>
                            </li>

                            <li>
                                <p style={{ color: `var(--Final_White)` }}>Agenda 2</p>
                                <div className={contentblock.line}></div>
                            </li>

                            <li>
                                <p style={{ color: `var(--Final_White)` }}>Agenda 3</p>
                                <div className={contentblock.line}></div>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>



            <div className={`${contentblock.largeBlockContainerNoHover} ${contentblock.contentBlockAlignment}`}>
                <div className={`${flexi.innerMargin}`}>
                    <div className={`${flexi.flexRowSmolGap} ${flexi.justifySpaceBetween}`}>
                        <h5>Agenda</h5>
                        <div className={`${flexi.flexRowSmolGap}`}>
                            <div className={logos.smallclickable} style={{ backgroundImage: `url("/icons/Check.png")`, zIndex: 1 }}></div>
                            <div className={logos.smallclickable} style={{ backgroundImage: `url("/icons/Cancellation.png")`, zIndex: 1 }}></div>
                        </div>
                    </div>

                    <ul className={`${list.mediumgap}`}>
                        <li>
                            <div className={`${flexi.flexRowSmolGap} ${flexi.justifyStart} ${flexi.alignEnd}`}>
                                <div className={`${flexi.flexColumnNoGap}`} style={{width:'100%'}} >
                                    <input type='text' placeholder='Agenda 1'></input>
                                    <div className={contentblock.line}></div>
                                </div>
                                <div className={logos.smallclickable} style={{ backgroundImage: `url("/icons/Trash.png")`, zIndex: 1 }}></div>
                            </div>
                        </li>

                        <li>
                            <div className={`${flexi.flexRowSmolGap} ${flexi.justifyStart} ${flexi.alignEnd}`}>
                                <div className={`${flexi.flexColumnNoGap}`} style={{width:'100%'}} >
                                    <input type='text' placeholder='Agenda 2'></input>
                                    <div className={contentblock.line}></div>
                                </div>
                                <div className={logos.smallclickable} style={{ backgroundImage: `url("/icons/Trash.png")`, zIndex: 1 }}></div>
                            </div>
                        </li>

                        <li>
                            <div className={`${flexi.flexRowSmolGap} ${flexi.justifyStart} ${flexi.alignEnd}`}>
                                <div className={`${flexi.flexColumnNoGap}`} style={{width:'100%'}} >
                                    <input type='text' placeholder='Agenda 3'></input>
                                    <div className={contentblock.line}></div>
                                </div>
                                <div className={logos.smallclickable} style={{ backgroundImage: `url("/icons/Trash.png")`, zIndex: 1 }}></div>
                            </div>
                        </li>
                    </ul>
                    
                    <div className={`${contentblock.largeBlockButton} ${flexi.justifyCenter} ${flexi.flexRowSmolGap}`}>
                        <div className={logos.small} style={{ backgroundImage: `url("/icons/plusPurple.png")`, zIndex: 1, }}></div>
                        <p>Add Agenda</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AgendaBlock