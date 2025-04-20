import React from "react";
import { useSelector } from "react-redux";
const Displaycharater = ({ scrollToTarget }) => {
  let ToggleMode = useSelector((store) => store.ToggleMode.darkMode);
  return (
    <>
      <div className="container d-flex flex-column flex-md-row align-items-start justify-content-between text-center text-md-start">
        <div className="main-content-div ">
          <h2 style={{ color: "#6f2dbd" }} className="heading">
            Let the Quran Speak to Your Heart
          </h2>
          <p style={{ color: " #666666" }} className="para">
            No matter what you’re going through, the Quran has a message for
            you. Just choose your mood, and let the divine words bring clarity,
            comfort, and inspiration.
          </p>
          <div className={`card border-0 ${!ToggleMode ? "bg-black" : "bg-white"} `}>
            <div className="loader ">
              <p >What your Mood Today!</p>
              <div className="words" >
                <span className="word">Happy</span>
                <span className="word">Sad</span>
                <span className="word">Anxious</span>
                <span className="word">Thankfull</span>
                <span className="word">Angry</span>
              </div>
            </div>
          </div>

          {/* <button
            style={{ color: "#6f2dbd" }}
         
            className="btn fw-bold  border border-1 px-2 "
            id="started"
          >
          
          </button> */}
          <button className="btn p-sm-1 p-md-1 p-lg-1 mt-1" id="started" onClick={scrollToTarget}>
            {" "}
            Get started
          </button>
        </div>

        {/* Main Right Side Div */}

        <div className="img-cont ">
          
          <img
            src="/public/Images/MainCharacter.png"
            className="img-fluid men-img person"
          />
        </div>
      </div>
    </>
  );
};

export default Displaycharater;
