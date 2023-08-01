export function onInputStrikethrough(event, id, exampleData, setExampleData, setCursorPositionLocation, setParagraphID) {
    setParagraphID(id)
    const originalText = exampleData[id]['transcript']
    const newText = event.target.innerHTML.replace('&nbsp', ' ').replace(';', ''); //convert space bar code to js space
    let currentCursorPosition = findFirstDiffPos(newText, originalText);
    const textbeforecursor = originalText.slice(0, currentCursorPosition);
    let modifiedValue = '';

    if (newText.length > originalText.length) { //addition input
        if ((textbeforecursor.match(/<strong>/g) ?? []).length == ((textbeforecursor.match(/<\/strong>/g) ?? []).length)) {
            modifiedValue = originalText.slice(0, currentCursorPosition) + "<strong>" + (newText[currentCursorPosition] == ' ' ? ' ' : newText[currentCursorPosition]) + "</strong>" + originalText.slice(currentCursorPosition);
            currentCursorPosition += 9
            setCursorPositionLocation(currentCursorPosition)

        } else {
            if (textbeforecursor.lastIndexOf("<s>") > textbeforecursor.lastIndexOf("<strong>")) {
                let newCursor = currentCursorPosition + 13
                modifiedValue = originalText.slice(0, newCursor) + "<strong>" + (newText[currentCursorPosition] == ' ' ? ' ' : newText[currentCursorPosition]) + "</strong>";
                newCursor += 9
                setCursorPositionLocation(newCursor)
            } else {
                modifiedValue = originalText.slice(0, currentCursorPosition) + newText[currentCursorPosition] + originalText.slice(currentCursorPosition);
                currentCursorPosition += 1
                setCursorPositionLocation(currentCursorPosition)
            }
        }
        console.log(modifiedValue)
        setExampleData((ExampleData) => ExampleData.map((data, i) => (i === id ? { ...data, transcript: modifiedValue } : data)))
    }

    else if (newText.length <= originalText.length) {
        console.log(originalText[currentCursorPosition])
        // console.log(currentCursorPosition, newText.length, exampleData.length)
        // When Exiting a tag <b> tag (also activates when we come into contact with a </b> like deleting the previous character before a ummm </b> )
        if (originalText[currentCursorPosition - 1] === ">") {
            var newCursorPosition = findCharacterPos(originalText, currentCursorPosition, "<")
            console.log(originalText.slice(newCursorPosition, currentCursorPosition))
            modifiedValue = originalText.slice(0, currentCursorPosition) + "<s>" + originalText[currentCursorPosition] + "</s>" + originalText.slice(currentCursorPosition + 1)
            setCursorPositionLocation(newCursorPosition)
            // Some way to check if I am in </b>
        }
        // Used to delete existing strong tags
        else if (originalText[currentCursorPosition] === "<" && originalText[currentCursorPosition + 7] === ">") {
            console.log(originalText.slice(currentCursorPosition, currentCursorPosition + 7))
            currentCursorPosition += 8
            modifiedValue = originalText.slice(0, currentCursorPosition) + "<s>" + originalText[currentCursorPosition] + "</s>" + originalText.slice(currentCursorPosition + 1)
            setCursorPositionLocation(currentCursorPosition - 8)
        } else {
            modifiedValue = originalText.slice(0, currentCursorPosition) + "<s>" + originalText[currentCursorPosition] + "</s>" + originalText.slice(currentCursorPosition + 1)
            // console.log(modifiedValue)
            // console.log(currentCursorPosition)
            setCursorPositionLocation(currentCursorPosition)
        }

        setExampleData((ExampleData) => ExampleData.map((data, i) => (i === id ? { ...data, transcript: modifiedValue } : data)))
    }
    setExampleData((ExampleData) => ExampleData.map((data, i) => (i === id ? { ...data, transcript: modifiedValue } : data)))
}


