import "../Page1/P1_secc1.scss"
import { Photo } from "../../Photo"
export default function App(){
    return(
        <>
            <section className="Nacalo2">
                <div className="Centr2">
                    <div className="Raz">
                        <div className="Res"><p>Restauran</p></div>
                        <h1>Italian Cuisine</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales senectus dictum arcu sit tristique donec eget.</p>
                        <div className="Knokpi">
                            <button className="taz">Order now</button>
                            <button className="vaz">Reservation</button>
                        </div>
                    </div>
                    <div className="Dva">
                        <img src={Photo.vkusno}></img>
                    </div>
                </div>
            </section>
        </>
    )
}