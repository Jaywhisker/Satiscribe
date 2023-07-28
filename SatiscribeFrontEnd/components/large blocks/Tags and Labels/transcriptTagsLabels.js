import React from 'react'
import style from '@/styles/Colourtest.module.css'
import flexi from '@/styles/Flexible.module.css'
import list from '@/styles/List.module.css'
import logos from '@/styles/Logos.module.css'
import contentblock from '@/styles/components/contentblocks.module.css'
import tags from '@/styles/components/large blocks/tags.module.css'

function TranscriptTags({type, name}) {
    return (
        <>
        { (type == 'tags' && name =='highlight') ? (
            <div className={`${tags.highlightTags} ${flexi.flexRowNoGap} ${flexi.alignCenter}  ${flexi.justifyCenter}`}>
                <h6 className={`${tags.transcribeLabelText}`} style={{color:`var(--Final_Gray)`, width:'75%'}}>highlight</h6>
                <div className={logos.evensmallerclickable} style={{ backgroundImage: `url("/iconsGrey/Cancellation.png")`, zIndex: 1}}></div>
            </div>
        ) : (type =='tags' && name =='action items') ? (
            <div className={`${tags.actionTags} ${flexi.flexRowNoGap} ${flexi.alignCenter}  ${flexi.justifyCenter}`}>
                <h6 className={`${tags.transcribeLabelText}`} style={{color:`var(--Final_White)`, width:'75%'}}>action items</h6>
                <div className={logos.evensmallerclickable} style={{ backgroundImage: `url("/icons/Cancellation.png")`, zIndex: 1}}></div>
            </div>
        )  : (type =='tags' && name =='key dates') ? (
            <div className={`${tags.keydatesTags} ${flexi.flexRowNoGap} ${flexi.alignCenter}  ${flexi.justifyCenter}`}>
                <h6 className={`${tags.transcribeLabelText}`} style={{color:`var(--Final_White)`, width:'75%'}}>key dates</h6>
                <div className={logos.evensmallerclickable} style={{ backgroundImage: `url("/icons/Cancellation.png")`, zIndex: 1}}></div>
            </div>
        ) : (type =='tags' && name =='meeting details') ? (
            <div className={`${tags.meetingDetailsTags} ${flexi.flexRowNoGap} ${flexi.alignCenter}  ${flexi.justifyCenter}`}>
                <h6 className={`${tags.transcribeLabelText}`} style={{color:`var(--Final_White)`, width:'75%'}}>meeting details</h6>
                <div className={logos.evensmallerclickable} style={{ backgroundImage: `url("/icons/Cancellation.png")`, zIndex: 1}}></div>
            </div>
            
        ) : (type =='labels' && name =='unrelated') ? (
            <div className={`${tags.meetingDetailsTags} ${flexi.flexRowNoGap} ${flexi.alignCenter}  ${flexi.justifyCenter}`}>
                <h6 className={`${tags.transcribeLabelText}`} style={{color:`var(--Final_White)`, width:'75%'}}>meeting details</h6>
                <div className={logos.evensmallerclickable} style={{ backgroundImage: `url("/icons/Cancellation.png")`, zIndex: 1}}></div>
            </div>
        ): (null)
        }
        </>                  
    )
}

export default TranscriptTags