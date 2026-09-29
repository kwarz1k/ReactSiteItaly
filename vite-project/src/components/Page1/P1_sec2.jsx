import "../Page1/P1_secc2.scss"
import { Photo } from "../../Photo"
export default function App(){
    return(
        <>
            <section className="Moscow">
                <div className="Centr">
                    <div className="Raz">
                        <img src={Photo.lazano}></img>
                    </div>
                    <div className="Dva">
                        <h1>Welcome to <span>delizioso</span></h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ultricies at eleifend proin. Congue nibh nulla malesuada ultricies nec quam </p>
                        <button className="Tigr">See our menu</button>
                    </div>
                </div>
            </section>
        </>
    )
}