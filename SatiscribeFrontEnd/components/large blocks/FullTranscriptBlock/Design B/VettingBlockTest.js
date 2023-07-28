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
    }, [exampleData, cursorPointerLocation]);
    

    const findChildNodeByCursorPosition = (paragraphElement, cursorPosition) => {
        const childNodes = paragraphElement.childNodes;
        let nodecursorPosition = cursorPosition;
        let currentLength = 0;
        let offset = 0;
        for (let i = 0; i < childNodes.length; i++) {
            const childNode = childNodes[i];
            const nodeLength = childNode.textContent.length;
            console.log(childNode)
            if (childNode.nodeType == Node.ELEMENT_NODE) {
                offset = childNode.tagName.length +2 
                if (currentLength + nodeLength + 2*offset +1 >= cursorPosition) {
                    return [childNode, 1];
                }
                nodecursorPosition -= nodeLength - (2*offset +1)
                currentLength += nodeLength + 2*offset +1;
            } else {
                if (currentLength + nodeLength >= cursorPosition) {
                    return [childNode, nodecursorPosition];
                }
                currentLength += nodeLength;
                nodecursorPosition -= nodeLength
            }}
        
        return [childNodes[childNodes.length - 1], nodecursorPosition];
        };
    

    const setCursorPosition = (paragraphElement, cursorPosition) => {
        const selection = window.getSelection();
        const [textNode, nodecursorPosition] = findChildNodeByCursorPosition(paragraphElement, cursorPosition);
        console.log(textNode.tagName, nodecursorPosition)
        if (textNode.tagName == "B" || textNode.tagName == "I" || textNode.tagName == "EM"){
            console.log(textNode.childNodes)
            var strongTagNode;
            for (var i = 0; i < textNode.childNodes.length; i++) {
              var childNode = textNode.childNodes[i];
              if (childNode.nodeType === Node.ELEMENT_NODE && childNode.tagName === 'STRONG') {
                strongTagNode = childNode;
                break;
              }
            }
            selection.setBaseAndExtent(strongTagNode, 1, strongTagNode, 1);
        } 
        else {selection.setBaseAndExtent(textNode, nodecursorPosition, textNode, nodecursorPosition)};
      };
      

    const onInput = (event) => {
        const newText = event.target.innerHTML.replace('&nbsp', ' '); //convert space bar code to js space
        let currentCursorPosition = findFirstDiffPos(newText,exampleData);
        const textbeforecursor = exampleData.slice(0,currentCursorPosition);
        let modifiedValue = '';
        
        console.log(newText)
        if (newText.length > exampleData.length) { //addition input
            if ( (textbeforecursor.match(/<strong>/g) ?? []).length == ((textbeforecursor.match(/<\/strong>/g) ?? []).length) ) {
                modifiedValue = exampleData.slice(0, currentCursorPosition) + "<strong>" + (newText[currentCursorPosition] == ' ' ? ' ' : newText[currentCursorPosition]) + "</strong>" + exampleData.slice(currentCursorPosition);
                setCursorPositionLocation(currentCursorPosition+8)        

            } else {
                modifiedValue = exampleData.slice(0, currentCursorPosition) + newText[currentCursorPosition] + exampleData.slice(currentCursorPosition);
                setCursorPositionLocation(currentCursorPosition+1)        
            }
            console.log(modifiedValue)
            setExampleData(modifiedValue)
        } 
        
        else if (newText.length <= exampleData.length){
            if (exampleData[currentCursorPosition] === ">" ) {
                currentCursorPosition = findCharacterPos(exampleData, currentCursorPosition, "<")
                
                if (exampleData[currentCursorPosition-1] === ">" ){
                    var nextCursor = findCharacterPos(exampleData, currentCursorPosition, "<")
                    if (exampleData.slice(nextCursor, currentCursorPosition).includes("/")) {
                        null
                    }
                    else {
                        currentCursorPosition = nextCursor
                    }
                }
                modifiedValue = exampleData.slice(0, currentCursorPosition) + "<s>" + exampleData[currentCursorPosition] + "</s>" + exampleData.slice(currentCursorPosition+1)
                console.log(modifiedValue)
                setCursorPositionLocation(currentCursorPosition)        
                setExampleData(modifiedValue)
            } 
            modifiedValue = exampleData.slice(0, currentCursorPosition) + "<s>" + exampleData[currentCursorPosition] + "</s>" + exampleData.slice(currentCursorPosition+1)
            console.log(modifiedValue)
            console.log(currentCursorPosition)
            setCursorPositionLocation(currentCursorPosition)        
            setExampleData(modifiedValue)
        }
    }


    const findCharacterPos = (text, currentIndex, char) => {
        var index = currentIndex;
        while (index >= 0 && text[index] !== charToFind) {
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