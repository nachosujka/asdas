import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getProductById } from "../asynkMonck"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const {productId} = useParams()
    useEffect(() =>{
        getProductById(productId)
        .then((res) =>{
setProduct(res)
        })
        .catch(err => console.log(err))
    }, [productId])
  return (
  <><ItemDetail{...product}/></>
  )
}

export default ItemDetailContainer
