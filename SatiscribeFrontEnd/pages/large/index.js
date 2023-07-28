import React from 'react'
import style from '@/styles/Colourtest.module.css'
import flexi from '@/styles/Flexible.module.css'
import CreateNewBlock from '@/components/large blocks/CreateNewBlocksMain'
import FullTranscriptBlock from '@/components/large blocks/FullTranscriptBlock/fullTranscript'
import AgendaBlock from '@/components/large blocks/AgendaMain'
import TaskSummariserBlock from '../../components/large blocks/TaskSummariserMain'

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