export function onInputDelete(event, id, exampleData, setExampleData, setCursorPositionLocation, setParagraphID, keyCode) {
    console.log(typeof keyCode, typeof keyCode === 'object')
    console.log(keyCode, keyCode === 'Enter')
    if (keyCode === 'Enter' || typeof keyCode === 'object') {
        setExampleData(exampleData)
    } else {
        setParagraphID(id)
        const originalText = exampleData[id]['transcript']
        const newText = event.target.innerHTML.replace('&nbsp', ' ').replace(';', ''); //convert space bar code to js space
        let currentCursorPosition = findFirstDiffPos(newText, originalText);
        const textbeforecursor = originalText.slice(0, currentCursorPosition);
        let modifiedValue = '';

        console.log(originalText.length, newText.length)

        if (newText.length > originalText.length) { //addition input
            if ((textbeforecursor.match(/<strong>/g) ?? []).length == ((textbeforecursor.match(/<\/strong>/g) ?? []).length)) {
                modifiedValue = originalText.slice(0, currentCursorPosition) + "<strong>" + (newText[currentCursorPosition] == ' ' ? ' ' : newText[currentCursorPosition]) + "</strong>" + originalText.slice(currentCursorPosition);
                currentCursorPosition += 9
                setCursorPositionLocation(currentCursorPosition)

            } else {
                if (textbeforecursor.lastIndexOf("<s>") > textbeforecursor.lastIndexOf("<strong>")) {
                    let newCursor = currentCursorPosition + 13
                    modifiedValue = originalText.slice(0, newCursor) + "<strong>" + (newText[currentCursorPosition] == ' ' ? ' ' : newText[currentCursorPosition]) + "</strong>";
                    newCursor += 9
                    setCursorPositionLocation(newCursor)
                } else {
                    modifiedValue = originalText.slice(0, currentCursorPosition) + newText[currentCursorPosition] + originalText.slice(currentCursorPosition);
                    currentCursorPosition += 1
                    setCursorPositionLocation(currentCursorPosition)
                }
            }
            console.log(modifiedValue)
            setExampleData((ExampleData) => ExampleData.map((data, i) => (i === id ? { ...data, transcript: modifiedValue } : data)))
        }

        else if (newText.length === originalText.length) { //addition input
            if ((textbeforecursor.match(/<strong>/g) ?? []).length == ((textbeforecursor.match(/<\/strong>/g) ?? []).length)) {
                modifiedValue = originalText.slice(0, currentCursorPosition) + "<strong>" + (newText[currentCursorPosition] == ' ' ? ' ' : newText[currentCursorPosition]) + "</strong>" + originalText.slice(currentCursorPosition + 1);
                currentCursorPosition += 9
                setCursorPositionLocation(currentCursorPosition)

            } else {
                if (textbeforecursor.lastIndexOf("<s>") > textbeforecursor.lastIndexOf("<strong>")) {
                    let newCursor = currentCursorPosition + 13
                    modifiedValue = originalText.slice(0, newCursor) + "<strong>" + (newText[currentCursorPosition] == ' ' ? ' ' : newText[currentCursorPosition]) + "</strong>";
                    newCursor += 9
                    setCursorPositionLocation(newCursor)
                } else {
                    modifiedValue = originalText.slice(0, currentCursorPosition) + newText[currentCursorPosition] + originalText.slice(currentCursorPosition + 1);
                    currentCursorPosition += 1
                    setCursorPositionLocation(currentCursorPosition)
                }
            }
            console.log(modifiedValue)
            setExampleData((ExampleData) => ExampleData.map((data, i) => (i === id ? { ...data, transcript: modifiedValue } : data)))
        }

        else if (newText.length + 1 === originalText.length) {
            setExampleData((ExampleData) => ExampleData.map((data, i) => (i === id ? { ...data, transcript: newText } : data)))
            setCursorPositionLocation(currentCursorPosition)
        }

        else if (newText.length < originalText.length) {
            const deletedcontent = originalText.length - newText.length + currentCursorPosition + 1

            if (deletedcontent > originalText.length) {
                setExampleData((ExampleData) => ExampleData.map((data, i) => (i === id ? { ...data, transcript: newText } : data)))
                setCursorPositionLocation(newText.length)

            }
            else {
                console.log('hi')
                if (keyCode === 'Backspace' || keyCode === 'Delete') {
                    console.log(originalText, newText)
                    modifiedValue = originalText.slice(0, currentCursorPosition) + newText[currentCursorPosition] + (originalText.slice(deletedcontent))
                    if (originalText.length - newText.length === 18) { // for cases where a empty <strong></strong>
                        const lastIndex = newText.lastIndexOf("<");
                        setCursorPositionLocation(lastIndex)
                        setExampleData((ExampleData) => ExampleData.map((data, i) => (i === id ? { ...data, transcript: newText } : data)))
                    } else {
                        setCursorPositionLocation(currentCursorPosition)
                        setExampleData((ExampleData) => ExampleData.map((data, i) => (i === id ? { ...data, transcript: modifiedValue } : data)))
                    }
                } else {
                    if ((textbeforecursor.match(/<strong>/g) ?? []).length == ((textbeforecursor.match(/<\/strong>/g) ?? []).length)) {
                        modifiedValue = originalText.slice(0, currentCursorPosition) + "<strong>" + (newText[currentCursorPosition] == ' ' ? ' ' : newText[currentCursorPosition]) + "</strong>" + originalText.slice(deletedcontent);
                        currentCursorPosition += 9
                        setCursorPositionLocation(currentCursorPosition)

                    } else {
                        modifiedValue = originalText.slice(0, currentCursorPosition) + newText[currentCursorPosition] + originalText.slice(deletedcontent);
                        currentCursorPosition += 1
                        setCursorPositionLocation(currentCursorPosition)
                    }
                    setExampleData((ExampleData) => ExampleData.map((data, i) => (i === id ? { ...data, transcript: modifiedValue } : data)))
                }
            }
        }
    }
}

