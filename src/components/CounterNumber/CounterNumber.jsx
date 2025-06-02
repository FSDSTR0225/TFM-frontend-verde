import React, { useEffect, useState } from "react";
import "./CounterNumber.css";

export default function CounterNumber({ countLimit, speedTime }) {
  const counterContainer = document.querySelector(".CounterNumber");
  const counter = document.querySelector(".CounterNumber__counter");
  let activated = false;

  // window.addEventListener("scroll", () => {
  //   if (
  //     pageYOffset >
  //       counterContainer.offsetTop - counterContainer.offsetHeight - 200 &&
  //     activated === false
  //   ) {
  //     counter.innerText = 0;
  //     let count = 0;
  //     function updateCount() {
  //       const target = parseInt(counter.dataset.count);
  //       if (count < target) {
  //         count++;
  //         counter.innerText = count;
  //         setTimeout(updateCount, 10);
  //       } else {
  //         counter.innerText = target;
  //       }
  //     }
  //     updateCount();
  //     activated = true;
  //   }
  // });

  // useEffect(() => {
  //   if (activated === true) {
  //     let countInterval = setInterval(() => {
  //       setnNumberCounter((prevCount) => prevCount + 1);
  //     }, speedTime);

  //     if (numberCounter === countLimit) {
  //       clearInterval(countInterval);
  //     }
  //     return () => clearInterval(countInterval);
  //   }

  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [numberCounter, activated]);

  return (
    <div className="CounterNumber">
      <span className="CounterNumber__counter"></span>
    </div>
  );
}
