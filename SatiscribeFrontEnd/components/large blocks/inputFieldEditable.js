import React from 'react'
import style from '@/styles/Colourtest.module.css'
import flexi from '@/styles/Flexible.module.css'
import logos from '@/styles/Logos.module.css'
import list from '@/styles/List.module.css'
import contentblock from '@/styles/components/contentblocks.module.css'
import largeblockStyles from '@/styles/components/large blocks/createNewBlockStyles.module.css'


function InputFieldEditable({Text, onChange, onDelete, onKeyPress}) {

    return (
        <>
            <li style={{color: Text.length <=0 ? `var(--Final_White_50)` : `var(--Final_White)`}}>
                <div className={`${flexi.flexRowSmolGap} ${flexi.justifyStart} ${flexi.alignEnd}`}>
                    <div className={`${flexi.flexColumnNoGap}`} style={{width:'100%'}} >
                        <input type='text' 
                                placeholder='New Agenda' 
                                value={Text}
                                onChange={onChange}
                                onKeyDown={onKeyPress}
                                />
                        <div className={contentblock.line} style={{borderBottomColor: Text.length <=0 ? `var(--Final_White_50)` : `var(--Final_White)`}}></div>
                    </div>
                    <div className={logos.smallclickable} style={{ backgroundImage: `url("/icons/Trash.png")`, zIndex: 1 }} onClick={onDelete}></div>
                </div>
            </li>
        </>
    )
}

export default InputFieldEditable