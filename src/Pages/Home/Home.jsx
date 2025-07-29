import React, { useCallback, useEffect, useRef, useState } from "react";
import Displaycharater from "../Home/displaycharater";
import MoodSelection from "../Home/MoodSelection";
import AyatDisplay from "../Home/AyatDisplay";
import { useSelector } from "react-redux";
import ModalOption from "../Home/ModalOption";
import { Container } from "react-bootstrap";
import Footer from "../../Components/Footer";

const Home = () => {
  // store se mood ke array ko acces kia
  const filteredAyat = useSelector((store) => store.Ayats.Mood);

  const [randomAyat, setRandomAyat] = useState(null);
  const [show, setShow] = useState(false);

  let getRandomAyat = useCallback(() => {
    if (filteredAyat && filteredAyat.length > 0) {
      let newAyat;
      do {
        newAyat = filteredAyat[Math.floor(Math.random() * filteredAyat.length)];
      } while (newAyat === randomAyat);
      localStorage.setItem("previousAyat", JSON.stringify(newAyat));

      setRandomAyat(newAyat);
    }
  }, [filteredAyat, randomAyat]);
  useEffect(() => {
    const savedAyat = JSON.parse(localStorage.getItem("previousAyat"));

    if (savedAyat && filteredAyat.find((ayat) => ayat.id === savedAyat.id)) {
      setRandomAyat(savedAyat);
    } else if (filteredAyat.length > 0) {
      getRandomAyat();
    }
  }, [filteredAyat]);
  // const storedAyats = localStorage.getItem("Ayats");
  // if (storedAyats) {
  //   const parsed = JSON.parse(storedAyats);
  //   console.log(parsed);
    
  // }
  // useEffect(() => {
  //   const navType = performance.getEntriesByType("navigation")[0]?.type;
  //  console.log(navType);
   
  //  if (navType === "reload") {
  //   const storedAyats = localStorage.getItem("Ayats");
  //   if (storedAyats) {
  //     const parsed = JSON.parse(storedAyats);
      
  //     // Mood ko delete karo
  //     delete parsed.Mood;
      
  //     // Dobara update karo localStorage mein bina Mood ke
  //     localStorage.setItem("Ayats", JSON.stringify(parsed));
  //   }
  // }
  
  // }, []);

  const getStartedBtn = useRef(null);

  const scrollToTarget = () => {
    if (getStartedBtn.current) {
      getStartedBtn.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  const MoodSelect = useRef(null);

  const scrollToTarget2 = () => {
    if (MoodSelect.current) {
      MoodSelect.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  const handleShow = () => setShow(true);

  return (
    <>
      <Displaycharater scrollToTarget={scrollToTarget}  />
      <MoodSelection ref={getStartedBtn} scrollToTarget2={scrollToTarget2} />
      <div ref={MoodSelect} className="pb-5"></div>

      {show ? (
        <ModalOption show={show} setShow={setShow} Ayat={randomAyat} />
      ) : null}

      {randomAyat && (
        <AyatDisplay
          ref={MoodSelect}
          Ayat={randomAyat}
          getRandomAyat={getRandomAyat}
          handleShow={handleShow}
        />
      )}

<Footer/>
     
    </>
  );
};

export default Home;
