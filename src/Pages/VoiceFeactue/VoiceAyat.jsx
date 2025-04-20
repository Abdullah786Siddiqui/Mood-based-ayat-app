import React, { useEffect, useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { MdOutlineKeyboardVoice } from "react-icons/md";
const VoiceAyat = () => {
  const [text, setText] = useState("");
  let [matchedAyats, setMatchedAyats] = useState([]);

  const [listening, setListening] = useState(false);
  const startListening = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.lang = "ar-SA";

    recognition.start();
    setListening(true);

    recognition.onresult = (event) => {
      const spokenText = event.results[0][0].transcript;
      setText(spokenText);
      setListening(false);
      console.log("User ne bola:", spokenText);
      fetch("https://api.alquran.cloud/v1/quran/ar.alafasy")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          let AyatData = data.data.surahs;

          let matches = [];
          AyatData.forEach((Surah) => {
            let surahAyah = Surah.ayahs;
            surahAyah.forEach((ayat) => {
              let TotalAyat = ayat.text
                .trim()
                .split(" ,")
                .map((ayatItem) =>
                  ayatItem
                    .normalize("NFD")
                    .replace(/[\u064B-\u065F\u0670]/g, "")
                    .replace(/ٱ/g, "ا")
                );

              let MatchAyat = TotalAyat.find((ayat) =>
                ayat.includes(spokenText)
              );

              if (MatchAyat) {
                console.log("✅ Mil gaya:", MatchAyat);

                matches.push({
                  text: MatchAyat,
                  audio: ayat.audio,
                });
              }
            });
          });
          if (matches.length > 0) {
            setMatchedAyats(matches);
          } else {
            setMatchedAyats([{ text: "❌ Koi Ayat nahi mili", audio: null }]);
          }
        })
        .catch((error) => {
          console.error("Error fetching Ayat:", error);
          setmatchText("⚠️ Data fetch error");
        });
    };

    recognition.onerror = (event) => {
      console.error("Error:", event.error);
      setListening(false);
    };
  };
  function addDiacriticsToArabicText(text) {
    const diacriticMap = {
      ب: "بَ",
      ت: "تَ",
      ج: "جَ",
      ح: "حَ",
      ك: "كُ",
      م: "مِ",
    };

    return text
      .split("")
      .map((char) => diacriticMap[char] || char)
      .join("");
  }
  const processText = (text) => {
    return addDiacriticsToArabicText(text);
  };
  let Audioref = useRef(null);

  const PlayAyat = (audioUrl) => {
    if (audioUrl && Audioref.current) {
      Audioref.current.src = audioUrl;
      Audioref.current.play();
    } else {
      console.log("🎧 Audio source nahi mila!");
    }
  };

  return (
    <div className="p-5 text-center">
      <h1 className="text-2xl font-bold ">🎙️ Arabic Voice to Text</h1>

      <MdOutlineKeyboardVoice
        style={{ color: listening && "green", fontSize: "50px" }}
        onClick={startListening}
        className="cursor"
        disabled={listening}
      />
      <audio ref={Audioref} preload="auto"></audio>

      <div className="mt-1 text-xl">
        {listening ? "Listening..." : "🎤 Speak Ayat"}
        <br />
        <h3>
          {matchedAyats.map((ayat, index) => (
            <span
              className="border border-black d-flex justify-content-center mb-3 p-5 "
              key={index}
            >
              {processText(ayat.text)}
              {ayat.audio && <FaPlay onClick={() => PlayAyat(ayat.audio)} />}
              <br />
            </span>
          ))}
        </h3>
      </div>
    </div>
  );
};

export default VoiceAyat;
