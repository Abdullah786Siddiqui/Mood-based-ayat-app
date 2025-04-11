import { FaPause, FaRegBookmark } from "react-icons/fa";
import { LuShare2 } from "react-icons/lu";
import { FaPlay } from "react-icons/fa";
import { Modal, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";

const ModalOption = ({ show, setShow, Ayat }) => {
  const handleClose = () => setShow(false);
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
        console.log("Shared successfully");
      } catch (error) {
        console.log("Error sharing:", error);
      }
    } else {
      alert("Sharing not supported in this browser.");
    }
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      aria-labelledby="contained-modal-title-vcenter"
      style={{ marginTop: "160px" }}
    >
      <Modal.Header closeButton>
        <Modal.Title className="text-center w-100">Options</Modal.Title>
      </Modal.Header>
      <Modal.Body className="fs-1 text-center d-flex justify-content-center gap-5 ">
        {AudioSrc && (
          <audio ref={audioRef} src={AudioSrc} preload="auto"></audio>
        )}
        <span
          className="play-div"
          onClick={() => playAyat(Ayat.Surahno, Ayat.Ayatno)}
        >
          {playing ? (
            <FaPause className="fs-1" />
          ) : !loadings ? (
            <FaPlay className="fs-1" />
          ) : (
            <div className="spinner-border "style={{ borderWidth: '4px' }} role="status">
            </div>
          )}
        </span>
        <span>
          <FaRegBookmark />
        </span>
        <span>
          <LuShare2  onClick={handleShare} />
        </span>
      </Modal.Body>
    </Modal>
  );
};
export default ModalOption;
