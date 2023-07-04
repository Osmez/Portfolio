import React from 'react';
export const Themes = {
    light: {
        foreground: 'text-dark',
        background: 'bg-light',
        negBg: 'bg-dark',
        negTx: 'text-light',
        fill: 'fill-dark'
      },
      dark: {
        foreground: 'text-light',
        background: 'bg-dark',
        negBg: 'bg-light',
        negTx: 'text-dark',
        fill: 'fill-light'
      },
}

export const ThemeContext = React.createContext({theme:Themes.light,toggleTheme:() => {}});