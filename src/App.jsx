import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import NavBar from "./components/NavBar/NavBar"
import NotFound from "./NotFound/NotFound"
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer"
import { CartContextProvider } from "./Context/CartContext"
import { CartContainer } from "./components/CartContainer/CartContainer"

function App() {

  return (
    <CartContextProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={"Bienvenidos"} />} />
          <Route path="/category/:cid" element={<ItemListContainer greeting={"Bienvenidos"} />} />
          <Route path="/detail/:pid" element={<ItemDetailContainer />} />
          <Route path='/cart' element={<CartContainer />} />

          {/* <Route path="/notfound" element={<NotFound />} /> */}
          {/* <Route path="*" element={< Navigate to='/notfound'/>} /> */}
          <Route path="*" element={< Navigate to='/' />} />

        </Routes>
        {/* <Footer/> */}
      </Router>
    </CartContextProvider>
  )
}

export default App
