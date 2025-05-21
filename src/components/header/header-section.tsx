
"use client";

import Link from 'next/link';
import React, { useState, useEffect, useRef, Dispatch, SetStateAction } from 'react';
import NavItem from '../nav-item';
import ThemeSwitcher from '../theme-switcher';
import { useTheme } from 'next-themes';
import { HiOutlineMenuAlt3, HiOutlineUserCircle } from 'react-icons/hi';
import Mobilesheet from './mobile-sheet';

type Props = {
    open: boolean;
    setOpen: (open: boolean) => void;
    activeItem: number;
    route: string;
    setRoute: Dispatch<SetStateAction<string>>;
}

const Header = ({
    activeItem,
    open,
    setOpen,
}: Props) => {
    // Track if header should be in "scrolled" state
    const [isScrolled, setIsScrolled] = useState(false);
    const [openSideBar, setOpenSideBar] = useState(false);
    const { theme, setTheme } = useTheme();

    // Determine if we're in dark mode for styling
    const isDarkMode = theme === 'dark';
    const hasAlreadyScrollRef = useRef(false);


    useEffect(() => {
        const handleScroll = () => {
            // Update scroll state based on scroll position
            if (window.scrollY > 20) {
                setIsScrolled(true);
                hasAlreadyScrollRef.current = true;
            } else {
                setIsScrolled(false);
            }
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Check initial scroll position
        handleScroll();

        // Clean up event listener
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleClose = (e: any) => {
        if (e.target.id === 'screen')
            setOpenSideBar(false);
    }

    // Define header background styles
    const headerBackground = isDarkMode
        ? isScrolled
            ? 'bg-gradient-to-b from-gray-900/95 to-black/95 backdrop-blur-sm border-b border-gray-800/50 shadow-lg'
            : 'bg-transparent border-b border-gray-800/30 '
        : isScrolled || hasAlreadyScrollRef.current
            ? 'bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-lg'
            : 'bg-transparent border-b border-gray-200/50 text-white';

    // Define text color based on theme
    const textColor = isDarkMode ? 'text-white' : 'text-black';

    return (
        <div className="w-full relative" >
            <div className={`
                w-full h-[80px] z-[80] 
                ${isScrolled ? 'fixed top-0 left-0' : ''}
                ${headerBackground}
                transition-all duration-300 ease-in-out
            `} >
                <div className="w-[95%] 800px:w-[92%] m-auto py-2 h-full">
                    <div className="w-full h-[80px] flex justify-between items-center p-3">
                        <div>
                            <Link href={"/"}
                                className={`text-[25px] font-Poppins font-[500] ${textColor} transition-colors duration-300`}
                            >
                                <span>EduconnectEd</span>
                            </Link>
                        </div>
                        <div className="w-full h-[80px] flex justify-end items-center p-3">
                            <div className="flex items-center">
                                <NavItem
                                    activeItem={activeItem}
                                    isMobile={false}
                                />
                            </div>

                            {/* Theme switcher */}
                            <ThemeSwitcher />

                            {/* Mobile menu toggle */}
                            <div className="sm:hidden">
                                <Mobilesheet
                                    open={openSideBar}
                                    setOpen={setOpenSideBar}
                                    activeItem={activeItem}
                                />
                            </div>

                            {/* User icon */}
                            <HiOutlineUserCircle
                                size={25}
                                className={`hidden sm:block cursor-pointer ${textColor} transition-colors duration-300`}
                                onClick={() => setOpen(!open)}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Add a placeholder div when header is fixed to prevent content jump */}
            {isScrolled && <div className="h-[80px]"></div>}
        </div>
    );
}

export default Header;
