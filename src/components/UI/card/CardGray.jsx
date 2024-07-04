import { star, tshirtBlack } from '../../../assets/images'
import { data } from '../../../utils/data'
import { motion } from 'framer-motion'

export default function CardGray({all, men, woman}) {
    return (
        // buat validasi woman disini jika true maka justify-start dan false justify-center
        <div className='w-full md:w-[60%] flex flex-wrap justify-center gap-6 mt-8' >
        {
            all ? 
            (
                data.map((data, index) => {
                    return (
                        <a  href={data.link}>
                        {/* nanti link nya simpan di data */}
                            <motion.div 
                            initial={{opacity: 0}}
                            animate={{opacity: 1, transition: {duration: 0.7}}}
                            whileHover={{scale: 1.1}}
                            className={`w-max hover:cursor-pointer shadow-md`} 
                            >
                                <div className='flex items-center justify-center bg-[#ebecee] w-max h-[150px] p-4 ' >
                                    <img src={data.image} className='w-28' />
                                </div>
                                <div className='w-full text-slate-500 pt-1 pb-3 px-3 border' >
                                    <div className='flex text-xs' >
                                        <p>{data.name}</p>
                                    </div>
                                    <div className='flex items-center justify-between mt-1 ' >
                                        <div>
                                            <p className='text-xs' >{data.price}</p>
                                        </div>
                                        <div className='flex gap-1' >
                                            <img src={star}  className='w-2 h-2' />
                                            <img src={star}  className='w-2 h-2' />
                                            <img src={star}  className='w-2 h-2' />
                                            <img src={star}  className='w-2 h-2' />
                                            <img src={star}  className='w-2 h-2' />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </a>
                    )
                })
            )
            :
            null
        }

        {
            men ?
            (

                data.map((data, index) => {
                    return (
                        <motion.div 
                        initial={{opacity: 0}}
                        animate={{opacity: 1, transition: {duration: 0.7}}}
                        whileHover={{scale: 1.1}}
                        className={`w-max hover:cursor-pointer shadow-md ${men && data.gender == 'men' ? 'block' : 'hidden'}`} >
                            <div className='flex items-center justify-center bg-[#ebecee] w-max h-[150px] p-4 ' >
                                <img src={data.image} className='w-28' />
                            </div>
                            <div className='w-full text-slate-500 pt-1 pb-3 px-3 border' >
                                <div className='flex text-xs' >
                                    <p>{data.name}</p>
                                </div>
                                <div className='flex items-center justify-between mt-1 ' >
                                    <div>
                                        <p className='text-xs' >{data.price}</p>
                                    </div>
                                    <div className='flex gap-1' >
                                        <img src={star}  className='w-2 h-2' />
                                        <img src={star}  className='w-2 h-2' />
                                        <img src={star}  className='w-2 h-2' />
                                        <img src={star}  className='w-2 h-2' />
                                        <img src={star}  className='w-2 h-2' />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )
                })
            )
            :
            null
        }

        {
            woman ? 
            (
                data.map((data, index) => {
                    return (
                        <motion.div 
                        initial={{opacity: 0}}
                        animate={{opacity: 1, transition: {duration: 0.7}}}
                        whileHover={{scale: 1.1}}
                        className={`w-max hover:cursor-pointer shadow-md ${woman && data.gender == 'woman' ? 'block' : 'hidden'}`} >
                            <div className='flex items-center justify-center bg-[#ebecee] w-max h-[150px] p-4 ' >
                                <img src={data.image} className='w-28' />
                            </div>
                            <div className='w-full text-slate-500 pt-1 pb-3 px-3 border' >
                                <div className='flex text-xs' >
                                    <p>{data.name}</p>
                                </div>
                                <div className='flex items-center justify-between mt-1 ' >
                                    <div>
                                        <p className='text-xs' >{data.price}</p>
                                    </div>
                                    <div className='flex gap-1' >
                                        <img src={star}  className='w-2 h-2' />
                                        <img src={star}  className='w-2 h-2' />
                                        <img src={star}  className='w-2 h-2' />
                                        <img src={star}  className='w-2 h-2' />
                                        <img src={star}  className='w-2 h-2' />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )
                })
            )
            : 
            null
        }
        </div>
    )
}
