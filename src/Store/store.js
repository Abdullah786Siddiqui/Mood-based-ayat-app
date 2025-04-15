import { combineReducers, configureStore, createSlice } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import Ayatdata from "../data/ayat";
const AyatSlice = createSlice({
  name: "Ayats",
  initialState: {
    Mood: [],
    FavAyat: [],
    audioUrl: [],
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
      state.FavAyat = state.FavAyat.filter(
        (ayat) => ayat.id !== action.payload
      );
    },
  },
});

const ModeSlice = createSlice({
  name: "ToggleMode",
  initialState: {
    darkMode: false,
  },
  reducers: {
    Toggle: (state, action) => {
      state.darkMode = !state.darkMode;
    },
  },
});

const rootReducer = combineReducers({
  Ayats: AyatSlice.reducer,
  ToggleMode: ModeSlice.reducer,
});
const persistConfig = {
  key: "root",
  storage,
  blacklist: ["Mood"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const MoodBaseAyatStore = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export const AyatAction = AyatSlice.actions;
export let ToggleAction = ModeSlice.actions;
export const persistor = persistStore(MoodBaseAyatStore);
export default MoodBaseAyatStore;
