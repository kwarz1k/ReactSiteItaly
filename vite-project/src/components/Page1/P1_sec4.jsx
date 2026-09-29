import "../Page1/P1_secc4.scss"
import { Photo } from "../../Photo"
export default function App(){
    return(
        <>
            <section className="Nileto">
                <div className="centr">
                    <img src={Photo.simple}></img>
                    <div className="pravo">
                        <h1>Let's reserve <span>a table</span></h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ultricies at eleifend proin. Congue nibh nulla malesuada ultricies nec quam </p>
                        <button className="AYF">Reservation</button>
                    </div>
                </div>
            </section>
        </>
    )
}