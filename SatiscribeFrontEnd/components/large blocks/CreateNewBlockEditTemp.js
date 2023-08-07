import React from 'react';
import flexi from '@/styles/Flexible.module.css';
import logos from '@/styles/Logos.module.css';
import contentblock from '@/styles/components/contentblocks.module.css';

function CreateNewBlockEditTemp() {
  return (
    <div className={`${contentblock.largeBlockContainer} ${flexi.flexColumnSmolGap} ${flexi.justifyCenter}`}>
      <div className={`${flexi.innerMargin}`}>
        <div className={`${flexi.flexRowSmolGap} ${flexi.justifyCenter}`}>
          <div className={logos.big} style={{ backgroundImage: `url("/iconsPurple/plus.png")`, zIndex: 1 }}></div>
          <h2 style={{ color: `var(--Final_Light_Purple)` }}> New Component</h2>
        </div>
      </div>
    </div>
  );
}

export default CreateNewBlockEditTemp;