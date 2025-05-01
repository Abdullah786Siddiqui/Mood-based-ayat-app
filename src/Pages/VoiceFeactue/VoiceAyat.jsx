import React, { useEffect, useRef, useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";
import { MdOutlineKeyboardVoice } from "react-icons/md";
const VoiceAyat = () => {
  const [text, setText] = useState("");
  let [matchedAyats, setMatchedAyats] = useState([]);
  let [playing, setplaying] = useState(false);
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
      ب: "بَ",  // Ba with Fatha
      ت: "تَ",  // Ta with Fatha
      ج: "جَ",  // Jeem with Fatha
      ح: "حَ",  // Haa with Fatha
      ك: "كُ",  // Kaaf with Dammah
      م: "مِ",  // Meem with Kasrah
      س: "سِ",  // Seen with Kasrah
      ص: "صَ",  // Saad with Fatha
      ض: "ضَ",  // Daad with Fatha
      ط: "طُ",  // Taa with Dammah
      ع: "عَ",  // Ain with Fatha
      غ: "غُ",  // Ghayn with Dammah
      ف: "فَ",  // Fa with Fatha
      ق: "قُ",  // Qaaf with Dammah
      ن: "نِ",  // Noon with Kasrah
      ر: "رَ",  // Raa with Fatha
      ل: "لَ",  // Laam with Fatha
      ه: "هَ",  // Ha with Fatha
      و: "وُ",  // Waw with Dammah
      ي: "يِ",  // Yaa with Kasrah
      د: "دَ",  // Dal with Fatha
      ذ: "ذَ",  // Dhal with Fatha
      ز: "زَ",  // Zay with Fatha
      ش: "شَ"   // Sheen with Fatha
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
  const [activeIndex, setActiveIndex] = useState(null);
  const PlayAyat = (audioUrl, index) => {
    if (audioUrl && Audioref.current) {
      if (activeIndex !== index) {
        Audioref.current.src = audioUrl;
        Audioref.current.play();
        setplaying(true);
        setActiveIndex(index);
      } else {
        setplaying(false);
        Audioref.current.pause();
        setActiveIndex(null);
      }
    }
  };
  useEffect(() => {
    const audio = Audioref.current;
    if (!audio) return;

    const handleEnded = () => {
      setActiveIndex(null);
    };

    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("ended", handleEnded);
    };
  }, [PlayAyat]);

  return (
    <>
   <div class="container-fluid bg-light py-2">
  <div class="marquee-container">
    <p class="marquee-text text-center fw-bold text-success fs-2">
      🚧 Working on this Feature... Stay tuned! 🔧
    </p>
  </div>
</div>

    <div className="p-5 text-center mt-0">
      <h1 className="text-2xl  font-bold ">🎙️Voice-Ayat Recognition</h1>

      <MdOutlineKeyboardVoice
        style={{ color: listening && "green", fontSize: "50px" }}
        onClick={startListening}
        className="cursor"
        disabled={listening}
      />

      <p> {text}</p>
      <audio ref={Audioref} preload="auto"></audio>

      <div className="mt-1 text-xl">
        {listening ? "Listening..." : "🎤 Speak Ayat"}
        <br />
        <h3>
          {matchedAyats.map((ayat, index) => (
            <span
              className="border border-black d-flex justify-content-center mb-3 p-5 gap-2 "
              key={index}
              onClick={() => PlayAyat(ayat.audio, index)}
            >
              {processText(ayat.text)}
              {activeIndex === index ? (
                <FaPause className="fs-2 cursor " />
              ) : (
                <FaPlay className="cursor fs-2" />
              )}
              <br />
            </span>
          ))}
        </h3>
      </div>
    </div>
    </>
  );
};

export default VoiceAyat;
