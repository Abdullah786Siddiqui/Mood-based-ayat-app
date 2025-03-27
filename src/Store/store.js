
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import Ayatdata from "../data/ayat";
const AyatSlice = createSlice({
  name: "Ayats",
  initialState: {
    // jo bhi mood select kr raha ho os mood ke tamam ayats is Mood ke array me store hoti hey or phr hum apne ayat Display waly components me is mood ke array ko accces kr ke is pr random ayat lagate hey
    Mood: [],
    
   
  },
  reducers: {
    filterAyat: (state, action) => {
      let categoryAyat = action.payload;
      let filterAyatData = Ayatdata.filter(
        (ayat) => ayat.category === categoryAyat
      );
      state.Mood = filterAyatData;
    },
   
   
  },
});
const persistConfig = {
  key: "root",
  storage,
  blacklist: ["Mood"],
};
const persistedReducer = persistReducer(persistConfig, AyatSlice.reducer);
const MoodBaseAyatStore = configureStore({
  reducer: {
    Ayats: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, 
    }),
});
export const AyatAction = AyatSlice.actions;
export const persistor = persistStore(MoodBaseAyatStore);
export default MoodBaseAyatStore;
