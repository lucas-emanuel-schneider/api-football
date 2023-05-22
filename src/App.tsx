import { Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import NotFound from "./pages/NotFound"

function App() {

  return (
    <Routes>
      <Route path="/" element={ <Login /> }/>
      <Route path="*" element={ <NotFound /> } />
    </Routes>
  )
}

export default App
