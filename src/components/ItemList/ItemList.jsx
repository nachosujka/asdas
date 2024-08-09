import {memo} from 'react'

import Item from "../Item/Item"

const ItemList = ({products}) => {
  console.log({products})
  return (
    <div className="grid">
        {products.map( product => <Item product={product} key={product.id} />)}        
    </div>
  )
}

export default memo(ItemList)
