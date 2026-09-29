import "../Page1/P1_secc3.scss"
import { Photo } from "../../Photo"
export default function App(){
    return(
        <>
        <section className="Saint-Petersburg">
            <div className="Madison">
                <h1>Our popular menu</h1>
                <div className="lenta">
                    <button className="nopka">All category</button>
                    <button className="nopka">Dinner</button>
                    <button className="nopka">Lunch</button>
                    <button className="nopka">Dessert</button>
                    <button className="nopka">Drink</button>
                </div>
                <div className="leva2k">
                    <div className="kont">
                        <img src={Photo.spaget}></img>
                        <h1>Spaghetti</h1>
                        <img src={Photo.endless}></img>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam. </p>
                        <div className="Hodinskaya">
                            <h1>$12.05</h1>
                            <button className="nopka">Order now</button>
                        </div>
                    </div>
                    <div className="kont">
                        <img src={Photo.gnoy}></img>
                        <h1>Gnocchi</h1>
                        <img src={Photo.endless}></img>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam. </p>
                        <div className="Hodinskaya">
                            <h1>$12.05</h1>
                            <button className="nopka">Order now</button>
                        </div>
                    </div>
                    <div className="kont">
                        <img src={Photo.rovi}></img>
                        <h1>Rovioli</h1>
                        <img src={Photo.endless}></img>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam. </p>
                        <div className="Hodinskaya">
                            <h1>$12.05</h1>
                            <button className="nopka">Order now</button>
                        </div>
                    </div>
                    <div className="kont">
                        <img src={Photo.pena}></img>
                        <h1>Penne Alla Vodak</h1>
                        <img src={Photo.endless}></img>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam. </p>
                        <div className="Hodinskaya">
                            <h1>$12.05</h1>
                            <button className="nopka">Order now</button>
                        </div>
                    </div>
                    <div className="kont">
                        <img src={Photo.risot}></img>
                        <h1>Risoto</h1>
                        <img src={Photo.endless}></img>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam. </p>
                        <div className="Hodinskaya">
                            <h1>$12.05</h1>
                            <button className="nopka">Order now</button>
                        </div>
                    </div>
                    <div className="kont">
                        <img src={Photo.Gunna}></img>
                        <h1>Splitza Signature</h1>
                        <img src={Photo.endless}></img>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam. </p>
                        <div className="Hodinskaya">
                            <h1>$12.05</h1>
                            <button className="nopka">Order now</button>
                        </div>
                    </div>
                </div>
                <div className="leto2026">
                    <div className="strlk">
                        <p>❮</p>
                    </div>
                    <div className="cifra">
                        <p>1</p>
                    </div>
                    <div className="cifra">
                        <p>2</p>
                    </div>
                    <div className="cifra">
                        <p>3</p>
                    </div>
                    <div className="toch">
                        <p>. . .</p>
                    </div>
                    <div className="strlk">
                        <p>❯</p>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}