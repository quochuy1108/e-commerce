import {Link} from 'react-router-dom'
import {useState,useEffect,useCallback} from 'react'
import Button from './Button'

const HeroSlider = ({data,control,timeOut,auto}) => {

const [activeSlide, setActiveSlide] = useState(0)


const nextSlide = useCallback(() => {
        if(activeSlide < data.length-1){
            setActiveSlide(prev => prev + 1)
        }else {
            setActiveSlide(0)
        }
    },
    [activeSlide,data],
)
const prevSlide = () => {
    if(activeSlide > 0){
        setActiveSlide(prev => prev - 1)
    }else {
        setActiveSlide(data.length-1)
    }
}



useEffect(() => {
        if(auto) {
            const autoSlide = setTimeout(() => {
                nextSlide()
            }, timeOut);
            return () => {
                    clearTimeout(autoSlide)
            }
        }
}, [timeOut,nextSlide,auto])

    return (
        <div className="hero-slider">
            {data.map((data,index) => {
                return <HeroSliderItem key={index} data={data} active={index === activeSlide}/>
            })}

           {control? <div className="hero-slider__control">
                <div className="hero-slider__control__item" onClick={prevSlide}>
                <i className='bx bx-chevron-left'></i>
                </div>
            <div className="hero-slider__control__item">
                <div className="index">
                    {activeSlide + 1} / {data.length}
                </div>
            </div>
                <div className="hero-slider__control__item" onClick={nextSlide}>
                <i className='bx bx-chevron-right'></i>
                </div>
            </div>:null}

        </div>
    )
}

const HeroSliderItem = ({data,active}) => {
    return (
        <div className={`hero-slider__item ${active ? 'active':'error'}`}>
            <div className="hero-slider__item__info">
                <div className={`hero-slider__item__info__title color-${data.color}`}><span>{data.title}</span></div>
                <div className="hero-slider__item__info__desc"><span>{data.description}</span></div>
                <div className="hero-slider__item__info__button">
                    <Link to={data.path}>
                    <Button
                     background={data.color}
                     icon='bx bx-cart'
                     animate={true}
                     >Xem chi tiết</Button>
                    </Link>
                </div>
            </div>
            <div className="hero-slider__item__img">
                <img src={data.img} alt="" />
                <div className={`shape bg-${data.color} `}></div>
            </div>
        </div>
    )
}


export default HeroSlider
