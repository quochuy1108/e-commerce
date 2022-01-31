import {useState,useRef,useEffect} from 'react'
import Grid from './Grid'
import ProductCard from './ProductCard'

const InfinityList = ({dataList}) => {

    const perLoad = 6

const listRef = useRef(null)
// console.log('listRef: ',listRef.current);


const [data, setData] = useState([])
const [load, setLoad] = useState(true)
const [index, setIndex] = useState(0)

useEffect(() => {
    setData(dataList.slice(0,perLoad))
    setIndex(1)
}, [dataList]);

useEffect(() => {
    window.addEventListener('scroll',()=> {
        if(listRef && listRef.current) {
            if(window.pageYOffset + window.innerHeight >= listRef.current.clientHeight + listRef.current.offsetTop + 200) {
                setLoad(true)
            }
        }
    })

  
}, [listRef]);

useEffect(() => {
    const getItems = () => {
        const pages = Math.floor(dataList.length / perLoad)
        const maxIndex = dataList.length % perLoad === 0 ? pages : pages + 1

        if(load && index <= maxIndex) {
           
            const start = perLoad * index
            const end = start + perLoad

            setIndex(index + 1)
            setData(data.concat(dataList.slice(start,end)))
        }
    }
    getItems()
    setLoad(false)

}, [load,index,data,dataList]);
    return (
        <div ref={listRef}>
                 <Grid
                    col={3}
                    mdCol={2}
                    smCol={1}
                    gap={20}
                    >

                    {data.map((item,index)=> {
                        return <ProductCard
                        key={index}
                        title={item.title}
                        img01={item.image01}
                        img02={item.image02}
                        price={Number(item.price)}
                        slug={item.slug}
                        />
                    })}

                    </Grid>
        </div>
    )
}

export default InfinityList
