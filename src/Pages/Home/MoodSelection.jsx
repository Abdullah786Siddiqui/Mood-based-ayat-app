import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AyatAction } from "../../Store/store";


const MoodSelection = ({ref , scrollToTarget2 }) => {
  const dispatch = useDispatch();
  let ToggleMode = useSelector((store) => store.ToggleMode.darkMode);
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
          onClick={(e)=>handleMood(e)}
        >
          <div className="col-6 col-lg-2 gallery-item cursor">
       
              <img
                src="/Images/Happiness.jpg"
                data-mood="Happiness"
                onClick={scrollToTarget2} 
                className="img-fluid gallery-img mood-btn shadow-lg mb-1"
                alt="Happiness"
        
              />
            <div className={`${ToggleMode ? "text-black":"text-white"}`}>Happiness</div>
          </div>
          <div className="col-6 col-lg-2 gallery-item cursor">
            <img
              src="/Images/Thankful.jpg"
              data-mood="Thankful"
              onClick={scrollToTarget2} 
              className="img-fluid gallery-img mood-btn shadow-lg mb-1"
              alt="Thankful"
            />
            <div className={`${ToggleMode ? "text-black":"text-white"}`}>Thankful</div>
          </div>
          <div className="col-6 col-lg-2 gallery-item cursor">
            <img
              src="/Images/Angry.jpg"
              data-mood="Angry"
              onClick={scrollToTarget2} 
              className="img-fluid gallery-img mood-btn shadow-lg mb-1"
              alt="Angry"
            />
            <div className={`${ToggleMode ? "text-black":"text-white"}`}>Angry</div>
          </div>
          <div className="col-6 col-lg-2 gallery-item cursor">
            <img
              src="/Images/Anxious.jpg"
              data-mood="Anxious"
              onClick={scrollToTarget2} 
              className="img-fluid gallery-img mood-btn shadow-lg mb-1"
              alt="Anxious"
            />
            <div className={`${ToggleMode ? "text-black":"text-white"}`}>Anxious</div>
          </div>
          <div className="col-6 col-lg-2 gallery-item cursor">
            <img
              src="/Images/Sad.jpg"
              data-mood="Sad"
              onClick={scrollToTarget2} 
              className="img-fluid  gallery-img mood-btn shadow-lg mb-1"
              alt="Sad"
            />
            <div id="targetSection"></div>

            <div id="AnxiousSection" className={` ${ToggleMode ? "text-black":"text-white"}`} >
              Sad
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MoodSelection;
