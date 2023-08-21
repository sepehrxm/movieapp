import { NavLink } from "react-router-dom"
import './navbar.css'
import logo1 from './logo1.png'

const Navbar = () => {
  return (
    <>
    <nav>
        <div>
            <img id="logo" src={logo1} alt="logo"/>
        </div>
        <div>
            <ul>
            <li>
                <NavLink className='l1' id="link" to='/movieapp/' style={({ isActive }) => ({ color: isActive ? "red" : "white" })} >Home</NavLink>
            </li>
            <li>
            <NavLink id="link" to='/movieapp/contact' style={({ isActive }) => ({ color: isActive ? "red" : "white" })} >Contact</NavLink>
            </li>
            <li>
            <NavLink className='l3' id="link"  to='/movieapp/about' style={({ isActive }) => ({ color: isActive ? "red" : "white" })} >About</NavLink>
            </li>
            </ul>
        </div>
        
    </nav>
    </>
  )
}
export default Navbar