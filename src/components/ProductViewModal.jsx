import React,{useState,useEffect} from 'react'
import ProductView from './ProductView'
import productData from '../assets/fakerData/products'
import Button from './Button'
import {useDispatch,useSelector} from 'react-redux'
import {remove} from '../redux/product-modal/productModalSlide'

const ProductViewModal = () => {

    const dispatch = useDispatch()

    const productSlug = useSelector((state) => state.productModal.value)

    const [product, setProduct] = useState(undefined)

    useEffect(() => {
        setProduct(productData.getProductBySlug(productSlug))
    }, [productSlug]);


    return (
        <div className={`product-view__modal ${product === undefined ? '' : 'active'}`}>
            <div className="product-view__modal__content">
            <ProductView product={product}/>
            <div className="product-view__modal__content__close">
                <Button size="sm" onClick={()=> dispatch(remove())}>Đóng</Button>
            </div>
            </div>
        </div>
    )
}

export default ProductViewModal
