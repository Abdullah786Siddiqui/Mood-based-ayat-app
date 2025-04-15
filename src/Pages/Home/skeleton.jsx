import { useSelector } from "react-redux";

let Skeleton = () => {
  let ToggleMode = useSelector((store) => store.ToggleMode.darkMode);
  return (
    <>
      <div className={`Ayat-div shadow-lg rounded-3 p-4 text-center w-100 mt-3 ${!ToggleMode ? "bg-dark text-white" : "bg-white text-dark"}`}>
        {/* Heart Icon Placeholder */}
        <div className="d-flex justify-content-end mb-3">
          <div
            className="skeleton skeleton-box"
            style={{ width: "30px", height: "30px" ,backgroundColor: !ToggleMode ? "#444" : "#e0e0e0" }}
          ></div>
        </div>

        {/* Surah & Para Placeholder */}
        <div className="d-flex justify-content-center align-items-center gap-2">
          <div
            className="skeleton skeleton-text"
            style={{ width: "50px", height: "20px",backgroundColor: !ToggleMode ? "#444" : "#e0e0e0"
            }}
          ></div>
          <div
            className="skeleton skeleton-text"
            style={{ width: "80px", height: "20px" ,backgroundColor: !ToggleMode ? "#444" : "#e0e0e0" }}
          ></div>
        </div>

        {/* Ayat Placeholder */}
        <div
          className="skeleton skeleton-text"
          style={{ height: "40px", width: "90%", margin: "10px auto"  ,backgroundColor: !ToggleMode ? "#444" : "#e0e0e0" }}
        ></div>
        <div
          className="skeleton skeleton-text"
          style={{ height: "20px", width: "95%", margin: "5px auto" ,backgroundColor: !ToggleMode ? "#444" : "#e0e0e0" }}
        ></div>
        <div
          className="skeleton skeleton-text"
          style={{ height: "20px", width: "90%", margin: "5px auto" ,backgroundColor: !ToggleMode ? "#444" : "#e0e0e0" }}
        ></div>

        {/* Button Placeholder */}
        <div className="mt-4">
          <div
            className="skeleton skeleton-button"
            style={{ height: "45px", width: "100%"  ,backgroundColor: !ToggleMode ? "#444" : "#e0e0e0"}}
          ></div>
        </div>
      </div>
    </>
  );
};
export default Skeleton;
