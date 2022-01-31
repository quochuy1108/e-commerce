import {useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import Button from './Button'
import numberWithCommas from '../utils/numberWithCommas'
import {useDispatch} from 'react-redux'
import {addItem} from '../redux/shopping-cart/cartItemSlide'
import {remove} from '../redux/product-modal/productModalSlide'


const ProductView = ({product}) => {

    const dispatch = useDispatch()

    let navigate = useNavigate()

    
if(product === undefined ) {
     product = {
         price:0,
        colors:[],
        size:[],
    }
}

const [previewImg, setPreviewImg] = useState(product.image01)
const [descriptionExpand, setDescriptionExpand] = useState(true)

const [color, setColor] = useState(undefined)
const [size, setSize] = useState(undefined)
const [quantity, setQuantity] = useState(1)

const handleQuantity = (type) => {
    if(type === 'plus') {
       return setQuantity(prev => prev + 1)
    }else {
       return setQuantity(prev => {
           return quantity === 1 ? 1 : prev - 1
       })
    }
}

useEffect(() => {
    setPreviewImg(product.image01)
    setColor(undefined)
    setSize(undefined)
    setQuantity(1)
}, [product.image01]);

const check = () => {
    if(color === undefined) {
        alert('Vui lòng chọn màu sắc')
        return false
    }
    if(size === undefined) {
        alert('Vui lòng kích cỡ')
        return false
    }
  return true
}

const addToCard = () => {
    if(check()) {
        dispatch(addItem({
            color:color,
            size:size,
            quantity:quantity,
            slug:product.slug,
            price:product.price,
        }))
        alert('Success')
    }
}
const goToCart = () => {
    if(check()){
        dispatch(addItem({
            color:color,
            size:size,
            quantity:quantity,
            slug:product.slug,
            price:product.price,
        }))
        navigate('/cart')
    } 
    dispatch(remove())


}

    return (
        <div className="product">
            <div className="product__images">
                <div className="product__images__list">
                    <div className="product__images__list__item" onClick={()=> setPreviewImg(product.image01)}>
                        <img src={product.image01} alt="" />
                    </div>
                    <div className="product__images__list__item" onClick={()=> setPreviewImg(product.image02)}>
                        <img src={product.image02} alt="" />
                    </div>
                </div>
                <div className="product__images__list__main">
                    <img src={previewImg} alt="" />
                </div>

                <div className={`product-description ${descriptionExpand ? '': 'expand'}`} >
                <div className="product-description__title">
                    Kham pha
                </div>
                <div className="product-description__content" dangerouslySetInnerHTML={{__html:product.description}}>
                </div>
                <div className="product-description__toggle">
                    <Button
                    size='sm'
                    onClick={()=> setDescriptionExpand(!descriptionExpand)}
                    >
                        {descriptionExpand ? 'Xem thêm' : 'Thu gọn'}
                    </Button>
                </div>
            </div>
            </div>
           <div className="product__info">
               <div className="product__info__title">{product.title}</div>
               <div className="product__info__item">
                   <span className="product__info__item__price">
                   {numberWithCommas(product.price)}
                   </span>
               </div>
               <div className="product__info__item">
                   <div className="product__info__item__title">
                      Màu sắc
                   </div>
                   <div className="product__info__item__list">
                       {product.colors.map((item,index)=> {
                           return <div 
                           key={index} 
                           className={`product__info__item__list__item ${color === item ? 'active' : '' } ` }
                           onClick={()=> setColor(item)}
                           >
                               <span className={`circle bg-${item}`}></span>
                           </div>
                       })}
                   </div>
               </div>
               {/* end color */}
               <div className="product__info__item">
                   <div className="product__info__item__title">
                       Kích cỡ
                   </div>
                   <div className="product__info__item__list">
                       {product.size.map((item,index)=> {
                           return <div 
                           key={index} 
                           className={`product__info__item__list__item ${size === item ? 'active' : ''}`}
                           onClick={()=> setSize(item)}
                           >
                               <span className="product__info__item__list__item__size">{item}</span>
                           </div>
                       })}
                   </div>
               </div>
               {/* end size */}
               <div className="product__info__item">
                   <div className="product__info__item__title">
                       Số lượng
                   </div>
                   <div className="product__info__item__quantity">
                    <div className="product__info__item__quantity__btn" onClick={()=> handleQuantity('minus')}>
                        <i className="bx bx-minus"></i>
                    </div>
                    <div className="product__info__item__quantity__input">
                        {quantity}
                    </div>
                    <div className="product__info__item__quantity__btn" onClick={()=> handleQuantity('plus')}>
                        <i className="bx bx-plus"></i>
                    </div>
                   </div>
               </div>
               {/* end quantity */}
               <div className="product__info__item">
                   <Button  onClick={()=> addToCard()}>Thêm vào giỏ hàng</Button>
                   <Button  onClick={()=>goToCart()}>Mua ngay</Button>
               </div>

           </div>
            {/* end product__images */}
            <div className={`product-description mobile ${descriptionExpand ? '': 'expand'}`} >
                <div className="product-description__title">
                    Kham pha
                </div>
                <div className="product-description__content" dangerouslySetInnerHTML={{__html:product.description}}>
                </div>
                <div className="product-description__toggle">
                    <Button
                    size='sm'
                    onClick={()=> setDescriptionExpand(!descriptionExpand)}
                    >
                        {descriptionExpand ? 'Xem thêm' : 'Thu gọn'}
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ProductView
