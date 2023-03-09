import { useEffect, useState } from "react";

export default function Forecast({loc}) {
    const APIkey = 'cf2fc2a2d2abeffb1f3b5b3835ef4c48'
    const [hours, setHours] = useState([]);
    fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${loc.lat}&lon=${loc.lon}&lang=kr&units=metric&cnt=5&appid=${APIkey}`)
    .then(res => {return res.json()})
    .then(data => {
        setHours(data.list);
        console.log(data)
    })

    return (
        <>
            <tbody>
                {hours.map(hour => {
                    let day = new Date(hour.dt * 1000);
                    return (
                        <>
                            <tr>{day.getMonth()+1}/{day.getDate()}</tr>
                            <td>{day.getHours()}시, {hour.main.temp}도</td>
                        </>
                    )
                })}
            </tbody>
        </>
    );
}