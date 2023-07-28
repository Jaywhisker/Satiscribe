import React, { useState, useEffect} from 'react'
import style from '@/styles/Colourtest.module.css'
import flexi from '@/styles/Flexible.module.css'
import list from '@/styles/List.module.css'
import logos from '@/styles/Logos.module.css'
import contentblock from '@/styles/components/contentblocks.module.css'
import SentenceData from '@/data/Paragraph.json'
import TranscriptTags from '../Tags and Labels/transcriptTagsLabels'

function VettingBlockB() {

    const [toggleFiller, setToggleFiller] = useState(true);
    const [cursorPointerLocation, setCursorPositionLocation] = useState(0)

    const initialData = SentenceData
    const [exampleData, setExampleData] = useState(initialData.paragraph[0].transcript)

    const handleToggleFiller = (event) => {
        setToggleFiller(event.target.checked);
      };

    useEffect(() => {
        setCursorPosition(document.getElementById('paragraph'), cursorPointerLocation)
        console.log(exampleData[cursorPointerLocation])
    }, [exampleData, cursorPointerLocation]);
    

    const findChildNodeByCursorPosition = (paragraphElement, cursorPosition) => {
        const childNodes = paragraphElement.childNodes;
        let nodecursorPosition = cursorPosition;
        let currentLength = 0;
        let offset = 0;
        let fulltagoffset = 0;

        for (let i = 0; i < childNodes.length; i++) {
            const childNode = childNodes[i];
            const nodeLength = childNode.textContent.length;

            if (childNode.nodeType == Node.ELEMENT_NODE) {
                if (childNode.childNodes.length > 0) {
                    offset = childNode.tagName.length +2 
                    fulltagoffset = 2*offset + 1
                    console.log(fulltagoffset)
                    for (const innerChild of childNode.childNodes) {
                        var childoffset = (innerChild.tagName && innerChild.tagName.length + 2) || 0;
                        offset += childoffset
                        if (childoffset === 0) {
                            null
                        } else {
                            fulltagoffset += 2*childoffset + 1                      
                        }

                        if (currentLength + nodeLength + offset >= cursorPosition) {
                            return [childNode, nodecursorPosition-offset];
                        } else {
                            offset += (childoffset !== 0) ? childoffset + 1 : 0;
                        }
                    }}
                else {
                    offset = childNode.tagName.length +2
                    fulltagoffset = offset*2 + 1
                    if (currentLength + nodeLength + fulltagoffset >= cursorPosition) {
                        return [childNode, nodecursorPosition-offset];
                    }
                }
                nodecursorPosition -= (nodeLength + fulltagoffset)
                currentLength += nodeLength + fulltagoffset;
                console.log(cursorPosition, nodecursorPosition, nodeLength, fulltagoffset, offset)
                
            } else {
                
                if (currentLength + nodeLength >= cursorPosition) {
                    return [childNode, nodecursorPosition];
                }
                currentLength += nodeLength;
                nodecursorPosition -= nodeLength
                console.log(cursorPosition, nodecursorPosition, nodeLength, fulltagoffset)
            }}
        return [childNodes[childNodes.length - 1], nodecursorPosition];
        };
    

    const setCursorPosition = (paragraphElement, cursorPosition) => {
        const selection = window.getSelection();
        const [textNode, nodecursorPosition] = findChildNodeByCursorPosition(paragraphElement, cursorPosition);
        console.log(textNode, nodecursorPosition)
        if (textNode.childNodes.length > 0) {
            let textlength = 0
            let newcursorposition = nodecursorPosition
            for (const innerChild of textNode.childNodes) {
                textlength = innerChild.textContent.length
                if (newcursorposition <= textlength) {
                    try {
                        selection.setBaseAndExtent(innerChild, newcursorposition, innerChild, newcursorposition)
                    } catch{
                        selection.setBaseAndExtent(innerChild.firstChild, newcursorposition, innerChild.firstChild, newcursorposition)
                    }
                    break
                } else {
                    newcursorposition -= textlength

                }
            }
        } else {selection.setBaseAndExtent(textNode, nodecursorPosition, textNode, nodecursorPosition)}
      };
      

    const onInput = (event) => {
        const newText = event.target.innerHTML.replace('&nbsp', ' ').replace(';', ''); //convert space bar code to js space
        let currentCursorPosition = findFirstDiffPos(newText,exampleData);
        const textbeforecursor = exampleData.slice(0,currentCursorPosition);
        let modifiedValue = '';
        
        if (newText.length > exampleData.length) { //addition input
            if ( (textbeforecursor.match(/<strong>/g) ?? []).length == ((textbeforecursor.match(/<\/strong>/g) ?? []).length) ) {
                modifiedValue = exampleData.slice(0, currentCursorPosition) + "<strong>" + (newText[currentCursorPosition] == ' ' ? ' ' : newText[currentCursorPosition]) + "</strong>" + exampleData.slice(currentCursorPosition);
                currentCursorPosition += 9
                setCursorPositionLocation(currentCursorPosition)        

            } else {
                if (textbeforecursor.lastIndexOf("<s>") > textbeforecursor.lastIndexOf("<strong>") ) {
                    let newCursor = currentCursorPosition + 13
                    modifiedValue = exampleData.slice(0, newCursor) + "<strong>" + (newText[currentCursorPosition] == ' ' ? ' ' : newText[currentCursorPosition]) + "</strong>";
                    newCursor += 9
                    setCursorPositionLocation(newCursor)
                } else {
                    modifiedValue = exampleData.slice(0, currentCursorPosition) + newText[currentCursorPosition] + exampleData.slice(currentCursorPosition);
                    currentCursorPosition += 1
                    setCursorPositionLocation(currentCursorPosition)        
                }
            }
            console.log(modifiedValue)
            setExampleData(modifiedValue)
        } 
        
        else if (newText.length <= exampleData.length){
            // console.log(exampleData[currentCursorPosition])
            // console.log(currentCursorPosition, newText.length, exampleData.length)
            if (exampleData[currentCursorPosition-1] === ">" ) {
                var newCursorPosition = findCharacterPos(exampleData, currentCursorPosition, "<")
                modifiedValue = exampleData.slice(0, currentCursorPosition) + "<s>" + exampleData[currentCursorPosition] + "</s>" + exampleData.slice(currentCursorPosition+1)
                setCursorPositionLocation(newCursorPosition)  
                setExampleData(modifiedValue)

            } else if (exampleData[currentCursorPosition] === "<" && exampleData[currentCursorPosition+7] === ">" ) {
                currentCursorPosition += 8
                modifiedValue = exampleData.slice(0, currentCursorPosition) + "<s>" + exampleData[currentCursorPosition] + "</s>" + exampleData.slice(currentCursorPosition+1)
                setCursorPositionLocation(currentCursorPosition-8)        
                setExampleData(modifiedValue)
            } else {
                modifiedValue = exampleData.slice(0, currentCursorPosition) + "<s>" + exampleData[currentCursorPosition] + "</s>" + exampleData.slice(currentCursorPosition+1)
                console.log(modifiedValue)
                console.log(currentCursorPosition)
                setCursorPositionLocation(currentCursorPosition)        
                setExampleData(modifiedValue)
            }
        }
    }


    const findCharacterPos = (text, currentIndex, char) => {
        var index = currentIndex;
        while (index >= 0 && text[index] !== char) {
            console.log(text[index])
            index--;
          }
          return index;
    }

    const findFirstDiffPos = (a, b) => {
        var i = 0;
        if (a === b) return -1;
        while (a[i] === b[i]) i++;
            return i;
      }

    
    return (
        <>
            <div className={`${contentblock.largeBlockContainerNoHover} ${contentblock.contentBlockAlignment} ${flexi.flexColumnSmolGap}`}>
                <div className={`${flexi.innerMargin} ${flexi.flexColumnSmolGap}`}>

                    <div className={`${flexi.flexRowSmolGap} ${flexi.justifySpaceBetween}`}>
                        <h5>Full Transcript Vetting</h5>
                        <div className={`${flexi.flexRowSmolGap} ${flexi.alignCenter}`}>
                            <h5 style={{ color: toggleFiller ? `var(--Final_Red)` : `var(--Final_Red_50)` }}>Filler Words</h5>
                            <label className={`${contentblock.switch}`}>
                                <input 
                                    type="checkbox"
                                    checked={toggleFiller}
                                    onChange={handleToggleFiller}
                                 />
                                <span className={`${contentblock.roundslider}`}></span>
                            </label>
                        </div>
                    </div>
                    
                    <div className={`${flexi.flexColumnSmolGap}`}>
                        <div className={logos.evensmallerclickable} style={{ backgroundImage: `url("/icons/Sound on.png")`, zIndex: 1 }}></div>
                        <div className={`${flexi.flexRowSmolGap} ${flexi.justifyStart} ${flexi.alignCenter}`}>                            
                            <p id="paragraph" contenteditable="true" style={{color:`var(--Final_White)`, width:'75%'}} dangerouslySetInnerHTML={{ __html: `${exampleData}` }} onInput={onInput}/>                            
                            
                            <TranscriptTags type='labels' name={initialData.paragraph[0].tags}/>
                        
                        </div>
                        </div>
                    </div>
            </div>
        </>
    )
}

export default VettingBlockB