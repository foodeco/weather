import { Link } from "react-router-dom";
import Search from "./Search";

export default function Headers() {
    return (
        <>
            <Link to="/"><h1>날씨 정보 알리미</h1></Link>
            <Search />
        </>
    );
}