import React from 'react'
import style from '@/styles/Colourtest.module.css'
import flexi from '@/styles/Flexible.module.css'
import logos from '@/styles/Logos.module.css'
import contentblock from '@/styles/components/contentblocks.module.css'
import tags from '@/styles/components/large blocks/tags.module.css'

function TranscriptTagsYL({ type, name, thisindex, sentenceStates, setSentenceStates }) {

    const handleTrashClicked = () => {
        const updatedSentenceStates = sentenceStates.map((state, index) => {
            if (index !== thisindex) {
                // For items other than the current one, keep the state as it is
                return state;
            }
            // Update the trashClicked property for the current item with type "Filler Words"
            return {
                ...state,
                trashClicked: true,
            };

            // For items with type other than "Filler Words," keep the trashClicked as null
        });
        // console.log(updatedSentenceStates)

        // Call setSentenceStates to update the state with the new value
        setSentenceStates(updatedSentenceStates);
    }

    const trashClicked = sentenceStates[thisindex].trashClicked;


    return (
        <>
            {(type == 'tags' && name == 'highlight') ? (
                <div className={`${tags.highlightTags} ${flexi.flexRowNoGap} ${flexi.alignCenter}  ${flexi.justifyCenter}`}>
                    <h6 className={`${tags.transcribeLabelText}`} style={{ color: `var(--Final_Gray)`, width: '75%' }}>highlight</h6>
                    <div className={logos.evensmallerclickable} style={{ backgroundImage: `url("/iconsFinalGray/Cancellation.png")`, zIndex: 1 }}></div>
                </div>
            ) : (type == 'tags' && name == 'action items') ? (
                <div className={`${tags.actionTags} ${flexi.flexRowNoGap} ${flexi.alignCenter}  ${flexi.justifyCenter}`}>
                    <h6 className={`${tags.transcribeLabelText}`} style={{ color: `var(--Final_White)`, width: '75%' }}>action items</h6>
                    <div className={logos.evensmallerclickable} style={{ backgroundImage: `url("/icons/Cancellation.png")`, zIndex: 1 }}></div>
                </div>
            ) : (type == 'tags' && name == 'key dates') ? (
                <div className={`${tags.keydatesTags} ${flexi.flexRowNoGap} ${flexi.alignCenter}  ${flexi.justifyCenter}`}>
                    <h6 className={`${tags.transcribeLabelText}`} style={{ color: `var(--Final_White)`, width: '75%' }}>key dates</h6>
                    <div className={logos.evensmallerclickable} style={{ backgroundImage: `url("/icons/Cancellation.png")`, zIndex: 1 }}></div>
                </div>
            ) : (type == 'tags' && name == 'meeting details') ? (
                <div className={`${tags.meetingDetailsTags} ${flexi.flexRowNoGap} ${flexi.alignCenter}  ${flexi.justifyCenter}`}>
                    <h6 className={`${tags.transcribeLabelText}`} style={{ color: `var(--Final_White)`, width: '75%' }}>meeting details</h6>
                    <div className={logos.evensmallerclickable} style={{ backgroundImage: `url("/icons/Cancellation.png")`, zIndex: 1 }}></div>
                </div>

            ) : (type == 'labels') ? (
                <div className={`${tags.labelsTag} ${flexi.flexRowNoGap} ${flexi.alignCenter}  ${flexi.justifyCenter}`} style={{ backgroundColor: trashClicked ? `var(--Final_Gray)` : `var(--Final_White)` }}>
                    <h6 className={`${tags.transcribeCleaningTagText}`} style={{ color: trashClicked ? `var(--Final_White)` : `var(--Final_Gray)`, width: '75%' }}>{name}</h6>
                    <div className={logos.evensmallerclickable} style={{ backgroundImage: trashClicked ? `url("/icons/Trash.png")` : `url("/iconsFinalGray/Trash.png")`, zIndex: 1 }} onClick={() => handleTrashClicked()}></div>
                </div>) : (null)
            }
        </>
    )
}

export default TranscriptTagsYL