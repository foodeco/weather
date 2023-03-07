import { useEffect, useState } from "react";
import ShowTemp from "./ShowTemp";

export default function CurrentLocation() {
    const [loc, setLoc] = useState({});
    useEffect(()=>{
        navigator.geolocation.getCurrentPosition((pos) => {
            console.log(pos);
            setLoc({lat:pos.coords.latitude, lon:pos.coords.longitude})
            //[pos.coords.latitude, pos.coords.longitude]
            
        });
    }, [])
  
    return (
        <>
            {loc.lon !== undefined ? <ShowTemp loc={loc} /> : 'Loading...'}
        </>
    )
}