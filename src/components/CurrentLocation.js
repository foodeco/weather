import { useEffect, useState } from "react";

export default function CurrentLocation() {
    //const [loc, setLoc] = useState([]);
    const [temp, setTemp] = useState();
    useEffect(()=>{
        navigator.geolocation.getCurrentPosition((pos) => {
            console.log(pos);
            //setLoc([pos.coords.latitude, pos.coords.longitude]);
            //[pos.coords.latitude, pos.coords.longitude]
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&appid=cf2fc2a2d2abeffb1f3b5b3835ef4c48&units=metric&lang=kr`)
            .then(res => {return res.json()}).then(data => {
            //console.log(data["main"]["temp"])
            //console.log(data.name)
            console.log(data)
            setTemp(data.main.temp);
            })
        })
    }, []);
    return (
        <>{temp !== undefined ? `현재 위치한 곳의 기온은 ${temp}` : 'Loading...'}</>
    );
}