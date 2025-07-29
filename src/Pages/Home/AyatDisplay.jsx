// import "@fontsource/eb-garamond"; // Quranic Look
// import "@fontsource/merriweather"; // English Translation
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { HiDotsVertical } from "react-icons/hi";
import UsePersistedState from "../../hooks/PersistesState";
import React, { useCallback, useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { AyatAction } from "../../Store/store";
import Skeleton from "../Home/skeleton";

const AyatDisplay = React.memo(({ Ayat, getRandomAyat, FavoriteAyat,handleShow }) => {
  let ToggleMode = useSelector((store) => store.ToggleMode.darkMode);
  let [isloading, setloading] = useState(true);
  const [localLang, setlocalLang] = UsePersistedState("localLang", false);
  let [translate, setTranslate] = useState(localLang ? true : false);
  const [displayedAyat, setDisplayedAyat] = useState(null);
  let [heart, isHeart] = useState(false);

  let dispatch = useDispatch();

  useEffect(() => {
    
    if (!Ayat) return;
    setloading(true);
    setDisplayedAyat(Ayat);

    let Timer = setTimeout(() => {
      setloading(false);
    }, 1000);
    return () => clearTimeout(Timer);
  }, [Ayat, FavoriteAyat]);

  const handleTranslate = useCallback(
    (e) => {
      let translateVal = e.target.value;

      if (translateVal === "English") {
        setTranslate(true);
        setlocalLang(true);
      } else {
        setTranslate(false);
        setlocalLang(false);
      }
    },
    [setTranslate, setlocalLang]
  );

  let getFavAyat = useSelector((store) => store.Ayats.FavAyat) || [];
  

  useEffect(() => {
    if (displayedAyat) {
      isHeart(getFavAyat.some((ayat) => ayat?.id === displayedAyat?.id));
    }
  }, [displayedAyat, getFavAyat]);

  let handleFav = (favAyat) => {
    if (!heart) {
      dispatch(AyatAction.addFavAyat(favAyat));
      toast.success("Ayat added to Favorites!");
   
    } else {
      
      dispatch(AyatAction.removeFavAyat(favAyat));
      toast.error("Ayat removed from Favorites!");
    }
  };

  return (
    <>
      <ToastContainer />
      {!displayedAyat || isloading ? (
        <Skeleton />
      ) : (
        <>
          <div className={`Ayat-div ${!ToggleMode ? "bg-black  ": "bg-white "} shadow-lg rounded-3 p-4 px-3 text-center w-100 mt-3 `}>
            <div className="d-flex justify-content-between align-items-center mb-3 ">
              <div className="d-flex align-items-center gap-1  ">
                <div
                  className="text-muted cursor  "
                  onClick={handleShow}
                   variant="primary"
                >
                  <HiDotsVertical className={`fs-1 ${!ToggleMode ? "text-white": "text-black"}`} />
                </div>

                <FaHeart
                  style={{ color: heart ? "red" : "gray" }}
                  className="fs-1  cursor"
                  onClick={() =>
                    handleFav({
                      id: displayedAyat.id,
                      ayat: displayedAyat.ayat,
                      category: displayedAyat.category,
                      Ayatno: displayedAyat.Ayatno,
                      Surahno: displayedAyat.Surahno,
                      surah: displayedAyat.surah,
                      para: displayedAyat.para,
                      translation:
                        translate && localLang
                          ? displayedAyat.translation_eng
                          : displayedAyat.translation_urdu,
                    })
                  }
                />
              </div>

              <select
                id="translate-option"
                className={`form-select w-auto cursor fw-bold ${!ToggleMode ? "bg-black text-success ": "bg-white text-success"} border-2 shadow-sm `}
                onChange={handleTranslate}
                defaultValue=""
              >
                <option value="" hidden disabled>
                  Translate
                </option>
                <option value="English" disabled={translate ? true : false}>
                  English
                </option>
                <option value="Urdu" disabled={translate ? false : true}>
                  Urdu
                </option>
              </select>
            </div>
           

            <div className="d-flex justify-content-center align-items-center gap-2 ">
              <p className="fs-4 fw-bold text-success mb-0">
                {displayedAyat.para}
              </p>
              <p className="fs-5 fw-semibold text-success mb-0">
                {displayedAyat.surah}
              </p>
            </div>

            <p className={`ayat-show fs-2 fw-bold ${!ToggleMode ? "text-white": "text-dark"}  text-center mt-3 `}>
              {displayedAyat.ayat}
            </p>

            <p
              style={
                translate
                  ? { fontFamily: "Merriweather", fontSize: "1.30rem" }
                  : { fontFamily: "Jameel Nastaliq", fontSize: "1.75rem" }
              }
              className={`translation fw-semibold   text-secondary mt-3 text-justify`}
            >
              {translate && localLang
                ? displayedAyat.translation_eng
                : displayedAyat.translation_urdu}
            </p>

            <div className="mt-4">
              <button
                data-mood={displayedAyat.category}
                // id="nextayat"
                onClick={getRandomAyat}
                className="btn btn-lg px-4 py-2 fw-bold shadow-sm w-100 mb-2 text-white"
                style={{
                  background: "linear-gradient(to right, #4b0082, #9370db)",
                  border: "none",
                  borderRadius: "10px",
                }}
              >
                New Ayah 
              </button>
            </div>
          
          </div>
        </>
      )}
    </>
  );
});

export default AyatDisplay;
