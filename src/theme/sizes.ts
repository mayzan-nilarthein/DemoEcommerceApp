import {Dimensions, Platform, StatusBar} from 'react-native';
import { scaleWidth, scaleHeight } from '../utils/responsive';

export const sizes = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
  radius_full: 36,
  radius_minimal: 4,
  radius_rounded: 8,
  button_height: Platform.OS === 'android' ? 40 : 42,
  gap_double: Dimensions.get('window').height * 0.04,
  gap_onehalf: Dimensions.get('window').height * 0.03,
  gap_full: Dimensions.get('window').height * 0.02,
  gap_minimal: Dimensions.get('window').height * 0.01,
  gap_medium: Dimensions.get('window').height * 0.015,
  tabbar_icon_size: 25,
  theme_icon_size: 20,

  padding_vertical_standard: 5,
  padding_horizontal_standard: 10,
  spacing_xs: 4,
  spacing_sm: 8,
  spacing_md: 15,
  spacing_lg: 24,
  spacing_xl: 48,
  spacing_2xl: 104,
  spacing_medium: 15,
  image_sm: 24,
  font_small: 11,
};
