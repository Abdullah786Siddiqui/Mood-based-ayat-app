import "@fontsource/eb-garamond"; // Quranic Look
import "@fontsource/merriweather"; // English Translation
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UsePersistedState from "../hooks/PersistesState";
import React, { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { AyatAction } from "../Store/store";

const AyatDisplay = React.memo(({ Ayat, getRandomAyat }) => {
  let [isloading, setloading] = useState(true);
  const [localLang, setlocalLang] = UsePersistedState("localLang", false);
  let [translate, setTranslate] = useState(localLang ? true : false);
  const [displayedAyat, setDisplayedAyat] = useState(null);
  let [heart, isHeart] = useState(false);

  let dispatch = useDispatch();

  useEffect(() => {
    // jaise he ayat server se ajaye to he loading true krna agr nahi aye to niche ka code excecute nahi krna
    if (!Ayat) return;
    setloading(true);
    setDisplayedAyat(Ayat);
    let Timer = setTimeout(() => {
      setloading(false);
    }, 1000);
    // jb component unmount hoga to  timer bh reset ho jaye ga
    return () => clearTimeout(Timer);
  }, [Ayat]);

  let handleTranslate = (e) => {
    let translateVal = e.target.value;

    if (translateVal === "English") {
      setTranslate(true);
      setlocalLang(true);
    } else {
      setTranslate(false);
      setlocalLang(false);
    }
  };

  const getFavAyat = useSelector((store) => store.Ayats.FavAyat) || [];
  console.log(getFavAyat);

  useEffect(() => {
    if (displayedAyat) {
      isHeart(getFavAyat.some((ayat) => ayat?.id === displayedAyat?.id));
    }
  }, [displayedAyat, getFavAyat]);

  let handleFav = () => {
    if (!heart) {
      dispatch(AyatAction.addFavAyat(displayedAyat));
      toast.success("Ayat added to Favorites!");
    } else {
      dispatch(AyatAction.removeFavAyat(displayedAyat));
      toast.error("Ayat removed from Favorites!");
    }
  };
  return (
    <>
      <ToastContainer />
      {!displayedAyat || isloading ? (
        <>
          <div className="Ayat-div bg-white shadow-lg rounded-3 p-4 text-center w-100 mt-3">
            {/* Heart Icon Placeholder */}
            <div className="d-flex justify-content-end mb-3">
              <div
                className="skeleton skeleton-box"
                style={{ width: "30px", height: "30px" }}
              ></div>
            </div>

            {/* Surah & Para Placeholder */}
            <div className="d-flex justify-content-center align-items-center gap-2">
              <div
                className="skeleton skeleton-text"
                style={{ width: "50px", height: "20px" }}
              ></div>
              <div
                className="skeleton skeleton-text"
                style={{ width: "80px", height: "20px" }}
              ></div>
            </div>

            {/* Ayat Placeholder */}
            <div
              className="skeleton skeleton-text"
              style={{ height: "40px", width: "90%", margin: "10px auto" }}
            ></div>
            <div
              className="skeleton skeleton-text"
              style={{ height: "20px", width: "95%", margin: "5px auto" }}
            ></div>
            <div
              className="skeleton skeleton-text"
              style={{ height: "20px", width: "90%", margin: "5px auto" }}
            ></div>

            {/* Button Placeholder */}
            <div className="mt-4">
              <div
                className="skeleton skeleton-button"
                style={{ height: "45px", width: "100%" }}
              ></div>
            </div>
          </div>
        </>
      ) : (
        <div className="Ayat-div fade-zoom-up-animation bg-white shadow-lg rounded-3 p-4 text-center w-100 mt-3">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <FaHeart
              style={{ color: heart ? "red" : "gray" }}
              className="fs-1 cursor"
              onClick={handleFav}
            />

            <select
              id="translate-option"
              className="form-select w-auto cursor fw-bold text-success border-2 shadow-sm"
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

          <p
            style={{ fontFamily: "EB Garamond" }}
            className="ayat-show fs-2 fw-bold text-dark text-center mt-3"
          >
            {displayedAyat.ayat}
          </p>

          <p
            style={
              translate
                ? { fontFamily: "Merriweather", fontSize: "1.30rem" }
                : { fontFamily: "Jameel Nastaliq", fontSize: "1.75rem" }
            }
            className="translation  fw-semibold text-secondary mt-3  text-justify"
          >
            {translate && localLang
              ? displayedAyat.translation_eng
              : displayedAyat.translation_urdu}
          </p>

          <div className="mt-4 ">
            <button
              data-mood={displayedAyat.category}
              id="nextayat"
              onClick={getRandomAyat}
              className=" btn btn-lg px-4 py-2 fw-bold shadow-sm w-100 mb-2"
              style={{
                background: " linear-gradient(to right, #4b0082, #9370db)",
                border: "none",
                borderRadius: "10px",
              }}
            >
              New Ayah
            </button>
          </div>
        </div>
      )}
    </>
  );
});

export default AyatDisplay;
