import './App.css';
import axios from 'axios';
import { Route, Routes, NavLink } from "react-router-dom"
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Navbar from './Navbar';
import Not from './Not';
import Footer from './Footer';
import Movie from './Movie';


function App() {
  // let [isLoading , setIsLoading] = useState(false)
  // let [isError, setIsError] = useState(false)
  // let [data, setData] = useState({})
  // let [city, setCity] = useState('')
  // let url = ``;
  
  // let fetchData = async (e) => {
    
    // if(e.key === 'Enter'){
    //   try {
    //     setIsLoading(true)
    //     let response = await axios(url)
    //     let data = response.data
    //     setData(data)
    //     setCity('')
    //     setIsLoading(false)
        
    //   } catch (error) {
    //     console.log(error.response)
    //     setIsError(true)
    //   }
    //   }
    // }


  return (
    <div className='container'>
    <Navbar/>
    <Routes>
      <Route path="/movieapp/" element={<Home />} />
      <Route path="/movieapp/contact" element={<Contact />} />
      <Route path="/movieapp/about" element={<About />} />
      <Route path="movieapp/movie" element={<Movie />} />
      <Route path="*" element={<Not />} />
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
