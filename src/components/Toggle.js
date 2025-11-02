import { useState } from "react";

function Toggle() {

  const [isOff, setIsOff] = useState(true);
  const color = isOff ? "white" : "red";
  function handleClick(){
     setIsOff(!isOff)
  }

  return <button style={{ background: color }} onClick={handleClick}>
    {isOff ? "OFF" : "ON"}
    </button>;
}

export default Toggle;
