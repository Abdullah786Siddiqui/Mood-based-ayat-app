import { configureStore, createSlice } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import Ayatdata from "../data/ayat";
const AyatSlice = createSlice({
  name: "Ayats",
  initialState: {
    Mood: [],
    FavAyat: [],
  },
  reducers: {
    filterAyat: (state, action) => {
      let categoryAyat = action.payload;
      let filterAyatData = Ayatdata.filter(
        (ayat) => ayat.category === categoryAyat
      );
      state.Mood = filterAyatData;
    },
    addFavAyat: (state, action) => {
      let LatestAyat = action.payload;
      state.FavAyat = [...state.FavAyat, action.payload];
    },
    removeFavAyat: (state, action) => {
      let removeAyat = action.payload;
      state.FavAyat = state.FavAyat.filter((ayat) => ayat.id !== removeAyat.id);
    },
  },
});
const persistConfig = {
  key: "root",
  storage,
  blacklist: ["Mood"],
  whitelist: ["FavAyat"],
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
