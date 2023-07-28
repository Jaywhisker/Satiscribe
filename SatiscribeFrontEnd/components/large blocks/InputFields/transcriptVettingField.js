import React, { useRef } from 'react';
import contentblock from '@/styles/components/contentblocks.module.css';

function VettingSentence({ onChange, text, placeholder }) {
    const divRef = useRef(null);

    const handleKeyDown = (event) => {
        if (event.keyCode == 8) {
            event.preventDefault()
            // Apply the desired style to the selected text or caret position
            const selection = window.getSelection();
            const character = (selection.anchorNode.textContent[selection.anchorOffset - 1])


            const delElement = document.createElement('strike');
            delElement.textContent = character;

            console.log(delElement)
            const range = selection.getRangeAt(0);
            console.log(range)
            range.insertNode(delElement);
        }
    };

    return (
        <>
            <div
                ref={divRef}
                className={contentblock.textarea}
            >
                <div contentEditable
                    onKeyDown={handleKeyDown}>
                    This is editable content. Press "Ctrl + B" to make selected text bold.

                </div>
            </div>
        </>
    );
}

export default VettingSentence;
