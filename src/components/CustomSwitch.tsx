import React, {useState} from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import {RootState} from '../stores'
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../stores/slices/themeSlice';

import { icons } from '../assets/icons/icons';
import { colors } from '../theme/colors';
import { scaleHeight, scaleWidth } from '../utils/responsive';
import { sizes } from '../theme/sizes';
import storage from '../utils/storage';
import { useThemeColors } from '../theme/useThemeColors';


const CustomSwitch = () => {
  const colors = useThemeColors();
  const [isActive, setIsActive] = useState(false);
  const translateX = useSharedValue(0);
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);
  const themeColor = useThemeColors();

  const toggleSwitch = async () => {
    dispatch(toggleTheme());
    await storage.saveItem('theme', isDarkMode ? 'light' : 'dark');
    translateX.value = withTiming(!isDarkMode ? 0 : 2, { duration: 200 });
  };

  const switchStyles = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],

  }));

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={toggleSwitch}>
      <View
        style={[
          styles.container,
          { backgroundColor: themeColor.surface_secondary },
        ]}>
        {!isDarkMode ? (
          <>
            <Image
              source={isDarkMode? icons.moon_darkmode: icons.moon_lightmode}
              style={iconStyle}
            />
            <Animated.View style={[styles.switch, switchStyles, {backgroundColor: themeColor.text_primary}]} />
          </>
        ) : (
          <>
            <Animated.View style={[styles.switch, switchStyles, {backgroundColor: themeColor.text_primary}]} />
            <Image
              source={icons.sun_darkmode}
              style={iconStyle}
            />
          </>
        )}
      </View>
    </TouchableOpacity>
  );
};

const iconStyle = {
  width: scaleWidth(sizes.theme_icon_size),
  height: scaleWidth(sizes.theme_icon_size),
};


const styles = StyleSheet.create({
  container: {
    width: scaleWidth(55),
    height: scaleHeight(28),
    borderRadius: 20,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 5,
  },
  activeContainer: {
    // backgroundColor: the,
  },
  switch: {
    width: scaleWidth(22),
    height: scaleWidth(22),
    borderRadius: scaleWidth(11),
    // backgroundColor: ,
  },
});

export default CustomSwitch;
