'use client';

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { BiMoon, BiSun } from 'react-icons/bi';

const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme, resolvedTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    // Use resolvedTheme to get the actual theme being applied
    const isDark = resolvedTheme === 'dark';

    console.log('Current theme:', theme);
    console.log('Resolved theme:', resolvedTheme);

    return (
        <div className="flex items-center justify-center mx-4">
            {isDark ? (
                <BiSun
                    className="cursor-pointer text-yellow-500"
                    size={25}
                    onClick={() => setTheme("light")}
                />
            ) : (
                <BiMoon
                    className="cursor-pointer text-gray-600"
                    fill="currentColor"
                    size={25}
                    onClick={() => setTheme("dark")}
                />
            )}
        </div>
    );
};

// Default export to match your import
export default ThemeSwitcher;

// 'use client';

// import { useTheme } from "@/hook/use-theme";
// import { useEffect, useState } from "react";
// // import { useTheme } from "next-themes";
// import { BiMoon, BiSun } from 'react-icons/bi';

// export const ThemeSwitcher = () => {
//     const [mounted, setMounted] = useState(false);
//     const { theme, toggleTheme } = useTheme();

//     useEffect(() => {
//         setMounted(true);
//     }, []);

//     // Show loading state while mounting
//     if (!mounted) {
//         return (
//             <div className="flex items-center justify-center mx-4 w-[25px] h-[25px]">
//                 <div className="w-4 h-4 border-2 border-gray-300 border-t-transparent rounded-full animate-spin"></div>
//             </div>
//         );
//     }

//     return (
//         <div className="flex items-center justify-center mx-2 sm:mx-4">
//             <button
//                 onClick={toggleTheme}
//                 className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
//                 aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
//             >
//                 {theme === 'dark' ? (
//                     <BiSun
//                         className="cursor-pointer text-yellow-500 hover:text-yellow-400"
//                         size={25}
//                     />
//                 ) : (
//                     <BiMoon
//                         className="cursor-pointer rounded-lg bg-auto  text-gray-600 hover:text-gray-100 "
//                         size={25}
//                     />
//                 )}
//             </button>
//         </div>
//     );
// };