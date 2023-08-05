import { createTheme } from 'react-data-table-component';

createTheme('custom', {
  text: {
    primary: 'var(--Final_White)', // White text
    secondary: 'var(--Final_Purple)', // Purple text for pagination dropdown
  },
  background: {
    default: 'transparent', // Transparent background for the table
  },
  context: {
    background: 'var(--Final_Component_Dark_Grey)', // Dark grey background for pagination
    text: 'var(--Final_White)', // White text for pagination
  },
  divider: {
    default: 'transparent', // Transparent divider (no borders for rows)
  },
  action: {
    button: 'var(--Final_White)', // White text for sort buttons
    hover: 'var(--Final_White)', // White text on hover for sort buttons
    disabled: 'var(--Final_White)', // White text for disabled sort buttons
  },
}, 'dark');
