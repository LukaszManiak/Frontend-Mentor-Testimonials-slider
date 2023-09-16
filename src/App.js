import React from "react";

const images = require.context("./images", true);
const imageList = images.keys().map((image) => images(image));
console.log(imageList[2]);

const workersList = {
  1: {
    name: "Tanya Sinclair",
    role: "UX Engineer",
    quote: `“ I’ve been interested in coding for a while but never taken the jump,
    until now. I couldn’t recommend this course enough. I’m now in the job
    of my dreams and so excited about the future. ”`,
  },
  2: {
    name: "John Tarkpor",
    role: "Junior Front-end",
    quote: `“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”`,
  },
};

function App() {
  return (
    <div className="main-container">
      <Worker />
    </div>
  );
}

function Worker() {
  return (
    <div>
      <div className="quote-text-container">
        <p>{workersList[1].quote}</p>
        <p>
          <b>{workersList[1].name}</b> <span>{workersList[1].role}</span>
        </p>
      </div>
      <div className="image-container">
        <img src={imageList[4]} alt="" />
        <button>
          <img src="" alt="" />
        </button>
        <button>
          <img src="" alt="" />
        </button>
      </div>
    </div>
  );
}

export default App;
