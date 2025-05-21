// import { useTheme } from '@/hook/use-theme';
// import Image from 'next/image';
// import Link from 'next/link';
// import React from 'react'
// import { BiSearch } from 'react-icons/bi';
// import SearchInput from '../global/search-input';

// type Props = {}

// const HeroSection = (props: Props) => {
//     // import theme 
//     const { theme } = useTheme();


//     return (
//         <div className='w-full flex items-center gap-3 justify-between md:mt-10 2xl:p-10 2xl:mt-10 xl:p-5 xl:mt-2 '>
//             <div className='bg-red-400 w-1/2 h-1/1 flex items-center justify-center '>
//                 <div className='hero_animation mt-0 h-[600px] w-[600px] flex  items-center justify-center z-10 rounded-full border-none p-5 top-0 bg-gray-800 m-10'>
//                     <Image
//                         src={require('../../../public/assets/banner-img-1.png')}
//                         width={500}
//                         height={500}
//                         alt='banner image'
//                         className='object-contain lgx:max-w-[90%] w-[90%] xl:max-w-[85%] h-auto z-[10]'
//                     />
//                 </div>
//             </div>

//             <div>
//                 <div className='bg-green-600 w-full  flex flex-col items-center justify-center  xl:gap-10 2xl:gap-10 2xl:mt-10 2xl:p-10 '>
//                     <h2 className={`${theme === 'dark' ? 'text-white' : 'text-[#000000c7]'} w-full p-3  text-[30px] lg:text-[70px] font-Josephin lg:leading-[75px]  text-center`}>
//                         improve Your Online Learning Experience and Teaching Better instantly
//                     </h2>
//                     <p className={`${theme === 'dark' ? 'text-[#edfff4]' : 'text-[#000000ac]'} w-full  font-Josephin font-[600] text-[18px] xl:!w-[75%] lg:!w-[78%]`}>
//                         We have 40k+ Online courses & 500K+ Online registered students. Find
//                         your desired Courses from them.
//                     </p>

//                     <SearchInput />
//                     <br />
//                     <br />
//                     <div className='xl:w-[55%] 1100px:w-[78%] w-[90%] flex items-center'>
//                         <Image
//                             src={require('../../../public/assets/transform-img.png')}
//                             alt='client one'
//                             className='rounded-full'
//                             width={50}
//                             height={50}
//                         />
//                         <Image
//                             src={require('../../../public/assets/business-img.png')}
//                             alt='client one'
//                             className='rounded-full'
//                             width={50}
//                             height={50}
//                         />
//                         <Image
//                             src={require('../../../public/assets/teaching-img.png')}
//                             alt='client one'
//                             className='rounded-full'
//                             width={50}
//                             height={50}
//                         />
//                         <p className='font-Josephin dark:text-[#edfff4] text-[#000000b3] lg:pl-3 text-[18px] font-[600]'>
//                             500k+ People already trusted us.
//                             <Link href='/courses' className='dark:text-[#46e256] text-[crimson]' >
//                                 View Courses
//                             </Link>
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default HeroSection;

import { useTheme } from 'next-themes';
// import { useTheme } from '@/hook/use-theme';

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { motion } from 'framer-motion';
import SearchInput from '../global/search-input';
import TrustedUsers from './trust-users';

const HeroSection = () => {
    // Import theme
    const { theme } = useTheme();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    // Animation variants
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    const staggerChildren = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const pulseAnimation = {
        scale: [1, 1.02, 1],
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
        }
    };

    const floatAnimation = {
        y: [0, -15, 0],
        transition: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
        }
    };

    return (
        <div className="w-full flex flex-col lg:flex-row items-center gap-3 justify-between md:mt-10 p-4 sm:p-6 lg:p-8 xl:p-5 2xl:p-10 h-[90vh] overflow-hidden">
            {/* Left Side - Image section */}
            <motion.div
                className="w-full lg:w-1/2 flex items-center justify-center py-6 lg:py-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <motion.div
                    className="hero_animation relative h-full w-auto max-w-md sm:max-w-lg flex items-center justify-center rounded-full p-5 bg-gradient-to-br from-blue-500/40 to-purple-500/30 dark:from-blue-600/20 dark:to-purple-700/10 mt-10"
                    animate={pulseAnimation}
                >
                    <motion.div
                        animate={floatAnimation}
                        className="w-[500px] h-[500px] p-3 flex items-center justify-center"
                    >
                        <Image
                            src={require('../../../public/assets/banner-img-1.png')}
                            width={500}
                            height={500}
                            alt="banner image"
                            className="object-contain w-[85%] h-auto z-10"
                            priority
                        />
                    </motion.div>

                    {/* Background circles decoration */}
                    <div className="absolute w-full h-full rounded-full bg-blue-400/10 dark:bg-blue-600/5 blur-md -z-10 animate-pulse"></div>
                    <div className="absolute w-[80%] h-[80%] rounded-full bg-purple-400/20 dark:bg-purple-600/10 blur-sm -z-10 animate-pulse delay-700"></div>
                </motion.div>
            </motion.div>

            {/* Right Side - Content section */}
            <motion.div
                className="w-full lg:w-1/2 mt-8 lg:mt-0"
                variants={staggerChildren}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
            >
                <div className="flex flex-col items-center lg:items-start justify-center gap-6 md:gap-5 xl:gap-10 px-4">
                    <motion.h2
                        variants={fadeIn}
                        className={`dark:[#edfff4] not-dark:[#000000c7] text-center lg:text-left text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-Josephin leading-tight`}
                    >
                        Discover a new Learning and Teaching Experience
                    </motion.h2>

                    <motion.p
                        variants={fadeIn}
                        className={` max-w-xl dark:[#edfff4] not-dark:[#000000ac] text-center lg:text-left font-Josephin font-medium text-lg`}
                    >
                        We have 40k+ Online courses & 500K+ Online registered students.
                        Find your desired Courses from them.
                    </motion.p>

                    <motion.div variants={fadeIn} className="w-full max-w-xl">
                        <SearchInput />
                    </motion.div>

                    <motion.div
                        variants={fadeIn}
                        className="w-full flex flex-col sm:flex-row items-center gap-4 sm:gap-2"
                    >
                        <motion.div
                            variants={fadeIn}
                            className=" w-full max-w-xl mx-auto lg:mx-0 mt-2"
                        >
                            <TrustedUsers />
                        </motion.div>

                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default HeroSection;
