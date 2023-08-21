import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import axios from "axios"
import './movie.css'

const Movie = () => {
    
    let location = useLocation()
    let name = location.state

    let [movie, setMovie] = useState({})

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOTdhMWZkNDc4ODE4OTkwZGEyNzdjYzhlOGZkODYwZiIsInN1YiI6IjY0ODA0NDM1ZTI3MjYwMDEwNzIwMWE5OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2yRx1KgEU6F07RPzX1gINlBCsBFaQUdewe6MKi-V-iY'
    }
    }
    let searchData = async () => {

          try {
            let response = await axios(`https://api.themoviedb.org/3/search/movie?query=${name}&include_adult=false&language=en-US&page=1`, options)
            let searchResponse = response.data
            console.log(searchResponse.results)
            setMovie(searchResponse.results[0])
            
          } catch (error) {
            console.log(error.response)
    
          }
          }
          useEffect(()=>{
            searchData()
          },[])

  return (

    <div id='movieCard'>
        <div id="back">
        <div>
            <img id='moviePoster' src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path} alt="poster" />
        </div>

        <div id="movieInfo">
            <div id="info">
                <div>
                <div id="title" className="row"><p id="def">Title:</p> {movie.title}</div>
                <div id="lang" className="row"><p id="def">Language:</p> {movie.original_language}</div>

                </div>

                <div>
                <div id="release" className="row"><p id="def">Release date:</p> {movie.release_date}</div>
                <div id="vote" className="row"><p id="def">Rate:</p> {movie.vote_average}</div>

                </div>
            </div>

            <div>
            <div id="overview"><p id="def">Overview:</p> {movie.overview}</div>

            </div>
        </div>

        </div>
    </div>
  )
}
export default Movie