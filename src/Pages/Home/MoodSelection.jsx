import React from "react";
import { useDispatch } from "react-redux";
import { AyatAction } from "../../Store/store";


const MoodSelection = ({ref , scrollToTarget2}) => {
  const dispatch = useDispatch();
  // jis bhi mood pr click hota hey os ka attribute={mood} store ko bhejta hey 
  const handleMood = (event) => {
    const btnMood = event.target.closest("img");
    let mood = btnMood.getAttribute("data-mood");
    dispatch(AyatAction.filterAyat(mood));
  };
 
  
  return (
    < >
   
    <div ref={ref} className=" pb-4"></div>
      <h2
        style={{ color: "#6f2dbd" }}
     
        className="text-center fw-bold main-heading mt-5 mt-lg-5"
      >
        Select what you feel Today!
      </h2>
      <div className="container py-4   ">
        <div
          className="row g-3 d-flex justify-content-center"
          onClick={handleMood}
        >
          <div className="col-6 col-lg-2 gallery-item cursor">
       
              <img
                src="/public/Images/Happiness.jpg"
                data-mood="Happiness"
                onClick={scrollToTarget2} 
                className="img-fluid gallery-img mood-btn shadow-lg"
                alt="Happiness"
        
              />
            <div className="mood-text">Happiness</div>
          </div>
          <div className="col-6 col-lg-2 gallery-item cursor">
            <img
              src="/public/Images/Thankful.jpg"
              data-mood="Thankful"
              onClick={scrollToTarget2} 
              className="img-fluid gallery-img mood-btn shadow-lg"
              alt="Thankful"
            />
            <div className="mood-text">Thankful</div>
          </div>
          <div className="col-6 col-lg-2 gallery-item cursor">
            <img
              src="/public/Images/Angry.jpg"
              data-mood="Angry"
              onClick={scrollToTarget2} 
              className="img-fluid gallery-img mood-btn shadow-lg"
              alt="Angry"
            />
            <div className="mood-text">Angry</div>
          </div>
          <div className="col-6 col-lg-2 gallery-item cursor">
            <img
              src="/public/Images/Anxious.jpg"
              data-mood="Anxious"
              onClick={scrollToTarget2} 
              className="img-fluid gallery-img mood-btn shadow-lg"
              alt="Anxious"
            />
            <div className="mood-text">Anxious</div>
          </div>
          <div className="col-6 col-lg-2 gallery-item cursor">
            <img
              src="/public/Images/Sad.jpg"
              data-mood="Sad"
              onClick={scrollToTarget2} 
              className="img-fluid  gallery-img mood-btn shadow-lg"
              alt="Sad"
            />
            <div id="targetSection"></div>

            <div id="AnxiousSection" className="mood-text" >
              Sad
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MoodSelection;
