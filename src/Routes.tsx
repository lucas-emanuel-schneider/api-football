import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import NotFound from "./pages/NotFound"
import Leagues from "./pages/Leagues"
import Teams from "./pages/Teams"
import Squad from "./pages/Squad"


export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route path="/home" element={ <Home /> } />
        <Route path="/teams/:id/:season" element={ <Teams /> } />
        <Route path="/teams/squad/:teamid" element={ <Squad /> } />
        <Route path="/:country/:season" element={ <Leagues /> } />
        <Route path="*" element={ <NotFound /> }/>
      </Routes>
    </BrowserRouter>
  )
}