
import { createContext, useState, useContext, useEffect } from "react";


const MovieContext = createContext()

export const useMovieContext = () => useContext(MovieContext)


export const MovieProvider = ({ children }) => {
   const [favorites , setFavorite] = useState([])

    useEffect(() => {
        const storedFavs = localStorage.getItem("favorites")

        if (storedFavs) setFavorite(JSON.parse(storedFavs))
    },[])
    
    useEffect(() => {
        localStorage.setItem('favourites' , JSON.stringify(favorites))
    }, [favorites])
    

    const addToFavourites = (movies) => {
        setFavorite(prev =>[...prev , movies])
    }

    const removeFromFavorite = (movieId) => {
        setFavorite(prev => prev.filter( mov => mov.id !== movieId))
    }
    
    const isFavourite = (movieId) => {
        return favorites.some(mov => mov.id === movieId)
    }

    const value = {
        favorites,
        addToFavourites, 
        removeFromFavorite,
        isFavourite
    }


    return <MovieContext.Provider value={value}>
            {children}
    </MovieContext.Provider>
}