import { FaPause, FaRegBookmark } from "react-icons/fa";
import { LuShare2 } from "react-icons/lu";
import { FaPlay } from "react-icons/fa";
import { Modal } from "react-bootstrap";
import { useEffect, useRef, useState } from "react";
import { IoClose } from "react-icons/io5";
import { useSelector } from "react-redux";
const ModalOption = ({
  show,
  setShow,
  Ayat,
  AyatModal,
  setshowModal,
  showmodal,
}) => {
      let ToggleMode = useSelector((store) => store.ToggleMode.darkMode);
  
  const handleEnd = () => {
    setShow(false);
  };

  let [AudioSrc, setAudioSrc] = useState("");
  let [loadings, setLoadings] = useState(false);
  let [playing, setIsPlaying] = useState(false);
  let audioRef = useRef(null);
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleEnded = () => {
      setIsPlaying(false);
    };

    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("ended", handleEnded);
    };
  }, [AudioSrc]);

  let playAyat = async (surah, ayah) => {
    try {
      setLoadings(true);
      let url = `https://api.alquran.cloud/v1/ayah/${surah}:${ayah}/ar.alafasy`;
      let response = await fetch(url);
      let data = await response.json();
      let AudioUrl = data.data.audio;
      if (AudioUrl) {
        setAudioSrc(AudioUrl);
      }
      setTimeout(() => {
        if (audioRef.current) {
          if (!playing) {
            audioRef.current.play();
            setIsPlaying(true);
          } else {
            audioRef.current.pause();
            setIsPlaying(false);
          }
        }
        setLoadings(false);
      }, 100);
    } catch (error) {
      console.error("Ayat Audio not Found");
      setLoadings(false);
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Listen to this  beautiful Ayah",
          text: `${Ayat.ayat}\n\nListen here:`,
        });
      } catch (error) {
        console.log("Error sharing:", error);
      }
    } else {
      alert("Sharing not supported in this browser.");
    }
  };
  let handlclose = () => setshowModal(false);

  return (
    <Modal
      show={show || showmodal}
      onHide={handleEnd}
      centered
      aria-labelledby="contained-modal-title-vcenter"
      // style={{ marginTop: "230px" }}
    >
      <Modal.Header closeButton={show} className={` ${!ToggleMode ? "bg-secondary ": "bg-white text-black"} `}>
        <Modal.Title className="text-center  w-100">Options</Modal.Title>{" "}
        {showmodal ? (
          <IoClose size={36} className="cursor fw-lighter " style={{color:"gray"}} onClick={() => handlclose()} />
        ) : null}
      </Modal.Header>
      <Modal.Body className={`fs-1 text-center  ${!ToggleMode ? "bg-secondary ": "bg-white text-black"}  d-flex justify-content-center gap-5 `}>
        {AudioSrc && (
          <audio
            ref={audioRef}
            src={AudioSrc || AyatModal}
            preload="auto"
          ></audio>
        )}
        <span
          className="play-div"
          onClick={() =>
            playAyat(
              Ayat?.Surahno || AyatModal?.Surahno,
              Ayat?.Ayatno || AyatModal?.Ayatno
            )
          }
        >
          {playing ? (
            <FaPause className="fs-1 cursor pause" />
          ) : !loadings ? (
            <FaPlay className="fs-1 cursor play" />
          ) : (
            <div
              className="spinner-border "
              style={{ borderWidth: "4px" }}
              role="status"
            ></div>
          )}
        </span>
        <span>
          <FaRegBookmark className="cursor" />
        </span>
        <span>
          <LuShare2 className="cursor" onClick={handleShare} />
        </span>
      </Modal.Body>
    </Modal>
  );
};
export default ModalOption;
