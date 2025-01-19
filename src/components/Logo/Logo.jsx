import { logoData } from "../../data/data"
import "./Logo.css"
export default function Logo() {
    return (
        <div className="logos section">
            <div className="logos__container container grid">
                {logoData.map((item, index) => {
                    return (
                        <div className="logos__img" key={index}>
                            <img src={item.image} alt="Logo Image" />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}