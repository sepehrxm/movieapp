import { Link } from 'react-router-dom'
import star from './star.png'
import './trend.css'

    
const Trend = (props) => {
        
  return (
    <>
    
    {props.isLoading? <h1 id='load'>Loading . . .</h1> : (
    <div id="trending">
            <h1 id='tHead'>#Trending</h1>
            <div className='trends'>{props.data.map((movie)=>{
                return (
                    <div id="trendCard" key={movie.id}>

                        <div>
                            <img id="trendPoster" src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path} alt="poster" />
                        </div>

                        <div id="trendInfo">

                            <div id="ttitle">

                            <div >
                            <div id='title'><p id='tr'>Title:</p> {movie.title}</div>
                            </div>
                            <div>
                            <div id='release'><p id='tr'>Release date:</p> {movie.release_date || '-- --'}</div>
                            </div>

                            </div>

                            <div id="tvote">
                            <div id="trate">
                            <img id="star" src={star} alt="vote" />
                            <p>{movie.vote_average.toFixed(1)}</p>
                            </div>
                            </div>
                            
                            <div id="tbtn">
                     
                            <Link id='trendMore' to='/movieapp/movie' state={movie.title}>More..</Link>
                            </div>

                        </div>

                        
                    </div>
                )
            })}</div>
        </div>
    )}
    </>
  )
}
export default Trend