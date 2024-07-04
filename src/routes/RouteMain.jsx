import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomeMain from '../pages/home/HomeMain'
import HowToOrderMain from '../pages/howToOrder/HowToOrderMain'

export default function RouteMain() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<HomeMain/>} />
                <Route path='/how-to-order' element={<HowToOrderMain/>} />
            </Routes>
        </Router>
    )
}
