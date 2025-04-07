import { useSelector } from 'react-redux';
import { RootState } from '../stores'
import { lightTheme, darkTheme } from './theme';

export const useThemeColors = () => {
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);
  return isDarkMode ? darkTheme : lightTheme;
};
