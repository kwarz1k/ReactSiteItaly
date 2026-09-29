import "../Page1/P1_secc6.scss"
import { Photo } from "../../Photo"
export default function App(){
    return(
        <>
            <section className="Brigada">
                <div className="Centr">
                    <h1>Our customers say</h1>
                    <div className="Girl">
                        <img src={Photo.brigada}></img>
                        <h1>Starla Virgoun</h1>
                        <p>Financial advisor</p>
                        <div className="text">
                            <p>“</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ultricies at eleifend proin. Congue nibh nulla malesuada ultricies nec quam </p>
                        <div className="text1">
                            <p>„</p>
                        </div>
                    </div>
                    <div className="agusha">
                        <img src={Photo.raz}></img>
                        <img src={Photo.dva}></img>
                        <img src={Photo.tri}></img>
                        <img src={Photo.four}></img>
                        <img src={Photo.five}></img>
                        <img src={Photo.six}></img>
                        <img src={Photo.pudge}></img>
                    </div>
                </div>
            </section>
        </>
    )
}