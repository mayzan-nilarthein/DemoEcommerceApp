import { StyleSheet, Text, View , Pressable, Image} from "react-native";
import React, {useState} from "react";
import { sizes } from "../theme/sizes";
import { colors } from "../theme/colors";
import { icons } from "../assets/icons/icons";
import { useThemeColors } from "../theme/useThemeColors";
import { useDispatch } from 'react-redux';
import { addToOrder } from "../stores/slices/orderSlice";

const Card = ({id,name, price, url, onPress}) => {
 const [added, setAdded] = useState(false);
 const themeColor = useThemeColors();
 const dispatch = useDispatch();

 const handleAddToOrder = () => {
    setAdded(true)
    const orderItem = {
      id,
      name,
      price,
      url,
      quantity: 1,
    };
    dispatch(addToOrder(orderItem));
  };


  return (

    <Pressable style={[styles.container, styles.shadow, {backgroundColor: themeColor.surface_primary, borderColor: themeColor.border_invert}]} onPress={onPress}>
        <Image src={url} style={{width:100, height: 100}} resizeMode='contain'/>
      <Text style={{color: themeColor.text_primary, textAlign:'center'}}>{name}</Text>

      <Pressable style={{...styles.addToCart, backgroundColor: themeColor.surface_secondary}} onPress={handleAddToOrder}>
       <Image source={added ? icons.added : icons.add} style={styles.addIcon} resizeMode="contain"/>
      </Pressable>

    </Pressable>
  );
};

export default Card;

const styles = StyleSheet.create({
    container:{
        width: sizes.width * 0.42,
        height: sizes.height* 0.2,
        backgroundColor: colors.plain_white,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: colors.plain_white,
        justifyContent:'center',
        alignItems:"center",
        marginBottom: sizes.gap_minimal,
        padding: sizes.gap_minimal
    },
    addToCart:{
        position:'absolute',
        top: 0,
        right:0,
        width: 30,
        height: 30,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:colors.plain_white,
        borderBottomLeftRadius:7,
        borderTopRightRadius: 9,
        shadowColor: '#000',
        shadowOffset: {
        width: 0,
        height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    addIcon: {
        width: 15,
        height: 15
    },
    shadow:{
        shadowColor: colors.border_secondary,
        shadowOffset: {
        width: 0,
        height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 1,
        elevation: 2,
    }

});