export function setCursorPosition(paragraphElement, cursorPosition) {
    const selection = window.getSelection();
    const [textNode, nodecursorPosition] = findChildNodeByCursorPosition(paragraphElement, cursorPosition);
    console.log(textNode, nodecursorPosition)

    if (textNode.childNodes.length > 0) {
        let textlength = 0
        let newcursorposition = nodecursorPosition
        for (const innerChild of textNode.childNodes) {
            textlength = innerChild.textContent.length
            console.log(textlength)
            if (newcursorposition <= textlength) {
                try {
                    selection.setBaseAndExtent(innerChild, newcursorposition, innerChild, newcursorposition)
                } catch {
                    selection.setBaseAndExtent(innerChild.firstChild, newcursorposition, innerChild.firstChild, newcursorposition)
                }
                break
            } else {
                newcursorposition -= textlength

            }
        }
    } else { selection.setBaseAndExtent(textNode, nodecursorPosition, textNode, nodecursorPosition) }
};

/////////////////////////////////////////////////////////////////////////////////////////////////////
//
//                  HELPER FUNCTIONS FOR TOP 2 FUNCTIONS
//
/////////////////////////////////////////////////////////////////////////////////////////////////////

export function findChildNodeByCursorPosition(paragraphElement, cursorPosition) {
    const childNodes = paragraphElement.childNodes;
    let nodecursorPosition = cursorPosition;
    let currentLength = 0;
    let offset = 0;
    let fulltagoffset = 0;

    for (let i = 0; i < childNodes.length; i++) {
        const childNode = childNodes[i];
        var nodeLength;
        if (childNode.nodeType == Node.ELEMENT_NODE) {
            if (childNode.childNodes.length > 0) {
                offset = childNode.tagName.length + 2
                fulltagoffset = 2 * offset + 1
                for (const innerChild of childNode.childNodes) {
                    nodeLength = innerChild.textContent.length
                    var childoffset = (innerChild.tagName && innerChild.tagName.length + 2) || 0;
                    offset += childoffset
                    fulltagoffset += (childoffset !== 0) ? (2 * childoffset + 1) : 0;
                    console.log(nodeLength)
                    console.log(cursorPosition, nodecursorPosition, nodeLength, fulltagoffset, offset)
                    if (currentLength + nodeLength + offset >= cursorPosition) {
                        return [innerChild, nodecursorPosition - offset];
                    } else {
                        offset += (childoffset !== 0) ? childoffset + 1 : 0;
                        nodecursorPosition -= (nodeLength);
                        currentLength += nodeLength;
                    }
                }
                nodecursorPosition -= fulltagoffset;
                currentLength += fulltagoffset;
            }
            else {
                nodeLength = childNode.textContent.length
                offset = childNode.tagName.length + 2
                fulltagoffset = offset * 2 + 1
                if (currentLength + nodeLength + fulltagoffset >= cursorPosition) {
                    return [childNode, nodecursorPosition - offset];
                } else {
                    nodecursorPosition -= (nodeLength + fulltagoffset)
                    currentLength += nodeLength + fulltagoffset;
                }
            }

            // console.log(cursorPosition, nodecursorPosition, nodeLength, fulltagoffset, offset)

        } else {
            nodeLength = childNode.textContent.length
            if (currentLength + nodeLength >= cursorPosition) {
                return [childNode, nodecursorPosition];
            }
            currentLength += nodeLength;
            nodecursorPosition -= nodeLength
            // console.log(cursorPosition, nodecursorPosition, nodeLength, fulltagoffset)
        }
    }
    return [childNodes[childNodes.length - 1], childNodes.length - 1];
};

