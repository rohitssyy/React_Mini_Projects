import "../css/Favorites.css"
import { useMovieContext } from "../contexts/MovieContext"
import MovieCard from "../components/MovieCards"

function Favourites() {
    const { favorites } = useMovieContext();

    if (favorites) {
        return (
            <div className="favourites">
            <h2>Your Favourites</h2>
            
                <div className="movies-grid">
                    {favorites.map((movie) => (<MovieCard movie={movie} key={movie.id} /> 
            ))}
            </div>

            </div>
        )    
}


    return <div className="favorites-empty">

        <h2>No Favourite movies yet</h2>
        <p> Add it and they will appear here</p>
    </div>
}

export default Favourites