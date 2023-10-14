import { WiCloudy } from "react-icons/wi";
import SvgIcon from "../ui/sprite/Svg-icon";
import './wether.scss';

export default function Weather({ wether }) {
    return (
        <div className={`weather__item ${wether.colClass}`}>
            <WiCloudy />
            <p className="weather__city">{wether.city}</p>
            <div className="weather__wrapper">
                <p className="weather__temp">{wether.temp} ºC</p>
                <SvgIcon iconId={wether.iconId} className="weather__img" />
            </div>
        </div>
    );
}
