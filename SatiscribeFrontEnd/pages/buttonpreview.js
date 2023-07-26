import React from 'react';
  import { Button, ButtonWithLogo } from '../components';

const ButtonPreview = () => {
  return (
    <div>
      <h1>Button Preview</h1>

      <h2>Simple Buttons:</h2>
      <Button size="small" onClick={() => alert('Small button clicked!')}>
        Small Button
      </Button>

      <Button size="medium" onClick={() => alert('Medium button clicked!')}>
        Medium Button
      </Button>

      <Button size="large" onClick={() => alert('Large button clicked!')}>
        Large Button
      </Button>

      <h2>Buttons with Logos:</h2>
      <ButtonWithLogo
        size="medium"
        logo="left"
        onClick={() => alert('Button with left logo clicked!')}
      >
        Left Logo Button
      </ButtonWithLogo>

      <ButtonWithLogo
        size="medium"
        logo="right"
        onClick={() => alert('Button with right logo clicked!')}
      >
        Right Logo Button
      </ButtonWithLogo>

      <ButtonWithLogo
        size="medium"
        logo="none"
        onClick={() => alert('Button with no logo clicked!')}
      >
        No Logo Button
      </ButtonWithLogo>
    </div>
  );
};

export default ButtonPreview;
