import "../Page1/P1_secc6.1.scss"
import { Photo } from "../../Photo"
import { useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react'
export default function App(){
    const [open, setOpen] = useState(null);
  const toggle = (n) => setOpen(open === n ? null : n);
  const itemClass = (n) => (open === n ? "faq__item faq__item--open" : "faq__item");
    return(
        <>
        <section className="FAQ">
            <div className="centr">
                <h1>FAQ</h1>
                <div className={itemClass(1)}>
                    <button className="faq__question" onClick={() => toggle(1)} aria-expanded={open === 1}>
                        <span>How long does delivery take?</span>
                        <span className="faq__icon">+</span>
                    </button>
                    <div className="faq__answer">
                    <div className="faq__answer-inner">
                        <p>
                        Usually 30–45 minutes, depending on the distance and how busy the
                        kitchen is. You will see the estimated time before you confirm
                        the order.
                    </p>
                    </div>
                    </div>
                </div>
                <div className={itemClass(2)}>
                    <button className="faq__question" onClick={() => toggle(2)} aria-expanded={open === 2}>
                        <span>How long does delivery take?</span>
                        <span className="faq__icon">+</span>
                    </button>
                    <div className="faq__answer">
                    <div className="faq__answer-inner">
                        <p>
                        Usually 30–45 minutes, depending on the distance and how busy the
                        kitchen is. You will see the estimated time before you confirm
                        the order.
                    </p>
                    </div>
                    </div>
                </div>
                <div className={itemClass(3)}>
                    <button className="faq__question" onClick={() => toggle(3)} aria-expanded={open === 3}>
                        <span>How long does delivery take?</span>
                        <span className="faq__icon">+</span>
                    </button>
                    <div className="faq__answer">
                    <div className="faq__answer-inner">
                        <p>
                        Usually 30–45 minutes, depending on the distance and how busy the
                        kitchen is. You will see the estimated time before you confirm
                        the order.
                    </p>
                    </div>
                    </div>
                </div>
                <div className={itemClass(4)}>
                    <button className="faq__question" onClick={() => toggle(4)} aria-expanded={open === 4}>
                        <span>How long does delivery take?</span>
                        <span className="faq__icon">+</span>
                    </button>
                    <div className="faq__answer">
                    <div className="faq__answer-inner">
                        <p>
                        Usually 30–45 minutes, depending on the distance and how busy the
                        kitchen is. You will see the estimated time before you confirm
                        the order.
                    </p>
                    </div>
                    </div>
                </div>
                <div className={itemClass(5)}>
                    <button className="faq__question" onClick={() => toggle(5)} aria-expanded={open === 5}>
                        <span>How long does delivery take?</span>
                        <span className="faq__icon">+</span>
                    </button>
                    <div className="faq__answer">
                    <div className="faq__answer-inner">
                        <p>
                        Usually 30–45 minutes, depending on the distance and how busy the
                        kitchen is. You will see the estimated time before you confirm
                        the order.
                    </p>
                    </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}