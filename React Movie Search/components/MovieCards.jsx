import "../css/MovieCard.css"
import { useMovieContext } from "../contexts/MovieContext"
// this is the designing the layout of how info will be presented on the website
 function MovieCard({movie}) {
     const { isFavourite, removeFromFavorite, addToFavourites } = useMovieContext()
     const favorite = isFavourite(movie.id)
     
    function onFavClick(e) {
        e.preventDefault()

        if (favorite) removeFromFavorite(movie.id)
        else addToFavourites(movie)
    }

    return (
        <div className="movie-card"> 
                <div className="movie-poster">
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                    <div className="movie-overlay">
                        <button className={`favorite-btn ${favorite ? "active": ""}`} onClick={onFavClick}>♥</button>
                    </div>
                </div>

            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.release_date?.split("-")[0]}</p>
            </div>



        </div>
    )

}


export default MovieCard