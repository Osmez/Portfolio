import React, { useContext } from 'react';
import { ThemeContext } from '@/Context/ThemeContext';

const ThemeSwitcher = () => {
    
    return (
        <ThemeContext.Consumer>
            {(theme,toggleTheme) => {
                    <button 
                        style={{color:theme.foreground,backgroundColor:theme.background}}
                        onClick={toggleTheme}>
                            Dark Mode
                    </button>
            }}
        </ThemeContext.Consumer>
    )

}

export default ThemeSwitcher;