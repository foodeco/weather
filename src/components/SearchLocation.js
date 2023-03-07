import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShowTemp from "./ShowTemp";

export default function SearchLocation() {
    const APIkey = 'cf2fc2a2d2abeffb1f3b5b3835ef4c48'
    const [loc, setLoc] = useState({lat:0, lon:0, local:''});
    const {city} = useParams();
    useEffect(()=>{
        fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${APIkey}`)
        .then(res => {
            return res.json()
        }).then(data => {
            if(data.length === 0) {
                alert('올바른 이름을 입력하세요.');
                return;
            }
            console.log(1)
            setLoc({lat:data[0]["lat"], lon:data[0]["lon"], local:data[0]["local_names"]["ko"]});
            
        });
    }, [city])



    return (
        <>
            <ShowTemp loc={loc}/>
        </>
    );
}