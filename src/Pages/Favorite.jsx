import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import FavAyatDisplay from "../Components/FavAyatDisplay";

const Favorite = () => {
  let getFavAyat = useSelector((store) => store.Ayats.FavAyat);

  let [favAyat, setFavAyat] = useState([]);
  let passIdFun = (Category) => {
    let FavAyat = getFavAyat.filter((ayat) => ayat.category === Category);
    setFavAyat(FavAyat);
  };

  return (
    <main>
      <h1 style={{ color: "#6f2dbd" }} className="text-center mt-3">
        Your Favorite Ayat here
      </h1>

      <div
        className="accordion accordion-flush border border-3 contify"
        id="accordionFlushExample"
      >
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              style={{ backgroundColor: " #d0e9e3" }}
              className="accordion-button collapsed fs-5 favbtn d-flex align-items-center text-start"
              type="button"
              data-mood="Happiness"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
              onClick={() => passIdFun("Happiness")}
            >
              <img
                src="/public/images/Happiness.jpg"
                className="img-fluid w-100 gallery-img mood-btn shadow-lg me-3 object-fit-cover rounded"
                alt="Happiness"
                style={{ aspectRatio: "1/1", maxWidth: "100px" }}
              />

              <span className="fw-semibold flex-grow-1 text-muted">
                The happiest people don't have the best of everything, they make
                the best of everything.
              </span>
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body text-center" id="Happiness">
              {favAyat && favAyat.length > 0 ? (
                favAyat
                  .filter((ayat) => ayat.category === "Happiness")
                  .map((ayat, index) => (
                    <FavAyatDisplay key={index} favAyat={ayat} />
                  ))
              ) : (
                <p className="text-danger">No Ayat! found for this Happiness</p>
              )}
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              style={{ backgroundColor: " #d8cdc9" }}
              className="accordion-button collapsed fs-5 favbtn d-flex align-items-center text-start"
              type="button"
              data-mood="Sad"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
              onClick={() => passIdFun("Sad")}
            >
              <img
                src="/public/images/Sad.jpg"
                className="img-fluid w-100 gallery-img mood-btn shadow-lg me-3 object-fit-cover rounded"
                alt="Sad"
                style={{ aspectRatio: "1/1", maxWidth: "100px" }}
              />

              <span className="fw-semibold flex-grow-1">
                "Do not grieve; indeed, Allah is with us." (Quran 9:40)
              </span>
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body text-center" id="Sad">
              {favAyat && favAyat.length > 0 ? (
                favAyat
                  .filter((ayat) => ayat.category === "Sad")
                  .map((ayat, index) => <FavAyatDisplay favAyat={ayat} />)
              ) : (
                <p className="text-danger">No Ayat! found for this Sad</p>
              )}
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              style={{ backgroundColor: "#d3c4a7" }}
              className="accordion-button collapsed fs-5 favbtn d-flex align-items-center text-start"
              type="button"
              data-mood="Anxious"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
              onClick={() => passIdFun("Anxious")}
            >
              <img
                src="/public/images/Anxious.jpg"
                className="img-fluid w-100 gallery-img mood-btn shadow-lg me-3 object-fit-cover rounded"
                alt="Anxious"
                style={{ aspectRatio: "1/1", maxWidth: "100px" }}
              />

              <span className="fw-semibold flex-grow-1">
                "Indeed, Allah is with those who are patient." (Quran 2:153)
              </span>
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body text-center" id="Anxious">
              {favAyat && favAyat.length > 0 ? (
                favAyat
                  .filter((ayat) => ayat.category === "Anxious")
                  .map((ayat, index) => <FavAyatDisplay favAyat={ayat} />)
              ) : (
                <p className="text-danger">No Ayat! found for this Anxious</p>
              )}
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              style={{ backgroundColor: "#B0F8E7" }}
              className="accordion-button collapsed fs-5 favbtn d-flex align-items-center text-start"
              type="button"
              data-mood="Thankful"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseFour"
              aria-expanded="false"
              aria-controls="flush-collapseFour"
              onClick={() => passIdFun("Thankful")}
            >
              <img
                src="/public/images/Thankful.jpg"
                className="img-fluid w-100 gallery-img mood-btn shadow-lg me-3 object-fit-cover rounded"
                alt="Thankful"
                style={{ aspectRatio: "1/1", maxWidth: "100px" }}
              />

              <span className="fw-semibold flex-grow-1">
                "If you are grateful, I will surely increase your favor." (Quran
                14:7)
              </span>
            </button>
          </h2>
          <div
            id="flush-collapseFour"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body text-center" id="Thankful">
              {favAyat && favAyat.length > 0 ? (
                favAyat
                  .filter((ayat) => ayat.category === "Thankful")
                  .map((ayat, index) => <FavAyatDisplay favAyat={ayat} />)
              ) : (
                <p className="text-danger">No Ayat! found for this Thankful</p>
              )}
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              style={{ backgroundColor: "#DCDFD8" }}
              className="accordion-button collapsed fs-5 favbtn d-flex align-items-center text-start "
              type="button"
              data-mood="Angry"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseFive"
              aria-expanded="false"
              aria-controls="flush-collapseFive"
              onClick={() => passIdFun("Angry")}
            >
              <img
                src="public/images/Angry.jpg"
                className="img-fluid w-100 gallery-img mood-btn shadow-lg me-3 object-fit-cover rounded"
                alt="Angry"
                style={{ aspectRatio: "1/1", maxWidth: "100px" }}
              />
              <span className="fw-semibold flex-grow-1 ">
                "He it is who sent down tranquility into the hearts of the
                believers." (Quran 48:4)
              </span>
            </button>
          </h2>
          <div
            id="flush-collapseFive"
            className="accordion-collapse collapse "
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body text-center " id="Angry">
              {favAyat && favAyat.length > 0 ? (
                favAyat
                  .filter((ayat) => ayat.category === "Angry")
                  .map((ayat, index) => <FavAyatDisplay favAyat={ayat} />)
              ) : (
                <p className="text-danger">No Ayat! found for this Angry</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Favorite;
