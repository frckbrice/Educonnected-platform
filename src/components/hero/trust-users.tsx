import Image from 'next/image';
import { motion } from 'framer-motion';

const TrustedUsers = () => {
    // Sample trusted user data - you can replace with real data
    const trustedUsers = [
        {
            id: 1,
            src: '/assets/transform-img.png',
            alt: "Sarah Johnson - Software Engineer",
            name: "Sarah J.",
            role: "Software Engineer"
        },
        {
            id: 2,
            src: '/assets/business-img.png',
            alt: "Michael Chen - Business Analyst",
            name: "Michael C.",
            role: "Business Analyst"
        },
        {
            id: 3,
            src: '/assets/teaching-img.png', // Fixed: Added leading slash
            alt: "Emily Davis - Teacher",
            name: "Emily D.",
            role: "Educator"
        },

    ];

    // Animation variants
    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const userVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.3 }
        }
    };

    const pulseVariants = {
        pulse: {
            scale: [1, 1.05, 1],
            transition: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    return (
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full">
            {/* Trusted Users Avatars */}
            <motion.div
                className="flex items-center justify-center"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="flex items-center -space-x-3 relative">
                    {trustedUsers.slice(0, 4).map((user, index) => (
                        <motion.div
                            key={user.id}
                            variants={userVariants}
                            whileHover={{
                                scale: 1.1,
                                zIndex: 10,
                                transition: { duration: 0.2 }
                            }}
                            className="relative group"
                            style={{ zIndex: trustedUsers.length - index }}
                        >
                            <motion.div
                                variants={index === 0 ? pulseVariants : {}}
                                animate={index === 0 ? "pulse" : ""}
                                className='dark:bg-white/15 not-dark:bg-white/15 rounded-full'
                            >
                                <Image
                                    src={user.src}
                                    alt={user.alt}
                                    className="rounded-full w-12 h-12 sm:w-14 sm:h-14 border-3 border-white dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                                    width={56}
                                    height={56}
                                />
                            </motion.div>

                            {/* Tooltip on hover */}
                            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black dark:bg-white text-white dark:text-black px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
                                {user.name}
                                <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-black dark:border-t-white"></div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Trust badges */}
                <div className="flex flex-col items-center ml-3 sm:ml-4">
                    <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                            <motion.svg
                                key={i}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.1 + 0.5 }}
                                className="w-3 h-3 text-yellow-400 fill-current"
                                viewBox="0 0 20 20"
                            >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </motion.svg>
                        ))}
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">Verified</span>
                </div>
            </motion.div >

            {/* Trust statement */}
            <motion.div
                className="text-center sm:text-left"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
            >
                <p className="font-Josephin dark:text-[#edfff4] text-[#000000b3] text-base sm:text-sm font-semibold">
                    <span className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                        <motion.svg
                            className="w-5 h-5 text-green-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.8, type: "spring" }}
                        >
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </motion.svg>
                        <span className="text-green-600 dark:text-green-400 ">500K+ Trusted Users</span>
                    </span>
                    Join our community of verified learners and professionals.
                </p>
            </motion.div >
        </div >
    );
};

export default TrustedUsers;
