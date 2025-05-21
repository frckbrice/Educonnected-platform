"use client";

import * as React from 'react';
import { ThemeProvider as NextThemeProvider } from 'next-themes';
import { type ThemeProviderProps } from 'next-themes';

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
    return (<NextThemeProvider {...props}>{children}</NextThemeProvider>);
}


// we got difficulties passing the darkMode to directly to style.

// 'use client';

// import { createContext, useContext, useState, useEffect } from 'react';
// import { type ThemeProviderProps } from 'next-themes';

// type Theme = 'light' | 'dark';
// type ThemeContextType = {
//     theme: Theme;
//     toggleTheme: () => void;
// };

// export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
//     const [theme, setTheme] = useState<Theme>('light');

//     useEffect(() => {
//         // Initialize theme
//         const savedTheme = localStorage.getItem('theme') as Theme ||
//             (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
//         setTheme(savedTheme);
//         document.documentElement.classList.toggle('dark', savedTheme === 'dark');
//     }, []);

//     const toggleTheme = () => {
//         const newTheme = theme === 'light' ? 'dark' : 'light';
//         setTheme(newTheme);
//         localStorage.setItem('theme', newTheme);
//         document.documentElement.classList.toggle('dark', newTheme === 'dark');
//     };

//     return (
//         <ThemeContext.Provider value={{ theme, toggleTheme }}>
//             {children}
//         </ThemeContext.Provider>
//     );
// }
