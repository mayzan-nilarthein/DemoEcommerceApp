import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import { sizes } from "../theme/sizes";
import { colors } from "../theme/colors";
import { useThemeColors } from "../theme/useThemeColors";
import { useSelector } from "react-redux";
interface CustomHeaderProps {
    title: string;
}

const CustomHeader :React.FC<CustomHeaderProps>= ({title}) => {
  const themeColors = useThemeColors();
  const isDarkMode = useSelector((state: any) => state.theme.isDarkMode);
  return (
    <>
     <StatusBar barStyle={isDarkMode? 'light-content': 'dark-content'} backgroundColor={themeColors.surface_primary} />

    <View style={styles.container}>

      <Text style={{...styles.header, color: themeColors.text_primary}}>{title}</Text>
    </View></>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    width:sizes.width,

    height:sizes.button_height,
    justifyContent:'space-between',
    alignItems:'center',
    marginBottom: sizes.gap_minimal,
    paddingHorizontal: sizes.width * 0.05,
  },
  header:{
    fontSize: 16,
    fontWeight:'bold',
    color: colors.text_primary
  }
});
