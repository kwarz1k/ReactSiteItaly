import "../Page1/P1_secc3.scss"
import { Photo } from "../../Photo"
import { useState, useEffect } from 'react';
const items = [
    { id: 1, title: "Spaghetti", category: "Dinner", imageName: "spaget" },
  { id: 2, title: "Gnocchi", category: "Lunch", imageName: "gnoy" },
  { id: 3, title: "Rovioli", category: "Lunch", imageName: "rovi" },
  { id: 4, title: "Penne Alla Vodka", category: ["Dinner", "Drink"], imageName: "pena" },
  { id: 5, title: "Risoto", category: ["Dessert", "Drink", "Lunch"], imageName: "risot" },
  { id: 6, title: "Splitza Signature", category: ["Dessert", "Drink"] , imageName: "Gunna" }
  ];
export default function App(){
        const [activeTab, setActiveTab] = useState("all");
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    if (activeTab === "all") {
      setVisibleItems(items);
    } else {
      setVisibleItems(items.filter(item => item.category.includes(activeTab)));
    }
  }, [activeTab]);
    return(
        <>
        <section className="Saint-Petersburg">
            <div className="Madison">
                <h1>Our popular menu</h1>
                <div className="lenta">
                    <button onClick={() => setActiveTab("all")} className="nopka">All category</button>
                    <button onClick={() => setActiveTab("Dinner")} className="nopka">Dinner</button>
                    <button onClick={() => setActiveTab("Lunch")} className="nopka">Lunch</button>
                    <button onClick={() => setActiveTab("Dessert")} className="nopka">Dessert</button>
                    <button onClick={() => setActiveTab("Drink")} className="nopka">Drink</button>
                </div>
                 <div className="leva2k">
            {visibleItems.map(item => (
              <div className="kont" key={item.id}>
                <img src={Photo[item.imageName]} alt={item.title} />
                <h1>{item.title}</h1>
                <img src={Photo.endless} alt="rating" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.</p>
                <div className="Hodinskaya">
                  <h1>$12.05</h1>
                  <button className="nopka">Order now</button>
                </div>
              </div>
            ))}
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