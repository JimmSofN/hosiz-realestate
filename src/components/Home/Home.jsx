import "./Home.css";

export default function Home() {
    return (
        <section className="home section" id="halaman">
            <div className="home__container container grid">
                <div className="home__data">
                    <h1 className="home__title">
                        Rumah <br /> premium<br />Terbaru
                    </h1>
                    <p className="home__description">
                        Temukan berbagai variasi rumah pilihan Anda yang membuat
                        suasana keluarga yang nyaman dan harmonis.
                    </p>
                    <form action="" className="home__search">
                        <i className="bx bxs-map"></i>
                        <input type="search" placeholder="Cari Berdasarkan Lokasi..." className="home__search-input" />
                        <button className="button">Cari</button>
                    </form>

                    <div className="home__value">
                        <div>
                            <h1 className="home__value-number">
                                6K <span>+</span>
                            </h1>
                            <span className="home__value-description">
                                Produk <br /> Premium
                            </span>
                        </div>
                        <div>
                            <h1 className="home__value-number">
                                2K <span>+</span>
                            </h1>
                            <span className="home__value-description">
                                Pelanggan <br /> Bahagia
                            </span>
                        </div>
                        <div>
                            <h1 className="home__value-number">
                                9K <span>+</span>
                            </h1>
                            <span className="home__value-description">
                                Produk <br /> Terpercaya
                            </span>
                        </div>
                    </div>
                </div>

                <div className="home__images">
                    <div className="home__orbe"></div>
                    <div className="home__img">
                        <img src="public/images/home.jpg" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}
