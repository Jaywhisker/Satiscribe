import React from 'react'
import style from '@/styles/Colourtest.module.css'
import flexi from '@/styles/Flexible.module.css'
import list from '@/styles/List.module.css'
import logos from '@/styles/Logos.module.css'
import contentblock from '@/styles/components/contentblocks.module.css'
import VettingSentence from './InputFields/transcriptVettingField'

function VettingBlock() {

    return (
        <>
            <div className={`${contentblock.largeBlockContainerNoHover} ${contentblock.contentBlockAlignment}`}>
                <div className={`${flexi.innerMargin}`}>
                    <div className={`${flexi.flexRowSmolGap} ${flexi.justifySpaceBetween}`}>
                        <h5>Full Vetting</h5>
                        <label className={`${contentblock.switch}`}>
                            <input type="checkbox" />
                            <span className={`${contentblock.roundslider}`}></span>
                        </label>
                    </div>
                    <VettingSentence text={'yesnt'} placeholder={'yes'}></VettingSentence>
                </div>
            </div>
        </>
    )
}

export default VettingBlock