import React, { useRef, useState, useEffect } from 'react';
import contentblock from '@/styles/components/contentblocks.module.css';
// import { random } from 'animejs';
import flexi from '@/styles/Flexible.module.css'
import TranscriptTagsYL from '../FullTranscriptBlock/Tags and Labels/transcriptTagsLabelsYL';

function VettingSentence({ thisindex, text, tagName, sentenceStates, setSentenceStates }) {
    const [exampleData, setExampleData] = useState(text);
    const [cursorPointerLocation, setCursorPositionLocation] = useState(0)
    const [deletePressed, setDeletePressed] = useState(false)

    const identifier = sentenceStates[thisindex].identifier;


    const divRef = useRef(null);

    const runOnToggleFillerChange = () => {
        // Replace this with the functionality you want to run
        if (sentenceStates[thisindex].trashClicked == true) {
            // Some function to detect all <b> and then apply <s> around them
            const currentData = exampleData;
            const regex = new RegExp(`<${identifier}>(.*?)<\/${identifier}>`, 'g');
            const newData = currentData.replace(regex, (_, captureGroup) => {
                return `<${identifier}>` + captureGroup.split('').map(char => `<s>${char}</s>`).join('') + `</${identifier}>`;
            });
            setExampleData(newData)
        } else {
            // Some function to detect all <b> and then apply <s> around them
            const currentData = exampleData;
            const regex = new RegExp(`<${identifier}><s>(.*?)<\/s><\/${identifier}>`, 'g');
            const newData = currentData.replace(regex, (_, captureGroup) => {
                return `<${identifier}>` + captureGroup.split('<s>').join('').split('</s>').join('') + `</${identifier}>`;
            });
            setExampleData(newData)
        }
    };

    const prevTrashClicked = useRef(sentenceStates[thisindex].trashClicked);

    useEffect(() => {
        const trashClicked = sentenceStates[thisindex].trashClicked;
        if (prevTrashClicked.current !== trashClicked) {
            // console.log(sentenceStates[thisindex]);
            runOnToggleFillerChange(trashClicked);
            prevTrashClicked.current = trashClicked;
        }
    }, [sentenceStates, thisindex]);

    useEffect(() => {
        setCursorPosition(document.getElementById('paragraph'), cursorPointerLocation)
    }, [exampleData, cursorPointerLocation]);

    const findChildNodeByCursorPosition = (paragraphElement, cursorPosition) => {
        const childNodes = paragraphElement.childNodes;
        let nodecursorPosition = cursorPosition;
        let currentLength = 0;
        let offset = 0;
        for (let i = 0; i < childNodes.length; i++) {
            const childNode = childNodes[i];
            const nodeLength = childNode.textContent.length;

            if (childNode.nodeType == Node.ELEMENT_NODE) {
                offset = childNode.tagName.length + 2
                if (currentLength + nodeLength + 2 * offset + 1 >= cursorPosition) {
                    return [childNode, 1];
                }
                nodecursorPosition -= nodeLength - (2 * offset + 1)
                currentLength += nodeLength + 2 * offset + 1;
            } else {
                if (currentLength + nodeLength >= cursorPosition) {
                    return [childNode, 1];
                }
                currentLength += nodeLength;
                nodecursorPosition -= nodeLength
            }
        }

        return [childNodes[childNodes.length - 1], nodecursorPosition];
    };


    const setCursorPosition = (paragraphElement, cursorPosition) => {
        const selection = window.getSelection();
        const [textNode, nodecursorPosition] = findChildNodeByCursorPosition(paragraphElement, cursorPosition);
        // console.log(nodecursorPosition, textNode)
        selection.setBaseAndExtent(textNode, nodecursorPosition, textNode, nodecursorPosition);
    };


    const onInput = (event) => {
        if (deletePressed == false) {
            const newText = event.target.innerHTML.replace('&nbsp', ' ');
            const currentCursorPosition = findFirstDiffPos(newText, exampleData);
            const textbeforecursor = exampleData.slice(0, currentCursorPosition);
            let modifiedValue = '';
            if ((textbeforecursor.match(/<strong>/g) ?? []).length == ((textbeforecursor.match(/<\/strong>/g) ?? []).length)) {
                modifiedValue = exampleData.slice(0, currentCursorPosition) + "<strong>" + (newText[currentCursorPosition] == ' ' ? ' ' : newText[currentCursorPosition]) + "</strong>" + exampleData.slice(currentCursorPosition);
                setCursorPositionLocation(currentCursorPosition + 9)

            } else {
                modifiedValue = exampleData.slice(0, currentCursorPosition) + newText[currentCursorPosition] + exampleData.slice(currentCursorPosition);
                setCursorPositionLocation(currentCursorPosition + 1)
            }
            setExampleData(modifiedValue)
        }
    }

    const findFirstDiffPos = (a, b) => {
        var i = 0;
        if (a === b) return -1;
        while (a[i] === b[i]) i++;
        return i;
    }

    let thisType = tagName === '' ? 'tags' : 'labels';



    return (
        <>
            <li>
                <div className={`${flexi.flexRowSmolGap} ${flexi.justifyStart} ${flexi.alignCenter}`}>

                    <p
                        id="paragraph"
                        ref={divRef}
                        contentEditable="true"
                        style={{ color: `var(--Final_White)`, width: '75%' }}
                        dangerouslySetInnerHTML={{ __html: `${exampleData}` }}
                        onInput={onInput}
                    />
                    {/* Change labels to tags to get nothing */}
                    <TranscriptTagsYL type={thisType} name={tagName} thisindex={thisindex} sentenceStates={sentenceStates} setSentenceStates={setSentenceStates} />

                </div>

            </li>


        </>
    );
}

export default VettingSentence;
