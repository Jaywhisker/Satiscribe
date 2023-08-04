import React from 'react';
import style from '@/styles/Colourtest.module.css';
import flexi from '@/styles/Flexible.module.css';
import logos from '@/styles/Logos.module.css';
import list from '@/styles/List.module.css';
import contentblock from '@/styles/components/contentblocks.module.css';

function AgendaBlockEditTemp() {
  return (
    <div className={`${contentblock.largeBlockContainerNoHover} ${contentblock.contentBlockAlignment}`}>
      <div className={`${flexi.innerMargin}`}>
        <div className={`${flexi.flexRowSmolGap} ${flexi.justifyLeft}`}>
          <h5>Agenda</h5>
          <div className={logos.small} style={{ backgroundImage: `url("/iconsPurple50/Link.png")`, zIndex: 1 }}></div>
          <h5 style={{ color: `var(--Final_Light_Purple_50)` }}>Task Summariser & Assigner</h5>
        </div>

        <ul className={`${list.mediumGap}`}>
          <li><p style={{ color: `var(--Final_White)` }}>Agenda 1</p></li>
          <li><p style={{ color: `var(--Final_White)` }}>Agenda 2</p></li>
          <li><p style={{ color: `var(--Final_White)` }}>Agenda 3</p></li>
        </ul>
      </div>
    </div>
  );
}

export default AgendaBlockEditTemp;