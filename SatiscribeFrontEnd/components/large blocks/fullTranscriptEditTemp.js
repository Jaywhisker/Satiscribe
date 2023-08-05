import React from 'react';
import style from '@/styles/Colourtest.module.css';
import flexi from '@/styles/Flexible.module.css';
import logos from '@/styles/Logos.module.css';
import list from '@/styles/List.module.css';
import contentblock from '@/styles/components/contentblocks.module.css';

function FullTranscriptBlockEditTemp() {
  return (
    <>

      <div className={`${contentblock.largeBlockContainerNoHover} ${contentblock.contentBlockAlignment}`}>
        <div className={`${flexi.innerMargin}`}>
          <h5>Full Transcript</h5>

          <ul className={`${list.smolgap}`}>
            <li> <p style={{ color: `var(--Final_White)` }}>Sentence 1</p></li>
            <li> <p style={{ color: `var(--Final_White)` }}>Sentence 2</p></li>

          </ul>
        </div>
      </div>
    </>
  )
}


export default FullTranscriptBlockEditTemp;