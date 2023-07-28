import React from 'react'
import style from '@/styles/Colourtest.module.css'
import flexi from '@/styles/Flexible.module.css'
import CreateNewBlock from '@/components/large blocks/createNewBlocks'
import FullTranscriptBlock from '@/components/large blocks/fullTranscript'
import AgendaBlock from '@/components/large blocks/agenda'
import TaskSummariserBlock from '../../components/large blocks/taskSummariser'
import VettingBlock from '../../components/large blocks/vettingBlock'

function largetesting() {
    return (
        <div>
            <VettingBlock></VettingBlock>
            <AgendaBlock />
            <FullTranscriptBlock />
            <CreateNewBlock />
            <TaskSummariserBlock editable={false} />
            <TaskSummariserBlock editable={true} />

        </div>
    )
}

export default largetesting