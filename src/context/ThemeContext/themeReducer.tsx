import { Theme } from "@react-navigation/native"

export type ThemeAction = 
    | {type: 'set_dark_theme'}
    | {type: 'set_light_theme'}

export interface ThemeState extends Theme {
    currentTheme: 'light' | 'dark',
    dividerColor: string
}

export const lightTheme: ThemeState = {
    currentTheme: 'light',
    dark: false,
    dividerColor: 'rgba(0,0,0,0.5)',
    colors: {
        primary: '#084f6a',
        background: 'white',
        card: 'white',
        text: 'black',
        border: 'rgba(0,0,0,0.4)',
        notification: 'teal'
    },
}

export const darkTheme: ThemeState = {
    currentTheme: 'dark',
    dark: true,
    dividerColor: 'rgba(255,255,255,0.7)',
    colors: {
        primary: '#75cedb',
        background: 'black',
        card: 'green',
        text: 'white',
        border: 'rgba(255,255,255,0.4)',
        notification: 'teal'
    },
}


export const themeReducer = (state: ThemeState, action: ThemeAction):ThemeState => {
    switch (action.type) {
        case 'set_light_theme':
            return {...lightTheme}
        case 'set_dark_theme':
            return {...darkTheme}
    
        default:
            return state;
    }
}