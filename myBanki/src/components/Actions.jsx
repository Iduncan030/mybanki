import { motion, usePresence } from 'framer-motion';
import { NavLink } from 'react-router-dom';

const parentVariants = {
    hidden: {
        opacity: 0,
        x: '-30vw',
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            // duration: .5,
            staggerChildren: 0.15,
            when: 'beforeChildren',
        },
    },
    exit: {
        opacity: 0,
        x: '-30vw',
    },
};

const childrenVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
};

function Actions({ loan, handleCloseAction }) {
    // const [isPresent, safeToRemove] = usePresence();

    // console.log(isPresent, safeToRemove);
    return (
        <motion.ul
            variants={parentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="h-full px-10 py-15 rounded-l-normal absolute top-[-5px] right-[0px] bg text-white z-10  space-y-10 flex flex-col justify-center items-start "
        >
            <motion.li
                variants={childrenVariants}
                className="underline capitalize cursor-pointer"
            >
                <NavLink
                    className={({ isActive }) =>
                        isActive ? 'text-blue-10' : 'text-white'
                    }
                    to={'deposit'}
                    onClick={handleCloseAction}
                >
                    deposit <span>&rarr;</span>
                </NavLink>
            </motion.li>
            <motion.li
                variants={childrenVariants}
                className="underline capitalize cursor-pointer"
            >
                <NavLink
                    className={({ isActive }) =>
                        isActive ? 'text-blue-10' : 'text-white'
                    }
                    to={'withdraw'}
                    onClick={handleCloseAction}
                >
                    withdraw <span>&rarr;</span>
                </NavLink>
            </motion.li>
            <motion.li
                variants={childrenVariants}
                className="underline capitalize cursor-pointer"
            >
                <NavLink
                    className={({ isActive }) =>
                        isActive ? 'text-blue-10' : 'text-white'
                    }
                    to={'loan/request'}
                    onClick={handleCloseAction}
                >
                    request loan <span>&rarr;</span>
                </NavLink>
            </motion.li>

            {loan > 0 && (
                <motion.li
                    variants={childrenVariants}
                    className="underline capitalize cursor-pointer"
                >
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? 'text-blue-10' : 'text-white'
                        }
                        to={'loan/pay'}
                        onClick={handleCloseAction}
                    >
                        pay loan back <span>&rarr;</span>
                    </NavLink>
                </motion.li>
            )}
        </motion.ul>
    );
}

export default Actions;
