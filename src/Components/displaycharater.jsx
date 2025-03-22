import React from "react";

const Displaycharater = ({ scrollToTarget }) => {

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
          <p className="cursor1 typewriter-animation ">What your Mood Today!</p>
          <button
            style={{ color: "#6f2dbd" }}
            onClick={scrollToTarget}
            className="btn fw-bold  border border-1 px-2 "
            id="started"
          >
            Get started
          </button>
        </div>

        {/* Main Right Side Div */}

        <div className="img-cont ">
          `
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
