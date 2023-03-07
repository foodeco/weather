import { useState, useRef } from "react";
import { Link } from "react-router-dom";

export default function Home() {
    const [val, setVal] = useState();
    const value = useRef();

    function cityName() {
      setVal(value.current.value);
    }
    console.log(val)
    return (
        <>
            <p>
                <input type="text" id="name" ref={value} onChange={cityName}/>
                <Link to={`/search/${val}`}>
                    <button>submit</button>
                </Link>
            </p>
        </>
    );
}