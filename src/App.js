import React, { useState } from "react";

//workers list
const workersList = [
  {
    name: "Tanya Sinclair",
    role: "UX Engineer",
    quote: `“ I’ve been interested in coding for a while but never taken the jump,
    until now. I couldn’t recommend this course enough. I’m now in the job
    of my dreams and so excited about the future. ”`,
    imgSrc: require("./images/image-tanya.jpg"),
  },
  {
    name: "John Tarkpor",
    role: "Junior Front-end",
    quote: `“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”`,
    imgSrc: require("./images/image-john.jpg"),
  },
];

function App() {
  return (
    <>
      <Worker />
    </>
  );
}

//worker component
function Worker() {
  const [slide, setSlide] = useState(0);
  console.log(slide, workersList.length);

  //handle slider buttons
  function handlePrev() {
    if (slide > 0) setSlide((s) => s - 1);
  }
  function handleNext() {
    slide < workersList.length - 1
      ? setSlide((s) => s + 1)
      : setSlide(workersList.length - 1);
  }

  //worker
  return (
    <>
      <div className="worker-container">
        <div className="quote-text-container">
          <p>{workersList[+slide].quote}</p>
          <p>
            <b>{workersList[+slide].name}</b>{" "}
            <span>{workersList[+slide].role}</span>
          </p>
        </div>
        <div className="image-container">
          <img
            className="worker-image"
            src={workersList[+slide].imgSrc}
            alt=""
          />
          <div className="buttons-container">
            <button onClick={() => handlePrev()} className="prev-btn">
              <img src="" alt="" />
            </button>
            <button onClick={() => handleNext()} className="next-btn">
              <img src="" alt="" />
            </button>
          </div>
        </div>
      </div>
      <img src="./images/" alt="" />
    </>
  );
}

export default App;
