import { footerData, footerSocialData } from "../../data/data"
import "./Footer.css"

export default function Footer() {
    return (
        <footer className="footer section">
            <div className="footer__container container grid">
                <div>
                    <a href="" className="footer__logo">
                        Hosiz <i className="bx bxs-home-alt-2"></i>
                    </a>
                    <p className="footer__description">
                        Nullam ac ultricies justo.<br />
                        Donec ut vestibulum lacus.
                    </p>
                </div>

                <div className="footer__content">
                    {footerData.map((item, index) => {
                        return (
                            <div key={index}>
                                <h3 className="footer__title">{item.title}</h3>

                                <ul className="footer__links">
                                    {item.links.map((link, linkIndex) => (
                                        <li key={linkIndex}>
                                            <a href={link.href} className="footer__link">{link.text}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )
                    })}

                    <div>
                        <h3 className="footer__title">Follow Us</h3>
                        <ul className="footer__social">
                            {footerSocialData.map((item, index) => (
                                <a href={item.href} target="_blank" className="footer__social-link" key={index}>
                                    <i className={`${item.icon}`}></i>
                                </a>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Footer Info Container */}
            <div className="footer__info container">
                <span className="footer__copy">
                    &#169; Jimmy Putra Alam. All right reserved
                </span>
                <div className="footer__privacy">
                    <a href="#">Terms & Agreement</a>
                    <a href="#">Privacy Policy</a>
                </div>
            </div>
        </footer>
    )
}