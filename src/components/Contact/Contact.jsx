import "./contact.css"
import { contactData } from "../../data/data.js"

export default function Contact() {
    return (
        <section className="contact section" id="kontak">
            <div className="contact__container container grid">
                <div className="contact__images">
                    <div className="contact__orbe"></div>

                    <div className="contact__img">
                        <img src="public/images/contact.jpg" alt="" />
                    </div>
                </div>

                <div className="contact__content">
                    <div className="contact__data">
                        <span className="section__subtitle">Hubungi Kami</span>
                        <h2 className="section__title">
                            Easy to Contact us<span>.</span>
                        </h2>
                        <p className="contact__description">
                            Cras ullamcorper, massa sed dapibus luctus, ex lorem imperdiet dui, vitae tristique sapien ipsum a massa. Curabitur quis molestie nulla. Quisque viverra,
                            lacus eu tempor euismod, ex nisl tempor lectus, et molestie libero risus eget turpis.
                        </p>
                    </div>

                    <div className="contact__card">
                        {/* Card Box*/}
                        {contactData.map((item, index) => {
                            return (
                                <div className="contact__card-box" key={index}>
                                    <div className="contact__card-info">
                                        <i className={`${item.icon}`}></i>
                                        <div>
                                            <h3 className="contact__card-title">
                                                {item.title}
                                            </h3>
                                            <p className="contact__card-description">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>

                                    <button className="button contact__card-button">
                                        {item.button}
                                    </button>
                                </div>
                            )
                        })}
                    </div>

                </div>
            </div>
        </section>
    )
}