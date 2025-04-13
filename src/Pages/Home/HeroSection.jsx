import React from "react";

const HeroSection = () => {
  return (
    // Main Section
    <main>
      <div className="container d-flex flex-column flex-md-row align-items-start justify-content-between text-center text-md-start">
        {/* Main Left Side Div  */}
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
          <a
            style={{ color: "#6f2dbd" }}
            className="btn fw-bold  border border-1 px-2 "
            id="started"
          >
            Get started
          </a>
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

      {/* Mood Select Options */}
      <h2
        style={{ color: "#6f2dbd" }}
        className="text-center fw-bold main-heading mt-5 mt-lg-5"
      >
        Select what you feel Today!
      </h2>
      <div className="container py-4   ">
        <div className="row g-3 d-flex justify-content-center  ">
          <div className="col-6 col-lg-2 gallery-item cursor ">
            <img
              src="/public/Images/Happiness.jpg"
              data-mood="Happiness"
              className="img-fluid gallery-img mood-btn shadow-lg"
              alt="Happiness"
            />
            <div className="mood-text">Happiness</div>
          </div>
          <div className="col-6 col-lg-2 gallery-item cursor">
            <img
              src="/public/Images/Thankfull.jpg"
              data-mood="Thankful"
              className="img-fluid gallery-img mood-btn shadow-lg"
              alt="Thankful"
            />
            <div className="mood-text">Thankful</div>
          </div>
          <div className="col-6 col-lg-2 gallery-item cursor">
            <img
              src="/public/Images/Angry.jpg"
              data-mood="Angry"
              className="img-fluid gallery-img mood-btn shadow-lg"
              alt="Angry"
            />
            <div className="mood-text">Angry</div>
          </div>
          <div className="col-6 col-lg-2 gallery-item cursor">
            <img
              src="/public/Images/Anxious.jpg"
              data-mood="Anxious"
              className="img-fluid gallery-img mood-btn shadow-lg"
              alt="Anxious"
            />
            <div className="mood-text">Anxious</div>
          </div>
          <div className="col-6 col-lg-2 gallery-item cursor">
            <img
              src="/public/Images/Sad.jpg"
              data-mood="Sad"
              className="img-fluid  gallery-img mood-btn shadow-lg"
              alt="Sad"
            />
            <div id="targetSection"></div>

            <div id="AnxiousSection" className="mood-text">
              Sad
            </div>
          </div>
        </div>
      </div>

      <div
        className="Ayat-div  bg-white shadow-lg rounded-3 p-4 text-center w-100 mt-3"
        id="ayat-box"
      ></div>
    </main>
  );
};

export default HeroSection;
