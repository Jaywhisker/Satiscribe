import React, {useRef} from 'react'
import style from '@/styles/Colourtest.module.css'
import flexi from '@/styles/Flexible.module.css'
import logos from '@/styles/Logos.module.css'
import list from '@/styles/List.module.css'
import contentblock from '@/styles/components/contentblocks.module.css'
import largeblockStyles from '@/styles/components/large blocks/createNewBlockStyles.module.css'


function InputFieldEditablePara({ Text, onChange, placeholder }) {

    const textareaRef = useRef(null);

    useEffect(() => {
        adjustTextareaHeight(textareaRef.current);
      }, []);

      
    function adjustTextareaHeight(textarea) {
        textarea.style.height = '20px';
        textarea.style.height = `${textarea.scrollHeight}px`;
        console.log(textarea.scrollHeight)
        console.log('hi')
      };


    return (
        <>
            <div className={`${flexi.flexRowSmolGap} ${flexi.justifyStart} ${flexi.alignEnd}`}>
                <div className={`${flexi.flexColumnNoGap}`} style={{ width: '100%' }} >
                    <textarea
                        ref={textareaRef}
                        className={contentblock.textarea}
                        placeholder={placeholder}
                        value={Text}
                        onChange={(event) => {
                                            onChange(event);
                                            adjustTextareaHeight(textareaRef.current)}}                    />
                    <div className={contentblock.line} style={{ borderBottomColor: Text.length <= 0 ? `var(--Final_White_50)` : `var(--Final_White)` }}>

                    </div>
                </div>
            </div>
        </>
    )
}

export default InputFieldEditablePara