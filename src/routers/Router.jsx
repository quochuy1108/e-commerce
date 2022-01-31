import {Routes,Route} from 'react-router-dom'
import Home from '../pages/Home'
import Cart from '../pages/Cart'
import Product from '../pages/Product'
import Catalog from '../pages/Catalog'

const Router = () => {
    return (
        <Routes>
            <Route path='/' exact element={<Home/>}/>
            <Route path='/catalog/:slug' element={<Product/>}/>
            <Route path='/catalog' element={<Catalog/>}/>
            <Route path='/cart' element={<Cart/>}/>
        </Routes>
    )
}

export default Router
