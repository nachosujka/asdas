
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import Error from "./components/Error/Error"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CartProvider } from "./context/CartContext"
import Cart from "./components/Cart/Cart"
import Checkout from "./components/Checkout/Checkout"
import { NotificationProvider } from "./context/NotificationContext"
import Swal from "sweetalert2"

function App() {
  return (
    <BrowserRouter>
    <NotificationProvider>
    <CartProvider>
     <NavBar title="Sujka store"/>
     <Routes>
     <Route exact path="/" element= {<ItemListContainer/>}/>
     <Route path="/category/:categoryId" element= {<ItemListContainer/>}/>
     <Route exact path="/detail/:productId" element= {<ItemDetailContainer/>}/>
     <Route path="/cart" element={<Cart/>}></Route>
     <Route path="checkout" element={<Checkout/>}></Route>
      <Route path="*" element={<Error/>}></Route> 
     </Routes>
     </CartProvider>
     </NotificationProvider>
    </BrowserRouter>
  )
}

export default App
