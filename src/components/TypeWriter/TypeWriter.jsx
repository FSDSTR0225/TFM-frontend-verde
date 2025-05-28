import React from "react";
import "./TypeWriter.css";
import Typewriter from "typewriter-effect/dist/core";

export default function TypeWriter() {
  var typeItem = document.getElementById("typeWriter__Text");

  var typewriter = new Typewriter(typeItem, {
    loop: true,
    delay: 75,
  });

  typewriter
    .pauseFor(2500)
    .typeString("A simple yet powerful native javascript")
    .pauseFor(300)
    .deleteChars(10)
    .typeString("<strong>JS</strong> plugin for a cool typewriter effect and ")
    .typeString(
      '<strong>only <span style="color: #27ae60;">5kb</span> Gzipped!</strong>'
    )
    .pauseFor(1000)
    .start();
  return (
    <div className="TypeWriter">
      <div className="TypeWriter__text" id="typeWriter__Text">Typewriter</div>
    </div>
  );
}
