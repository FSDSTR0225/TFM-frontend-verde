import React, { useEffect, useState } from "react";
import "./CounterNumber.css";

export default function CounterNumber({ countLimit, speedTime }) {
  const [numberCounter, setnNumberCounter] = useState(0);
  useEffect(() => {
    let countInterval = setInterval(() => {
      setnNumberCounter((prevCount) => prevCount + 1);
    }, speedTime);

    if (numberCounter === countLimit) {
      clearInterval(countInterval);
    }

    return () => clearInterval(countInterval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [numberCounter]);

  return (
    <div className="CounterNumber">
      <span className="CounterNumber__counter">counter : {numberCounter}</span>
    </div>
  );
}
