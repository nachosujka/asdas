import Item from '../Item/Item'
import { memo } from 'react'

  const ItemList = ({products}) => {
    return (
      <div className="container">
          {products.map( product => <Item product={product} key={product.id}/>)}        
      </div>
    )
  }
  
  export default memo(ItemList)
