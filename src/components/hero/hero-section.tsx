import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import SearchInput from '../global/search-input';
import TrustedUsers from './trust-users';

const HeroSection = () => {
    // Import theme
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
                            src={'/assets/banner-img-1.png'}
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
