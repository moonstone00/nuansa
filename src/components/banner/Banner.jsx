import { tShirtBlack } from '../../assets/images'
import { motion } from 'framer-motion'

export default function Banner() {
    return (
        <div>
            <div className='flex flex-col-reverse md:flex-row items-center justify-around bg-[#ebecee] px-4 py-12' >
                <motion.div 
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 10 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <h1 className='font-bold text-3xl md:text-5xl font-montserrat text-[#373A40]' >Awesome Black T-Shirt</h1>
                    <p className='text-[#373A40] my-3' >Get your own custom t-shirt today</p>
                    <button className='bg-[#373A40] text-white py-2 px-8 text-sm font-semibold' >View More</button>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: -1}}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <img src={tShirtBlack} alt="tShirtBlack" className='w-[520px]' />
                </motion.div>
            </div>
        </div>
    )
}
