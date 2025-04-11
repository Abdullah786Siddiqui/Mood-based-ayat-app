import { FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { AyatAction } from "../Store/store";
import { use, useEffect, useState } from "react";

const FavAyatDisplay = ({ favAyat , forceRerender }) => {
  let getFavAyat = useSelector((store) => store.Ayats.FavAyat);
  console.log(getFavAyat);
  

  let [translation, setTranslation] = useState(true);
  let dispatch = useDispatch();
  useEffect(() => {
    if (/[\u0600-\u06FF]/.test(favAyat.translation)) {
      setTranslation(false);
    }
  }, [setTranslation]);

  let delFAvAyat = (ayat) => {
    dispatch(AyatAction.removeFavAyat(ayat));
  }

  return (
    <div className="Ayat-div fade-zoom-up-animation bg-white shadow-lg rounded-3 p-4 text-center w-100 mt-3">
      <div className="d-flex justify-content-between align-items-center mb-3"></div>
      <div className="d-flex justify-content-center align-items-center gap-2 ">
        <p className="fs-4 fw-bold text-success mb-0">{favAyat.para}</p>
        <p className="fs-5 fw-semibold text-success mb-0">{favAyat.surah}</p>
      </div>

      <p className="ayat-show fs-2 fw-bold text-dark text-center mt-3 quran-text">
        {favAyat.ayat}
      </p>

      <p
        style={
          translation
            ? { fontFamily: "Merriweather", fontSize: "1.30rem" }
            : { fontFamily: "Jameel Nastaliq", fontSize: "1.75rem" }
        }
        className="translation  fw-semibold text-secondary mt-3  text-justify"
      >
        {favAyat.translation}
      </p>

      <div className="mt-4 ">
        <button
          id="nextayat"
          className="btn btn-lg px-4 py-2 fw-bold shadow-sm w-100 mb-2"
          style={{
            background: " linear-gradient(to right, #ff0000, #ff7f7f)",
            border: "none",
            borderRadius: "10px",
          }}
          onClick={() => delFAvAyat(favAyat)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};
export default FavAyatDisplay;
