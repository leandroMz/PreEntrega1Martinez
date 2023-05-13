import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom"
import { CartContextProvider } from "./Context/CartContext"
import { NavBar } from "./components/NavBar/NavBar"
import { MainContain } from "./components/MainContain/MainContain"
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer"
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer"
import { CartContainer } from "./components/CartContainer/CartContainer"
import { Footer } from "./components/Footer/Footer"

function App() {
  return (
    <CartContextProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<MainContain/>} />
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:cid" element={<ItemListContainer greeting={"Bienvenidos"} />} />
          <Route path="/detail/:pid" element={<ItemDetailContainer/>} />
          <Route path='/cart' element={<CartContainer />} />
          {/* <Route path="/notfound" element={<NotFound />} /> */}
          {/* <Route path="*" element={< Navigate to='/notfound'/>} /> */}
          <Route path="*" element={< Navigate to='/' />} />
        </Routes>
        <Footer/>
      </Router>
    </CartContextProvider>
  )
}

export default App
