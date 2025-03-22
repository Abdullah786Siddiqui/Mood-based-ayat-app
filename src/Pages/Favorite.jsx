// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";

// const Favorite = () => {
//   let favoriteAyat = useSelector((store) => store.Ayats.favAyat);
//   let[filterAyat,setFilterAyat] = useState([])
//   // let dispatch = useDispatch()
//   function passid(selectCategory) {
//     let filteredAyatdata = favoriteAyat.filter(
//       (ayat) => ayat.category === selectCategory
//     );
//     setFilterAyat(filteredAyatdata);
    

//   }
// console.log(filterAyat);


  
  


 

//   return (
//     <main>
//       <h1 style={{ color: " #6f2dbd" }} className="text-center mt-3">
//         Your Favorite Ayat here
//       </h1>

//       <div
//         className="accordion accordion-flush border border-3 contify"
        
//         id="accordionFlushExample"
//       >
//         {["Happiness", "Sad", "Anxious", "Thankfull", "Angry"].map((mood,index)=>{
//           return(
//             <div key={index} className="accordion-item" onClick={() => passid(mood)}>
//             <h2 className="accordion-header">
//               <button
//                 style={{ backgroundColor: "#d0e9e3" }}
//                 className="accordion-button collapsed fs-5 favbtn d-flex align-items-center text-start"
//                 type="button"
//                 data-mood="Happiness"
//                 data-bs-toggle="collapse"
//                   data-bs-target={`#flush-collapse${index}`}
//                   aria-expanded="false"
//                   aria-controls={`flush-collapse${index}`}
//               >
//                 {/* Image Left Side  */}
//                 <img
//                  src={`/public/Images/${mood}.jpg`}
//                   className="img-fluid w-100 gallery-img mood-btn shadow-lg me-3 object-fit-cover rounded"
//                   alt="Happiness"
//                   style={{ aspectRatio: " 1/1", maxWidth: "100px" }}
//                 />
  
//                 {/* Quote (Text Wrapping & Proper Spacing)  */}
//                 <span className="fw-semibold flex-grow-1 text-muted">
//                   The happiest people don't have the best of everything, they make
//                   the best of everything.
//                 </span>
//               </button>
//             </h2>
//             <div
//              id={`flush-collapse${index}`}
//               className="accordion-collapse collapse"
//               data-bs-parent="#accordionFlushExample"
//             >
//               <div className="accordion-body text-center">
//               {filterAyat.length > 0 ? (
//                   filterAyat.map((Ayat, idx) => (
//                     <div key={index}  class="favorite-card mt-2 ">
                   
//                     <div class="d-flex justify-content-center align-items-center gap-2 ">
//                       <p class="fs-4 fw-bold text-success mb-0">{Ayat.para}</p>
//                       <p class="fs-5 fw-semibold text-success mb-0">{
//                         Ayat.Surah
//                       }</p>
//                     </div>
          
              
//                     <p class="ayat-show fs-2 fw-bold text-dark text-center mt-3">${
//                       Ayat.Ayat
//                     }</p>
          
                  
//                    <p class="translation fs-4 fw-semibold text-secondary mt-3 text-justify">
//                    {Ayat.translation === "English"}
          
//             </p>
          
                 
//                     <div class="mt-4">
//                       <button class="remove-btn btn btn-lg px-4 py-2 fw-bold shadow-sm w-100 mb-2" style="background: linear-gradient(to right, rgb(244, 70, 105), red, #660000); border: none; border-radius: 10px;">
//                         Remove
//                       </button>
//                     </div>
//                   </div>
//                   ))
//                 ) : (
//                   <p className="text-danger">No Ayats found for {mood}.</p>
//                 )}
  
//               </div>
//             </div>
//           </div>
//           )
//         })}
       

//         {/* <div className="accordion-item" onClick={() => passid("Sad")} >
//           <h2 className="accordion-header">
//             <button
//               style={{ backgroundColor: "#d8cdc9" }}
//               className="accordion-button collapsed fs-5 favbtn d-flex align-items-center text-start"
//               type="button"
//               data-mood="Sadness"
//               data-bs-toggle="collapse"
//               data-bs-target="#flush-collapseTwo"
//               aria-expanded="false"
//               aria-controls="flush-collapseTwo"
//             >
//               <img
//                 src="/public/Images/Sad.jpg"
//                 className="img-fluid w-100 gallery-img mood-btn shadow-lg me-3 object-fit-cover rounded"
//                 alt="Sadness"
//                 style={{ aspectRatio: " 1/1", maxWidth: "100px" }}
//               />

