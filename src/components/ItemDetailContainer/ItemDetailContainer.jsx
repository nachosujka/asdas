import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../services/firebase"
const ItemDetailContainer = () => {
    const [products, setProducts] = useState(null)
    const [loading, setLoading] = useState(true)
    const {productId} = useParams()
    useEffect(() =>{
      getDoc(doc(db, "products", productId))
        .then((querySnapshot) =>{
          const products = {id: querySnapshot.id, ...querySnapshot.data()}
setProducts(products)
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
  <div className="ItemDetailContainer">{loading ? <h3>Cargando ...</h3> : <ItemDetail{...products}/>}</div>
  )
}

export default ItemDetailContainer 