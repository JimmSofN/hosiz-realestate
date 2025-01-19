import { Swiper, SwiperSlide } from "swiper/react"
import { popularData } from "../../data/data"
import { Navigation } from 'swiper/modules';
import "./Popular.css"

import 'swiper/css';
import 'swiper/css/navigation';

export default function Popular() {
    return (
        <section className="popular section" id="popular">
            <div className="container">
                <span className="section__subtitle">Pilihan Terbaik</span>
                <h2 className="section__title">
                    Rumah Populer<span>.</span>
                </h2>

                {/* Swiper */}
                <Swiper className="popular__container"
                    spaceBetween={32}
                    grabCursor={true}
                    centeredSlides={true}
                    navigation={{
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev"
                    }}
                    slidesPerView={"auto"}
                    loop={true}
                    modules={[Navigation]}
                >
                    {/* <SliderButtons /> */}

                    {popularData.map((item, index) => (
                        <SwiperSlide className="popular__card" key={index}>
                            <img className="popular__img" src={item.image} alt="Popular Image Alt" />
                            <div className="popular__data">
                                <h2 className="popular__price">
                                    <span>Rp. </span>{item.price}
                                </h2>
                                <h3 className="popular__title">
                                    {item.title}
                                </h3>
                                <p className="popular__descriptiom">
                                    {item.description}
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                    <div className="swiper-button-prev">
                        <i className="bx bx-chevron-left"></i>
                    </div>
                    <div className="swiper-button-next">
                        <i className="bx bx-chevron-right"></i>
                    </div>
                </Swiper>
            </div>

        </section>
    )
}

