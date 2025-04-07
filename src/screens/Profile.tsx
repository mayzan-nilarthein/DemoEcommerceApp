import { StyleSheet, Text, View,Pressable } from "react-native";
import React from "react";
import { logout } from "../stores/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/types";
import CustomSwitch from "../components/CustomSwitch";
import { useThemeColors } from "../theme/useThemeColors";
import CustomHeader from "../components/CustomHeader";
import MenuRow from "../components/MenuRow";
import { icons } from "../assets/icons/icons";
import { sizes } from "../theme/sizes";
const Profile = () => {
    const dispatch = useDispatch();


    const navigation = useNavigation<RootStackParamList>();
     const isDarkMode = useSelector((state: any) => state.theme.isDarkMode);
    const themeColors = useThemeColors();
  return (
    <View style={{backgroundColor: themeColors.surface_primary, flex:1, }}>
     <CustomHeader title="Profile" />
      <MenuRow
        icon={isDarkMode? icons.sun_darkmode: icons.sun_lightmode}
              isSwitchButton={true}
        title={'Theme Setting'}/>
      <MenuRow
        icon={isDarkMode? icons.history_dark: icons.history_light}
              isSwitchButton={false}
              onPress={()=> navigation.navigate('CartList')}
        title={'Cart Items'}/>
      <MenuRow
        icon={isDarkMode? icons.logout_dark: icons.logout_light}
              isSwitchButton={false}
              onPress={()=> dispatch(logout())}
        title={'Logout'}/>

    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
