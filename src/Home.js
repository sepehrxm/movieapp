import { useEffect, useState } from "react";
import axios from "axios";
import Trend from "./Trend";
import star from './star.png'
import List from "./List";



const Home = () => {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOTdhMWZkNDc4ODE4OTkwZGEyNzdjYzhlOGZkODYwZiIsInN1YiI6IjY0ODA0NDM1ZTI3MjYwMDEwNzIwMWE5OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2yRx1KgEU6F07RPzX1gINlBCsBFaQUdewe6MKi-V-iY'
        }
      };
    let url = "https://api.themoviedb.org/3/trending/movie/day?language=en-US"

    let [isLoading , setIsLoading] = useState(false)
    let [isError, setIsError] = useState(false)
    let [data, setData] = useState([])
    let [list, setList] = useState(null)
    let [movie, setMovie] = useState('')

    let searchData = async (e) => {

        if(e.key === 'Enter'){
          try {
            setIsLoading(true)
            let response = await axios(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`, options)
            let searchResponse = response.data
            console.log(searchResponse.results)
            setList(searchResponse.results)
            setMovie('')
            setIsLoading(false)
            
          } catch (error) {
            console.log(error.response)
            setIsError(true)
          }
          }
        }
    
    let fetchData = async () => { 
        try {
          setIsLoading(true)
          let response = await axios(url, options)
          let data = response.data
          console.log(data.results)
          const topSix = data.results.slice(0, 10);
          console.log(topSix)
          setData(topSix)
          setIsLoading(false)
          
        } catch (error) {
          console.log(error.response)
          setIsError(true)
          setIsLoading(false)
        }
        }
      useEffect(()=>{
        fetchData()
      },[])
  
  return (
    <div className="home">
        <div id="searchDiv">
        <p id="vpn">You need a vpn connection to see posters!</p>
        <input id="search" type="text" placeholder="Search a movie" value={movie} onChange={(e) => setMovie(e.target.value)} onKeyDown={searchData}/>
        
        </div>
        {list? <List isLoading={isLoading} list={list} /> : <Trend isLoading={isLoading} data={data}/>}
    </div>
   )
}
export default Home