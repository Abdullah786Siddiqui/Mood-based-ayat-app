import { useSelector } from "react-redux";

let Skeleton = () => {
  let ToggleMode = useSelector((store) => store.ToggleMode.darkMode);
  return (
    <>
     <div className={`Ayat-div shadow-lg rounded-3 p-4 text-center w-100 mt-3 ${!ToggleMode ? "bg-dark text-white" : "bg-white text-dark"}`}>
  {/* Heart Icon & Dots Placeholder */}
  <div className="d-flex justify-content-between align-items-center mb-3">
    <div className="d-flex align-items-center gap-2">
      {/* Dots Placeholder */}
      <div
        className="skeleton"
        style={{
          width: "25px",
          height: "25px",
          borderRadius: "5px",
          backgroundColor: !ToggleMode ? "#444" : "#e0e0e0",
        }}
      ></div>

      {/* Heart Placeholder */}
      <div
        className="skeleton"
        style={{
          width: "25px",
          height: "25px",
          borderRadius: "50%",
          backgroundColor: !ToggleMode ? "#444" : "#e0e0e0",
        }}
      ></div>
    </div>

    {/* Translate Dropdown Placeholder */}
    <div
      className="skeleton"
      style={{
        width: "100px",
        height: "30px",
        borderRadius: "5px",
        backgroundColor: !ToggleMode ? "#444" : "#e0e0e0",
      }}
    ></div>
  </div>

  {/* Surah & Para Placeholder */}
  <div className="d-flex justify-content-center align-items-center gap-2 mb-2">
    <div
      className="skeleton"
      style={{
        width: "50px",
        height: "20px",
        backgroundColor: !ToggleMode ? "#444" : "#e0e0e0",
      }}
    ></div>
    <div
      className="skeleton"
      style={{
        width: "80px",
        height: "20px",
        backgroundColor: !ToggleMode ? "#444" : "#e0e0e0",
      }}
    ></div>
  </div>

  {/* Ayah Placeholder */}
  <div
    className="skeleton"
    style={{
      height: "40px",
      width: "90%",
      margin: "10px auto",
      backgroundColor: !ToggleMode ? "#444" : "#e0e0e0",
    }}
  ></div>

  {/* Translation Placeholder */}
  <div
    className="skeleton"
    style={{
      height: "20px",
      width: "95%",
      margin: "5px auto",
      backgroundColor: !ToggleMode ? "#444" : "#e0e0e0",
    }}
  ></div>
  <div
    className="skeleton"
    style={{
      height: "20px",
      width: "90%",
      margin: "5px auto",
      backgroundColor: !ToggleMode ? "#444" : "#e0e0e0",
    }}
  ></div>

  {/* Button Placeholder */}
  <div className="mt-4">
    <div
      className="skeleton"
      style={{
        height: "45px",
        width: "100%",
        borderRadius: "10px",
        backgroundColor: !ToggleMode ? "#444" : "#e0e0e0",
      }}
    ></div>
  </div>
</div>

    </>
  );
};
export default Skeleton;