export function findCharacterPos(text, currentIndex, char) {
    var index = currentIndex;
    while (index >= 0 && text[index] !== char) {
        console.log(text[index])
        index--;
    }
    return index;
}

export function findFirstDiffPos(a, b) {
    var i = 0;
    if (a === b) return -1;
    while (a[i] === b[i]) i++;
    return i;
}


/////////////////////////////////////////////////////////////////////////////
//
//            Toggle functions
//
/////////////////////////////////////////////////////////////////////////////

export function handleToggleFiller(event, exampleData, setExampleData, toggleFiller, setToggleFiller, setDisabledContainer) {
    setToggleFiller(event.target.checked);
    var disabledArray = Array.from({ length: exampleData.length }, () => false);
    const currentData = exampleData;
    if (toggleFiller == true) {
        // Some function to detect all <b> and then apply <s> around them
        const regex = /<b>(.*?)<\/b>/g;
        currentData.map((data, index) => {
            var transcriptData = data['transcript']
            if (transcriptData.includes("<b>")) {
                const newData = transcriptData.replace(regex, (_, captureGroup) => {
                    return '<s><b>' + captureGroup + '</b></s>';
                    // return '<b>' + captureGroup.split('').map(char => `<s>${char}</s>`).join('') + '</b>';
                });
                disabledArray[index] = true
                setExampleData((ExampleData) => ExampleData.map((data, i) => (i === index ? { ...data, transcript: newData } : data)))
            } else {
                null
            };
            // console.log(disabledArray)
            setDisabledContainer(disabledArray)
        })
    } else {
        // Some function to detect all <b> and then apply <s> around them
        const regex = /<s><b>(.*?)<\/b><\/s>/g;
        currentData.map((data, index) => {
            var transcriptData = data['transcript']
            if (transcriptData.includes("<s><b>")) {
                const newData = transcriptData.replace(regex, (_, captureGroup) => {
                    return '<b>' + captureGroup + '</b>'
                    // return '<b>' + captureGroup.split('<s>').join('').split('</s>').join('') + '</b>';
                });
                setExampleData((ExampleData) => ExampleData.map((data, i) => (i === index ? { ...data, transcript: newData } : data)))
            } else {
                null
            };
            setDisabledContainer(disabledArray)
        })
    }
};


