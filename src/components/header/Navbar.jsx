import { useState } from "react";
import { about, home, humburgerMenuu, logo, poloShirt } from "../../assets/images";
import { motion, AnimatePresence } from 'framer-motion'
import CloseNavbar from "../UI/button/CloseNavbar";
import { Link } from "react-router-dom";

export default function Navbar() {

    const [humburgerMenu, setHumburgerMenu] = useState(false)

    const handleHumburgerMenu = () => {
        setHumburgerMenu(true)
    }

    const handleClose = () => {
        setHumburgerMenu(false)
    }

    const itemVariant = {
        open: {
            opacity: 1,
            y: 0, 
            transition: {duration: 0.5}
        },
        closed: {
            opacity: 0,
            y: -110,
            transition: {duration: 0.5}
        }
    }

    return (
        <header className="2xl:justify-center 2xl:gap-[2500px] relative flex justify-between items-center bg-[#f5f5f5] py-3 md:px-20 lg:px-32 " >
            <div className="flex items-center px-1" >
                <div className="w-14" >
                    <img  src={logo} className="w-full" />
                </div>
                <p className="font-ss hidden md:block " >Nuansa</p>
            </div>
            <AnimatePresence>
                {humburgerMenu && (
                    <motion.div
                        key="menu"
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={itemVariant}
                        style={{zIndex: 99}}
                        className="w-full fixed top-0 bg-[#373a40] py-3" 
                        >
                        <div className="w-full h-56 flex items-center text-white font-semibold z-30 " >
                            <nav className="w-full h-full flex items-center px-5 " >
                                <ul >
                                    <li className="flex items-start gap-2" >
                                        <img src={home} className="w-5" />
                                        <p>Home</p>
                                    </li>

                                    <li className="flex items-start gap-2 my-8" >
                                        <img src={poloShirt} className="w-5" />
                                        <p>Product</p>
                                    </li>

                                    <li className="flex items-start gap-2" >
                                        <img src={about} className="w-5" />
                                        <p>How to Order</p>
                                    </li>
                                    
                                </ul>
                            </nav>
                        </div>
                        <div className="flex justify-center" >
                            <CloseNavbar handleClose={handleClose} />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            <nav>
                <ul className="hidden md:flex items-center gap-8 text-[#373A40] " >
                    <li><Link to='/' >Home</Link></li>
                    <li><Link>Product</Link></li>
                    <li><Link to='/how-to-order' >How to Order</Link></li>
                </ul>
            </nav>
            
            <div onClick={handleHumburgerMenu} className="block mr-4 w-8 md:hidden " >
                <img src={humburgerMenuu} />
            </div>

        </header>
    )
}