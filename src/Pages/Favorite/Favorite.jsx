import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import FavAyatDisplay from "../Favorite/FavAyatDisplay";
import Confirmation from "../Favorite/Confirmation";
import ModalOption from "../Home/ModalOption";

const Favorite = () => {
  let getFavAyat = useSelector((store) => store.Ayats.FavAyat);
  let Category = ["Happiness", "Sad", "Anxious", "Thankful", "Angry"];
  let [selectedmood, setSelectedmood] = useState(null);
  let [favAyat, setFavAyat] = useState([]);
  let [showConfirm, setshowConfirm] = useState(false);
  let [deleteAyat, setDeleteAyat] = useState(null);
  let ToggleMode = useSelector((store) => store.ToggleMode.darkMode);
 console.log(getFavAyat);
 
  //  document.body.style.backgroundColor = !ToggleMode ? "black" :"white"
  let passIdFun = (Category) => {
    let FavAyat = getFavAyat.filter((ayat) => ayat.category === Category);
    setFavAyat(FavAyat);
    setSelectedmood(Category);
  };

  useEffect(() => {
    if (selectedmood) {
      const updated = getFavAyat.filter((ayat) => ayat.category === selectedmood);
      setFavAyat(updated);
    }
  }, [getFavAyat]); // ✅ runs whenever Redux store updates
  
  let [AyatModal, setAyatModal] = useState(null);
  let [showmodal, setshowModal] = useState(false);
  const handleShow = (favAyat) => {
    setDeleteAyat(favAyat);
    setshowConfirm(true);
  };

  

  let handleModal = (favAyat) => {
    setshowModal(true);
    setAyatModal(favAyat);
  };

  const getStartedBtn1 = useRef(null);

  const scrollToTarget = () => {
    if (getStartedBtn.current) {
      getStartedBtn.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  const moodColors = {
    Angry: "#DCDFD8",
    Happiness: "#d0e9e3",
    Sad: "#d8cdc9",
    Anxious: "#d3c4a7",
    Thankful: "#B0F8E7",
    // etc.
  };

  return (
    <main>
      <h1 style={{ color: " #6f2dbd" }} className="text-center mt-3 ">
        Your Favorite Ayat here
      </h1>
      {/* {show && <ModalOption setShow={modalshow} />}   */}
      {showConfirm ? (
        <Confirmation
          showConfirm={showConfirm}
          setshowConfirm={setshowConfirm}
          deleteAyat={deleteAyat}
         
       
        />
      ) : null}
      {showmodal ? (
        <ModalOption
          AyatModal={AyatModal}
          setshowModal={setshowModal}
          showmodal={showmodal}
        />
      ) : null}

      <div
        className="accordion accordion-flush    "
        id="accordionFlushExample"
        onClick={scrollToTarget}
        ref={getStartedBtn1}
      >
        {Category.map((mood, index) => {
          return (
            <div
              key={index}
              className="accordion-item "
              onClick={() => passIdFun(mood)}
            >
              <h2 className="accordion-header  ">
                <button
                  style={{
                    backgroundColor: !ToggleMode ? "black " : moodColors[mood],
                  }}
                  className="accordion-button collapsed fs-5 favbtn d-flex align-items-center text-start border"
                  type="button"
                  data-mood="Happiness"
                  data-bs-toggle="collapse"
                  data-bs-target={`#flush-collapse${index}`}
                  aria-expanded="false"
                  aria-controls={`flush-collapse${index}`}
                >
                  {/* Image Left Side  */}
                  <img
                    src={`/Images/${mood}.jpg`}
                    className="img-fluid w-100 gallery-img mood-btn shadow-lg me-3 object-fit-cover rounded"
                    alt="Happiness"
                    style={{ aspectRatio: " 1/1", maxWidth: "100px" }}
                  />
                  {/* let Category = ["Happiness", "Sad", "Anxious", "Thankful", "Angry"]; */}
                  {/* Quote (Text Wrapping & Proper Spacing)  */}
                  <span
                    className={`fw-semibold flex-grow-1 ${
                      ToggleMode ? "text-muted" : "text-white"
                    }`}
                  >
                    {mood === "Happiness" && (
                      <p>
                        The happiest people don't have the best of everything,
                        they make the best of everything.
                      </p>
                    )}
                    {mood === "Angry" && (
                      <p>
                        The Prophet (ﷺ) said, ‘The strong is not the one who
                        overcomes others with strength, but the one who controls
                        himself while angry.’ (Sahih al-Bukhari)
                      </p>
                    )}
                    {mood === "Sad" && (
                      <p>
                        Do not lose hope, nor be sad. You will surely be
                        victorious if you are true believers.
                      </p>
                    )}
                    {mood === "Anxious" && (
                      <p>
                        Verily, in the remembrance of Allah do hearts find rest.
                      </p>
                    )}
                    {mood === "Thankful" && (
                      <p>
                        If you are grateful, I will surely increase you (in
                        blessings).
                      </p>
                    )}
                  </span>
                </button>
              </h2>
              <div
                id={`flush-collapse${index}`}
                className={`accordion-collapse collapse ${
                  !ToggleMode ? "bg-black" : "bg-white"
                }`}
                data-bs-parent="#accordionFlushExample"
              >
                <div className={`accordion-body text-center `}>
                  {selectedmood === mood && favAyat.length > 0 ? (
                    favAyat.map((ayat) => (
                      <FavAyatDisplay
                        key={ayat.id}
                        favAyat={ayat}
                        handleShow={handleShow}
                        handleModal={handleModal}
                      />
                    ))
                  ) : favAyat.length === 0 && selectedmood === mood ? (
                    <p className="text-danger">No Ayat! found for {mood}</p>
                  ) : null}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
 };

export default Favorite;
