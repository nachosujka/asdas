import { useState } from "react"

function CardWidget (){
    const [cont, setCont] = useState(0);

    const handleclick = () => {
        setCont(cont => cont + 1)
    };
    return(
        <div>
            <li><box-icon type='solid' name='cart'></box-icon>{cont} </li>
        </div>
    )
}
export default CardWidget