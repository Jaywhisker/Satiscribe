import React from 'react';
import { Button } from '../components';

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
      <Button
        size="small"
        logo="right"
        logoStyle={{ backgroundImage: `url("/icons/Save.png")`, zIndex: 1 }}
        onClick={() => alert('Border Button (Smol) with right logo clicked!')}
      >
        Small Right
      </Button>

      <Button
        size="small"
        logo="left"
        logoStyle={{ backgroundImage: `url("/icons/Save.png")`, zIndex: 1 }}
        onClick={() => alert('Border Button (Smol) with left logo clicked!')}
      >
        Small Left
      </Button>

      <Button
        size="medium"
        logo="right"
        logoStyle={{ backgroundImage: `url("/icons/Save.png")`, zIndex: 1 }} // Change this to the URL of your right logo
        onClick={() => alert('Border Button (Med) with right logo clicked!')}
      >
        Medium Right
      </Button>

      <Button
        size="medium"
        logo="left"
        logoStyle={{ backgroundImage: `url("/icons/Save.png")`, zIndex: 1 }} // Change this to the URL of your right logo
        onClick={() => alert('Border Button (Med) with left logo clicked!')}
      >
        Medium Left
      </Button>

      <Button
        size="large"
        logo="right"
        logoStyle={{ backgroundImage: `url("/icons/Save.png")`, zIndex: 1 }} // Change this to the URL of your right logo
        onClick={() => alert('Border Button (Med) with left logo clicked!')}
      >
        Large Right
      </Button>


      <Button
        size="large"
        logo="left"
        logoStyle={{ backgroundImage: `url("/icons/Save.png")`, zIndex: 1 }} // Change this to the URL of your right logo
        onClick={() => alert('Border Button (Med) with left logo clicked!')}
      >
        Large Left
      </Button>

      <Button
        size="large"
        logo="None"
        logoStyle={{ backgroundImage: `url("/icons/Save.png")`, zIndex: 1 }} // Change this to the URL of your right logo
        onClick={() => alert('Border Button (Med) with No logo clicked!')}
      >
        No Logo Border
      </Button>

      <h2>Filled Buttons with Logos:</h2>
      <Button
        size="small"
        logo="right"
        fill={true}
        logoStyle={{ backgroundImage: `url("/icons/Cancellation.png")`, zIndex: 1 }} // Change this to the URL of your right logo
        onClick={() => alert('Filled Button (small) with Right logo clicked!')}
      >
        Small Fill Right
      </Button>

      <Button
        size="small"
        logo="left"
        fill={true}
        logoStyle={{ backgroundImage: `url("/icons/Cancellation.png")`, zIndex: 1 }} // Change this to the URL of your right logo
        onClick={() => alert('Filled Button (small) with Right logo clicked!')}
      >
        Small Fill Left
      </Button>

      <Button
        size="medium"
        logo="right"
        fill={true}
        logoStyle={{ backgroundImage: `url("/icons/Cancellation.png")`, zIndex: 1 }} // Change this to the URL of your right logo
        onClick={() => alert('Filled Button (Large) with Right logo clicked!')}
      >
        Med Fill Right
      </Button>

      <Button
        size="medium"
        logo="left"
        fill={true}
        logoStyle={{ backgroundImage: `url("/icons/Cancellation.png")`, zIndex: 1 }} // Change this to the URL of your right logo
        onClick={() => alert('Filled Button (Large) with Right logo clicked!')}
      >
        Med Fill Left
      </Button>

      <Button
        size="large"
        logo="right"
        fill={true}
        logoStyle={{ backgroundImage: `url("/icons/Cancellation.png")`, zIndex: 1 }} // Change this to the URL of your right logo
        onClick={() => alert('Filled Button (Large) with Right logo clicked!')}
      >
        Large Fill Right
      </Button>

      <Button
        size="large"
        logo="left"
        fill={true}
        logoStyle={{ backgroundImage: `url("/icons/Cancellation.png")`, zIndex: 1 }} // Change this to the URL of your right logo
        onClick={() => alert('Filled Button (Large) with Right logo clicked!')}
      >
        Large Fill Left
      </Button>

      <h2>Disabled:</h2>
      <Button
        size="large"
        logo="right"
        disabled={true}
        logoStyle={{ backgroundImage: `url("/icons/Cancellation.png")`, zIndex: 1 }} // Change this to the URL of your right logo
        onClick={() => alert('Filled Button (Large) with Right logo clicked!')}
      >
        Disabled Border Right
      </Button>

      <Button
        size="large"
        logo="left"
        disabled={true}
        logoStyle={{ backgroundImage: `url("/icons/Cancellation.png")`, zIndex: 1 }} // Change this to the URL of your right logo
        disabledLogoStyle = {{ backgroundImage: `url("/icons/LinkPurple.png")`, zIndex: 1 }}
        onClick={() => alert('Filled Button (Large) with Right logo clicked!')}
      >
        Disabled Border Left
      </Button>

      <Button
        size="large"
        logo="left"
        fill = {true}
        disabled={true}
        logoStyle={{ backgroundImage: `url("/icons/Cancellation.png")`, zIndex: 1 }} // Change this to the URL of your right logo
        disabledLogoStyle = {{ backgroundImage: `url("/icons/LinkPurple.png")`, zIndex: 1 }}
        onClick={() => alert('Filled Button (Large) with Right logo clicked!')}
      >
        Disabled Filled Left
      </Button>

      <Button
        size="large"
        logo="right"
        fill = {true}
        disabled={true}
        logoStyle={{ backgroundImage: `url("/icons/Cancellation.png")`, zIndex: 1 }} // Change this to the URL of your right logo
        disabledLogoStyle = {{ backgroundImage: `url("/icons/LinkPurple.png")`, zIndex: 1 }}
        onClick={() => alert('Filled Button (Large) with Right logo clicked!')}
      >
        Disabled Filled Right
      </Button>

      <Button
        size="large"
        logo="none"
        fill = {true}
        disabled={true}
        logoStyle={{ backgroundImage: `url("/icons/Cancellation.png")`, zIndex: 1 }} // Change this to the URL of your right logo
        disabledLogoStyle = {{ backgroundImage: `url("/icons/LinkPurple.png")`, zIndex: 1 }}
        onClick={() => alert('Filled Button (Large) with Right logo clicked!')}
      >
        Disabled Filled No Logo
      </Button>
    </div>
    
  );
};

export default ButtonPreview;
