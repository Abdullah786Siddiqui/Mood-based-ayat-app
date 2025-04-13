let Skeleton = () => {
  return (
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
  );
};
export default Skeleton;
