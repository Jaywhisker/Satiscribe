'use client'

import React, { useState } from 'react'
import Button from '@/components/buttons/button.js';
import colourstyle from '/styles/Colourtest.module.css';
import logos from '/styles/Logos.module.css';
import landing from '@/styles/webexperiment/Landingpage.module.css';
import StyledComponentsRegistry from '@/components/registery.tsx';
import Nonclicknavbar from '../navbarnonclickable';
import VettingBlock from '../../components/large blocks/FullTranscriptBlock/Design A/vettingBlock';
import SentenceData from '@/data/Sentence.json'
import { useRouter } from 'next/router';


function DesignA() {

    const router = useRouter();

    const handleNavigate = () => {
        router.push('/webexperiment/thankyou');
    };

    return (
        <StyledComponentsRegistry>
            <Nonclicknavbar />
            <div className={landing.headers}>
                <Button
                    size="small"
                    logo="left"
                    logoStyle={{ backgroundImage: `url("/iconsGrey/Replace.png")`, zIndex: 1 }}
                    disabled={true}
                >
                    Reset All Changes
                </Button>
                <h4>Edit Full Transcript</h4>
                <Button
                    size="small"
                    logo="left"
                    fill={true}
                    logoStyle={{ backgroundImage: `url("/iconsFinalGray/Check.png")`, zIndex: 1 }} // Change this to the URL of your right logo
                    onClick={handleNavigate}
                >
                    Finalise All Changes
                </Button>
            </div>
            <VettingBlock SentenceData={SentenceData} />
            <div className={landing.fixme}>
                <a href='#'>
                    <p> Go to top </p>
                </a>
            </div>
        </StyledComponentsRegistry>


    )
}

export default DesignA