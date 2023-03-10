import { useEffect, useState } from "react";
import Forecast from "./Forecast";

export default function ShowTemp(lat, lon) {
    const APIkey = 'cf2fc2a2d2abeffb1f3b5b3835ef4c48'
    const [temp, setTemp] = useState();
    useEffect(()=>{
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}&units=metric&lang=kr`)
        .then(res => {return res.json()}).then(data => {
            //console.log(data["main"]["temp"])
            //console.log(data.name)
            console.log(data)
            setTemp(data.main.temp);
        })
    }, [lat, lon]);
    
    return temp;
}