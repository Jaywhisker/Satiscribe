'use client'

import React, { useState } from 'react'
import Button  from '@/components/buttons/button.js';
import colourstyle from '/styles/Colourtest.module.css'
import logos from '/styles/Logos.module.css'
import StyledComponentsRegistry from '@/components/registery.tsx'
import Nonclicknavbar from '../navbarnonclickable';
import VettingBlockB from '../../components/large blocks/FullTranscriptBlock/Design B/VettingBlockB';
import ParagraphData from '@/data/Paragraph.json'

function DesignB() {

    return (
        <StyledComponentsRegistry>
        <Nonclicknavbar/>
        <div>
            <Button
                size="small"
                logo="left"
                logoStyle={{ backgroundImage: `url("/iconsPurple/Replace.png")`, zIndex: 1 }}
                onClick={() => alert('Border Button (Smol) with left logo clicked!')}
            >
                Reset All Changes
            </Button>
            <h4>Edit Full Transcript</h4>
            <Button 
                size="small"
                logo="left"
                fill={true}
                logoStyle={{ backgroundImage: `url("/iconsFinalGray/Check.png")`, zIndex: 1 }} // Change this to the URL of your right logo
                onClick={() => alert('Filled Button (small) with Right logo clicked!')}
            >
                Finalise All Changes
            </Button>
        </div>
        <VettingBlockB ParagraphData={ParagraphData}/>
        </StyledComponentsRegistry>


    )
}

export default DesignB