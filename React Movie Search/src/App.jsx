import "../css/App.css"
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Favourite from '../pages/Favourites'
import NavBar from '../components/NavBar'
import { MovieProvider } from "../contexts/MovieContext"

function App() {


  return (
    <MovieProvider>
      <NavBar></NavBar> 
      <main className="main-content">
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/favourites' element={<Favourite/>}></Route>

        </Routes>

      </main>
       
      

    </MovieProvider>
  )
}

export default App