//               <span className="fw-semibold flex-grow-1">
//                 "Do not grieve; indeed, Allah is with us." (Quran 9:40)
//               </span>
//             </button>
//           </h2>
//           <div
//             id="flush-collapseTwo"
//             className="accordion-collapse collapse"
//             data-bs-parent="#accordionFlushExample"
//           >
//             <div className="accordion-body text-center" id="Sad"></div>
//           </div>
//         </div>

//         <div className="accordion-item" onClick={() => passid("Anxious")} >
//           <h2 className="accordion-header">
//             <button
//               style={{ backgroundColor: " #d3c4a7" }}
//               className="accordion-button collapsed fs-5 favbtn d-flex align-items-center text-start"
//               type="button"
//               data-mood="Patience"
//               data-bs-toggle="collapse"
//               data-bs-target="#flush-collapseThree"
//               aria-expanded="false"
//               aria-controls="flush-collapseThree"
//             >
//               <img
//                 src="/public/Images/Anxious.jpg"
//                 className="img-fluid w-100 gallery-img mood-btn shadow-lg me-3 object-fit-cover rounded"
//                 alt="Anxious"
//                 style={{ aspectRatio: " 1/1", maxWidth: "100px" }}
//               />

//               <span className="fw-semibold flex-grow-1">
//                 "Indeed, Allah is with those who are patient." (Quran 2:153)
//               </span>
//             </button>
//           </h2>
//           <div
//             id="flush-collapseThree"
//             className="accordion-collapse collapse"
//             data-bs-parent="#accordionFlushExample"
//           >
//             <div className="accordion-body text-center" id="Anxious"></div>
//           </div>
//         </div>

//         <div className="accordion-item" onClick={() => passid("Thankful")} >
//           <h2 className="accordion-header">
//             <button
//               style={{ backgroundColor: "#B0F8E7" }}
//               className="accordion-button collapsed fs-5 favbtn d-flex align-items-center text-start"
//               type="button"
//               data-mood="Gratitude"
//               data-bs-toggle="collapse"
//               data-bs-target="#flush-collapseFour"
//               aria-expanded="false"
//               aria-controls="flush-collapseFour"
//             >
//               <img
//                 src="/public/Images/Thankfull.jpg"
//                 className="img-fluid w-100 gallery-img mood-btn shadow-lg me-3 object-fit-cover rounded"
//                 alt="Thankful"
//                 style={{ aspectRatio: " 1/1", maxWidth: "100px" }}
//               />

//               <span className="fw-semibold flex-grow-1">
//                 "If you are grateful, I will surely increase your favor." (Quran
//                 14:7)
//               </span>
//             </button>
//           </h2>
//           <div
//             id="flush-collapseFour"
//             className="accordion-collapse collapse"
//             data-bs-parent="#accordionFlushExample"
//           >
//             <div className="accordion-body text-center" id="Thankful"></div>
//           </div>
//         </div>

//         <div className="accordion-item" onClick={() => passid("Angry")} >
//           <h2 className="accordion-header">
//             <button
//               style={{ backgroundColor: " #DCDFD8" }}
//               className="accordion-button collapsed fs-5 favbtn d-flex align-items-center text-start "
//               type="button"
//               data-mood="Peace"
//               data-bs-toggle="collapse"
//               data-bs-target="#flush-collapseFive"
//               aria-expanded="false"
//               aria-controls="flush-collapseFive"
//             >
//               <img
//                 src="/public/Images/Angry.jpg"
//                 className="img-fluid w-100 gallery-img mood-btn shadow-lg me-3 object-fit-cover rounded"
//                 alt="Angry"
//                 style={{ aspectRatio: " 1/1", maxWidth: "100px" }}
//               />
//               <span className="fw-semibold flex-grow-1 ">
//                 "He it is who sent down tranquility into the hearts of the
//                 believers." (Quran 48:4)
//               </span>
//             </button>
//           </h2>
//           <div
//             id="flush-collapseFive"
//             className="accordion-collapse collapse "
//             data-bs-parent="#accordionFlushExample"
//           >
//             <div className="accordion-body text-center " id="Angry"></div>
//           </div>
//         </div> */}
//       </div>
//     </main>
//   );
// };

// export default Favorite;
