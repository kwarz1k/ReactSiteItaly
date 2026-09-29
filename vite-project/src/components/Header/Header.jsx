import { Link } from "react-router-dom"
import { Photo } from "../../Photo"
import "./Header.scss"
export default function App(){
    return(
        <>
            <header>
                <nav>
                    <div className="foto">
                        <img src={Photo.galva}></img>
                    </div>
                    <ul>
                        <li><Link to="/Page1">Home</Link></li>
                        <li><Link to="/Page2">Menu</Link></li>
                        <li><Link to="/Page3">About Us</Link></li>
                        <li><a href="">Order online</a></li>
                        <li><a href="">Reservation</a></li>
                        <li><a href="">Contact Us</a></li>
                    </ul>
                    <div className="yezzy">
                        <img src={Photo.cart}></img>
                        <button className="kut">Log in</button>
                    </div>
                </nav>
            </header>
        </>
    )
}