import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import NavBar from "./components/NavBar/NavBar"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import NotFound from "./NotFound/NotFound"

function App() {

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting={"Bienvenidos"} />} />
        <Route path="/category/:cid" element={<ItemListContainer greeting={"Bienvenidos"} />} />
        <Route path="/detail/:pid" element={<ItemDetailContainer />} />
        {/* <Route path="/notfound" element={<NotFound />} /> */}
        {/* <Route path="*" element={< Navigate to='/notfound'/>} /> */}
        <Route path="*" element={< Navigate to='/'/>} />

      </Routes>
      {/* <Footer/> */}
    </Router>
  )
}

export default App
