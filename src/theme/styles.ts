import { StyleSheet } from "react-native";
import { sizes } from "./sizes";
import { colors } from "./colors";
import { scaleHeight } from "../utils/responsive";
export const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: colors.plain_white,

    },
    tabIcon: {
        width: sizes.tabbar_icon_size,
        height: sizes.tabbar_icon_size
    },
    columnWrapper: {
        flex:1,
        justifyContent:'space-between',
        alignItems:'center',
       paddingHorizontal: sizes.width*0.05
    },
    shadow:{
        shadowColor: '#000',
        shadowOffset: {
        width: 0,
        height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },

     menuRowWrapper: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    //   width: sizes.width * 0.9,
      paddingHorizontal: sizes.width * 0.05,

      height: scaleHeight(sizes.button_height),
      alignItems: 'center',
    },
})