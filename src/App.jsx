
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import Error from "./components/Error/Error"
import { BrowserRouter, Routes, Route } from "react-router-dom"
// import {BrowserRouter} from "react-router-dom"
function App() {
  return (
    <BrowserRouter>
     <NavBar title="Sujka store"/>
     <Routes>
     <Route exact path="/" element= {<ItemListContainer/>}/>
     <Route path="/category/:categoryId" element= {<ItemListContainer/>}/>
     <Route exact path="/detail/:productId" element= {<ItemDetailContainer/>}/>
      <Route path="*" element={<Error/>}></Route> 
     {/* <ItemListContainer /> */}
     </Routes>
    </BrowserRouter>
  )
}

export default App
