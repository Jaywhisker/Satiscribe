import React from 'react'
import style from '@/styles/Colourtest.module.css'
import flexi from '@/styles/Flexible.module.css'
import CreateNewBlock from '@/components/large blocks/createNewBlocks'
import FullTranscriptBlock from '@/components/large blocks/fullTranscript'
import AgendaBlock from '@/components/large blocks/agenda'

function largetesting() {
    return (
        <div>
            <AgendaBlock />
            <FullTranscriptBlock />
            <CreateNewBlock />
        </div>
    )
}

export default largetesting