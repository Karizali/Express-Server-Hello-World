
import React,{ useState } from "react";
import './index.css';

const Home=()=>{
    const [isLit,setLit]=useState(true);
    function toggle(){
        setLit(!isLit);
    }
    return <>
        <div className={`room ${(isLit)?"dark":"lit"}`}>This is {(isLit)?"Dark":"Lit"}</div>
        <button onClick={toggle}>Toggle</button>
    </>
}
export default Home;