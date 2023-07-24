import React from 'react';
import { Button, ButtonWithLogo } from '../components';

const ButtonPreview = () => {
  return (
    <div>
      <h1>Button Preview</h1>

      <h2>Border Buttons:</h2>
      <Button size="small" onClick={() => alert('Small button clicked!')}>
        Small Button
      </Button>

      <Button size="medium" onClick={() => alert('Medium button clicked!')}>
        Medium Button
      </Button>

      <Button size="large" onClick={() => alert('Large button clicked!')}>
        Large Button
      </Button>

      <h2>Filled Buttons:</h2>
      <Button size="small" fill onClick={() => alert('Small button clicked!')}>
        Small Fill
      </Button>

      <Button size="medium" fill onClick={() => alert('Medium button clicked!')}>
        Medium Fill
      </Button>

      <Button size="large" fill onClick={() => alert('Large button clicked!')}>
        Large Fill
      </Button>

      <h2>Border Buttons with Logos:</h2>
      <ButtonWithLogo
        size="small"
        logo="left"
        logoStyle={{ backgroundImage: `url("/icons/Save.png")`, zIndex: 1 }}
        onClick={() => alert('Button with left logo clicked!')}
      >
        Small Left
      </ButtonWithLogo>

      <ButtonWithLogo
        size="medium"
        logo="right"
        logoStyle={{ backgroundImage: `url("/icons/Save.png")`, zIndex: 1 }} // Change this to the URL of your right logo
        onClick={() => alert('Button with right logo clicked!')}
      >
        Right Logo Button
      </ButtonWithLogo>

      <ButtonWithLogo
        size="large"
        logo="none"
        onClick={() => alert('Button with no logo clicked!')}
      >
        No Logo Button
      </ButtonWithLogo>
    </div>
  );
};

export default ButtonPreview;
