import React from 'react';
import { NavItemsData } from '@/constants/constant-data';
import Link from 'next/link';
import { useTheme } from 'next-themes';


type Props = {
    activeItem: number;
    isMobile: boolean
}

const NavItem = ({
    activeItem,
    isMobile
}: Props) => {
    const { theme } = useTheme()

    return (
        <>
            <div className="hidden sm:flex">
                {
                    NavItemsData && NavItemsData.map((item, index) => (
                        <Link href={item.url} key={index} passHref>
                            <span
                                className={`${activeItem === index
                                    ? "dark:text-[#37a39a] text-[crimson]"
                                    : (theme === 'dark' ? '  text-white' : 'text-black')
                                    } text-[18px] px-6 font-Poppins font-[400]`}
                            >
                                {item.name}
                            </span>
                        </Link>
                    ))
                }
            </div>
            {
                isMobile && (
                    <div className="sm:hidden mt-5">
                        {
                            NavItemsData.map((item, index) => (
                                <Link href={item.url} key={index} passHref>
                                    <span
                                        className={`${activeItem === index
                                            ? "dark:text-[#37a39a] text-[crimson]"
                                            : (theme === 'dark' ? '  text-white' : 'text-black')
                                            } block py-5 text-[18px] px-6 font-Poppins font-[400]`}
                                    >
                                        {item.name}
                                    </span>
                                </Link>
                            ))
                        }
                    </div>
                )
            }
        </>
    )
}

export default NavItem;
