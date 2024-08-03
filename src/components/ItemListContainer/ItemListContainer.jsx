import { useParams } from "react-router-dom"
import { getProducts, getProductsByCategory } from "../asynkMonck"
import ItemList from "../ItemList/ItemList"
import { useEffect, useState } from "react"

function ItemListContainer(){
    const [products, setProducts] = useState([])
    const {categoryId} = useParams()
   useEffect(()=>{
    const asyncFunctions = categoryId ? getProductsByCategory : getProducts
  asyncFunctions(categoryId).then( (res) =>{
setProducts(res)
 })
   },[categoryId])

  

    return(
        <> 
       <ItemList products={products}></ItemList>
        </>
    )
}

export default ItemListContainer