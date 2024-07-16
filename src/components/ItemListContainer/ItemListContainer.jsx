import { getProducts } from "../asynkMonck"
import ItemList from "../ItemList/ItemList"
import { useEffect, useState } from "react"

function ItemListContainer({titulo}){
    const [products, setProducts] = useState([])
   useEffect(()=>{
  getProducts().then( (res) =>{
setProducts(res)
 })
   },[])
    return(
        <> <h2>{titulo}</h2>
       <ItemList products={products}></ItemList>
        </>
    )
}

export default ItemListContainer