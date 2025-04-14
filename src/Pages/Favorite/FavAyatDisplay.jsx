
import {  useEffect, useState } from "react";
import { HiDotsVertical } from "react-icons/hi";
import { MdDelete } from "react-icons/md";
const FavAyatDisplay = ({ favAyat, handleShow , handleModal }) => {
  let [translation, setTranslation] = useState(true);

  useEffect(() => {
    if (/[\u0600-\u06FF]/.test(favAyat.translation)) {
      setTranslation(false);
    }
  }, [setTranslation]);

  return (
    <div className="Ayat-div fade-zoom-up-animation bg-white shadow-lg rounded-3 p-4 text-center w-100 mt-3">
      <div className="d-flex justify-content-between align-items-center mb-3"></div>

      <div className="d-flex justify-content-start align-items-center gap-1  ">
        <HiDotsVertical
          className="fs-1 cursor   "
          onClick={() => handleModal(favAyat)}
        />

        <MdDelete className="fs-1 cursor text-startgit " onClick={() => handleShow(favAyat)} />
      </div>

      <p className="fs-4 fw-bold text-success mb-0">{favAyat.para}</p>
      <p className="fs-5 fw-semibold text-success mb-0">{favAyat.surah}</p>

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

      {/* <div className="mt-4 ">
        <button
          id="nextayat"
          className="btn btn-lg px-4 py-2 fw-bold shadow-sm w-100 mb-2"
          style={{
            background: " linear-gradient(to right, #ff0000, #ff7f7f)",
            border: "none",
            borderRadius: "10px",
            color: "white"
          }}
        >
          Remove
        </button>
      </div> */}
    </div>
  );
};
export default FavAyatDisplay;
