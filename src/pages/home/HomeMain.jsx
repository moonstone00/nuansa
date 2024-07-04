import { useEffect, useState } from 'react'
import CardGray from '../../components/UI/card/CardGray'
import Footer from '../../components/UI/footer/Footer'
import Gender from '../../components/UI/gender/Gender'
import SimpleMinimalist from '../../components/UI/text/SimpleMinimalist'
import Banner from '../../components/banner/Banner'
import Navbar from '../../components/header/Navbar'

export default function HomeMain() {

    const [all, setAll] = useState(true)
    const [woman, setWoman] = useState(false)
    const [men, setMen] = useState(false)
    
    const handleCardAll = () => {
        setAll(true)
        setWoman(false)
        setMen(false)
    }

    const handleCardMen = () => {
        setAll(false)
        setMen(true)
        setWoman(false)
    }

    const handleCardWoman = () => {
        setAll(false)
        setMen(false)
        setWoman(true)
    }


    useEffect(() => {
        handleCardAll()
    }, [])

    return (
        <div className='2xl:min-h-screen  '>
            <Navbar/>
            <section className='bg-[#f5f5f5]' >
                <Banner/>
                <SimpleMinimalist/>
                <Gender handleCardWoman={handleCardWoman} handleCardAll={handleCardAll} handleCardMen={handleCardMen} />
                <div className='flex justify-center pb-12'>
                    <CardGray woman={woman} all={all} men={men} />
                </div>
            </section>
            <Footer/>
        </div>
    )
}