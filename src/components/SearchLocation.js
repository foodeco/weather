import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card } from "react-bootstrap";
import { CardGroup } from "react-bootstrap";

export default function SearchLocation() {
    const APIkey = 'cf2fc2a2d2abeffb1f3b5b3835ef4c48'
    const [cityName, setCityName] = useState();
    const { city } = useParams();
    const [temp, setTemp] = useState();
    const [hours, setHours] = useState([]);
    useEffect(() => {
        fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${APIkey}`)
            .then(res => {
                return res.json()
            }).then(data => {
                if (data.length === 0) {
                    alert('올바른 이름을 입력하세요.');
                    return;
                }
                console.log(data)
                console.log(data[0].local_names.ko)
                setCityName(data[0].local_names.ko);

                // 기온
                fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${data[0].lat}&lon=${data[0].lon}&appid=${APIkey}&units=metric&lang=kr`)
                    .then(res => { return res.json() }).then(data => {
                        //console.log(data["main"]["temp"])
                        //console.log(data.name)
                        console.log(data)
                        setTemp(data.main.temp);
                    })

                // 기상예보
                fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${data[0].lat}&lon=${data[0].lon}&lang=kr&units=metric&cnt=5&appid=${APIkey}`)
                    .then(res => { return res.json() })
                    .then(data => {
                        setHours(data.list);
                        console.log(data)
                    })
            });
    }, [city])

    return (
        <>
            {cityName}, {temp}
            <CardGroup>
                {hours.map(hour => {
                    let day = new Date(hour.dt * 1000);
                    return (<>
                        <Card>
                            <Card.Img variant="top" src={`http://openweathermap.org/img/w/${hour.weather[0].icon}.png`} />
                            <Card.Body>
                                <Card.Title>{day.getMonth() + 1}/{day.getDate()}</Card.Title>
                                <Card.Text>
                                {day.getHours() >= 12 ? `오후 ${day.getHours()}` : `오전 ${day.getHours()}`}시, {hour.main.temp}도
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">
                                    <p>습도: {hour.main.humidity}%</p>
                                    {hour.weather[0].description}

                                </small>
                            </Card.Footer>
                        </Card>
                    </>)
                })}
            </CardGroup>
        </>
    );
}