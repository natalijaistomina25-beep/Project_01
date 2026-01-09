import { useState } from "react";
import Button from "../ui/Button/Button";
import style from "./Counter.module.css"

function Counter(){
    const [count, setCount] = useState<number>(0);

    function handlePlusOne(){
        setCount((prev) => prev+1);
        //setCount(count+1);
        
    }
    function handleMinusTwo(){
        setCount((prev) => prev-2);
    }
    function handleResetCounter() {
        setCount (0);
    }
    function handleRandom(){
        const randomNum = Math.floor(Math.random() * 11);
        setCount(randomNum);
    }

    

return (
<section className={style.container}>
    <h2 className={style.heading}>Counter</h2>
    Count : {count}
    <button type="button" onClick={handlePlusOne}>
        +1
        </button>
   
    <Button onClick={handleMinusTwo} child="-2"/>
     <Button onClick={handleResetCounter} child="Reset"/>
     <Button onClick={handleRandom} child="Get random"/>
    
    {/* <button type="button" onClick={handleRandom} >
        Get Random
        </button> */}
    </section>
    );
}

export default Counter;