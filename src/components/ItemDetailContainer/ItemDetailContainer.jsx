import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getProductById } from "../asynkMonck"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    const {productId} = useParams()
    useEffect(() =>{
        getProductById(productId)
        .then((res) =>{
setProduct(res)
        })
        .catch(err =>{
          console.log("err")
         }
         )
         .finally(()=>{
          setLoading(false)
         })
    }, [productId])
  return (
  <div className="ItemDetailContainer">{loading ? <h3>Cargando ...</h3> : <ItemDetail{...product}/>}</div>
  )
}

export default ItemDetailContainer