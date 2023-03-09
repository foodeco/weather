
import { Link } from "react-router-dom";
import dummy from "../data/dummy.json"
import ShowTemp from "./ShowTemp";

export default function Map() {
    
    console.log(dummy.nations.length)
    return (
    <>
        <div className="map">
            <div className="nation-map">
                {dummy.nations.map(city => {
                    let temp = ShowTemp(city.lat, city.lon);
                    return (
                    <Link to={`/search/${city.loc}`} className={`zone ${city.loc}`}>
                        <div>{city.loc}</div>
                        <div>{temp}</div>
                    </Link>);
                })}
            </div>
        </div>
    </>
    )
}