///////////////////////////////////////////////////////////////////////////////////////
//
//                                   CHANGE TAGS
//
//////////////////////////////////////////////////////////////////////////////////////

export function clickDropDown(id, setDropDowncontainer, exampleData, dropDowncontainer) {
    let partialdropDrown = Array.from({ length: exampleData.length }, () => false)
    partialdropDrown[id] = !dropDowncontainer[id]
    setDropDowncontainer(partialdropDrown)
}

export function handleDropDown(id, newTag, tagDictionary, exampleData, setExampleData, setDropDowncontainer, dropDowncontainer) {
    const originalTag = exampleData[id]['tags']
    const originalTranscript = exampleData[id]['transcript']
    var modifiedTranscript = originalTranscript.replaceAll(tagDictionary[originalTag][0], tagDictionary[newTag][0])
    modifiedTranscript = modifiedTranscript.replaceAll(tagDictionary[originalTag][1], tagDictionary[newTag][1])
    setExampleData((ExampleData) => ExampleData.map((data, i) => (i === id ? { ...data, transcript: modifiedTranscript } : data)))
    setExampleData((ExampleData) => ExampleData.map((data, i) => (i === id ? { ...data, tags: newTag } : data)))
    clickDropDown(id, setDropDowncontainer, exampleData, dropDowncontainer)
}


/////////////////////////////////////////////////////////////////////////////////////////////////////
//
//                  SETTING FOCUS ON TAG PRESS
//
////////////////////////////////////////////////////////////////////////////////////////////////////

export function settingFocus(id, focusedDictionary, setPreviousFocusData, previousFocusData) {
    const paragraphID = `paragraph_${id}`
    const paragraphElement = document.getElementById(paragraphID);
    paragraphElement.focus();

    if (previousFocusData !== paragraphID && previousFocusData !== '') {
        console.log(previousFocusData, paragraphID)
        const prevparagraphElement = document.getElementById(previousFocusData);
        for (const element of prevparagraphElement.children) {
            var tag_name = element.tagName;
            const cssVariable = focusedDictionary[tag_name][0];
            element.style.backgroundColor = `var(${cssVariable})`
        }
    }

    for (const element of paragraphElement.children) {
        var tag_name = element.tagName;
        const cssVariable = focusedDictionary[tag_name][1];
        element.style.backgroundColor = `var(${cssVariable})`
    }
    setPreviousFocusData(paragraphID)
}

export function loseFocus(event, focusedDictionary, previousFocusData, setPreviousFocusData, setDropDowncontainer, exampleData) {
    const divElement = event.currentTarget;
    const isClickInsideDiv = divElement === event.target

    if (previousFocusData !== '' && isClickInsideDiv) {
        const prevparagraphElement = document.getElementById(previousFocusData);
        for (const element of prevparagraphElement.children) {
            var tag_name = element.tagName;
            const cssVariable = focusedDictionary[tag_name][0];
            element.style.backgroundColor = `var(${cssVariable})`
        }
        setDropDowncontainer(Array.from({ length: exampleData.length }, () => false))
        setPreviousFocusData('')
    } else { null }
}



///////////////////////////////////////////////////////////////////////////////////////////////////
//
//                                     CHANGE SPEAKER TAG
//
//////////////////////////////////////////////////////////////////////////////////////////////////

export function handleChangeSpeaker(index, tagName, exampleData, setExampleData, setSpeakerDropDown, SpeakerDropDown) {
    setExampleData((ExampleData) => ExampleData.map((data, i) => (i === index ? { ...data, speaker: tagName } : data)))
    clickDropDown(index, setSpeakerDropDown, exampleData, SpeakerDropDown)
}