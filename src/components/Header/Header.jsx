import "./Header.css";
import { useState, useEffect } from "react";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setIsDarkTheme(savedTheme === 'dark');
            document.body.classList.toggle('dark-theme', savedTheme === 'dark');
        }
    }, []);

    const toggleTheme = () => {
        setIsDarkTheme(prevTheme => {
            const newTheme = !prevTheme ? 'dark' : 'light';
            document.body.classList.toggle('dark-theme', newTheme === 'dark');
            localStorage.setItem('theme', newTheme);
            return !prevTheme;
        });
    };

    const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
        scrollActive();
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    })

    const scrollActive = () => {
        const sections = document.querySelectorAll('section[id]');
        const scrollDown = window.scrollY;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight,
                sectionTop = current.offsetTop - 58,
                sectionId = current.getAttribute('id'),
                sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

            if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
                sectionsClass.classList.add('active-link');
            } else {
                sectionsClass.classList.remove('active-link');
            }
        });
    };

    return (
        <header className={`header ${isScrolled ? "scroll-header" : ""}`}>
            <nav className="nav container">
                <a href="#" className="nav__logo">
                    Hosiz<i className="bx bxs-home-alt-2"></i>
                </a>

                <div className="nav__menu">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a href="#halaman" className="nav__link">
                                <i className="bx bx-home-alt-2"></i>
                                <span>Halaman</span>
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#popular" className="nav__link">
                                <i className="bx bx-building-house"></i>
                                <span>Residen</span>
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#nilai" className="nav__link">
                                <i className="bx bx-award"></i>
                                <span>Nilai</span>
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#kontak" className="nav__link">
                                <i className="bx bx-phone"></i>
                                <span>Kontak</span>
                            </a>
                        </li>
                    </ul>
                </div>

                {/*Theme Change Button*/}
                <i onClick={toggleTheme} className={`${isDarkTheme ? 'Dark Theme bx bx-sun' : 'bx bx-moon'} change-theme`} id="theme-button"></i>

                <a href="#" className="button nav__button">
                    Langganan
                </a>
            </nav>
        </header>
    )
}


