import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {set} from '../redux/product-modal/productModalSlide'
import Button from './Button'
import numberWithCommas from '../utils/numberWithCommas'

const ProductCard = ({slug,img01,img02,title,price}) => {

    const dispatch = useDispatch()

    return (
        <div className="product-card">
            <Link to={`/catalog/${slug}`}>
                <div className="product-card__image">
                    <img src={img01} alt="" />
                    <img src={img02} alt="" />
                </div>
                <h3 className="product-card__name">{title}</h3>
                <div className="product-card__price">
                    {numberWithCommas(price)}
                    <span className="product-card__price__old">
                        <del>{numberWithCommas(399000)}</del>
                    </span>
                </div>
            </Link>
            <div className="product-card__btn">
                <Button
                    size="sm"    
                    icon="bx bx-cart"
                    animate={true}
                    onClick={()=> dispatch(set(slug))}
                >
                    chọn mua
                </Button>
            </div>
        </div>
    )
}

export default ProductCard
