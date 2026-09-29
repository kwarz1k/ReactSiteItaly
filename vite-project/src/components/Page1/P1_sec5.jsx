import "../Page1/P1_secc5.scss"
import { Photo } from "../../Photo"
export default function App(){
    return(
        <>
            <section className="Agutin">
                <div className="Centr">
                    <h1>Our greatest chef</h1>
                    <div className="kart">
                        <div className="kont">
                            <img src={Photo.twitch}></img>
                            <h1>Betran Komar</h1>
                            <p>Head chef</p>
                        </div>
                        <div className="kont">
                            <img src={Photo.fraer}></img>
                            <h1>Ferry Sauwi</h1>
                            <p>Chef</p>
                        </div>
                        <div className="kont">
                            <img src={Photo.danila}></img>
                            <h1>Iswan Dracho</h1>
                            <p>Chef</p>
                        </div>
                    </div>
                    <button className="knopka">View All</button>
                </div>
            </section>
        </>
    )
}