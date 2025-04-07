import { createSlice } from '@reduxjs/toolkit';
import { Appearance } from 'react-native';

const systemColorScheme = Appearance.getColorScheme();

const initialState = {
  isDarkMode: systemColorScheme === 'dark',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
    setDarkMode: (state, action) => {
      state.isDarkMode = action.payload;
    },
  },
});

export const { toggleTheme, setDarkMode } = themeSlice.actions;
export default themeSlice.reducer;
