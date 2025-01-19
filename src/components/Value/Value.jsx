import { useState } from "react"
import { accordionData } from "../../data/data"
import "./Value.css"

export default function Value() {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section className="value section" id="nilai">
            <div className="value__container container grid">
                <div className="value__images">
                    <div className="value__orbe"></div>

                    <div className="value__img">
                        <img src="public/images/value.jpg" alt="" />
                    </div>
                </div>

                {/* Value Content */}
                <div className="value__content">
                    <div className="value__data">
                        <span className="section__subtitle">Value Kami</span>
                        <h2 className="value__title">
                            Nilai yang kami tawarkan<span>.</span>
                        </h2>
                        <p className="value__description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquam lectus a metus porta, sed pulvinar nunc vulputate.
                            Donec ullamcorper faucibus odio at varius. Vivamus at est ut orci malesuada facilisis.
                        </p>
                    </div>

                    <div className="value__accordion">
                        {/* Value Accordion */}
                        {accordionData.map((item, index) => {
                            const isOpen = openIndex === index;

                            return (
                                <div className={`value__accordion-item ${isOpen ? "accordion-open" : ""}`} key={index}>
                                    <header className="value__accordion-header" onClick={() => handleToggle(index)}>
                                        <i className={`${item.icon} value__accordion-icon`}></i>
                                        <h3 className="value__accordion-title">{item.title}</h3>
                                        <div className="value__accordion-arrow">
                                            <i className="bx bxs-down-arrow"></i>
                                        </div>
                                    </header>

                                    <div
                                        className="value__accordion-content"
                                        style={{ height: isOpen ? 'auto' : '0px', overflow: 'hidden' }}>
                                        <p className="value__accordion-description">{item.description}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section >
    )
}