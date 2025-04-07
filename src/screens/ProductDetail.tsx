import { StyleSheet,ActivityIndicator, FlatList,Text, View , Image} from "react-native";
import React from "react";
import {useRoute} from '@react-navigation/native'
import { useGetProductDetailQuery } from "../services/productApi";
import { colors } from "../theme/colors";
import { useThemeColors } from "../theme/useThemeColors";
import { sizes } from "../theme/sizes";
import Loading from "../components/Loading";


const ProductDetail = () => {

 const {params} = useRoute();
 const themeColors = useThemeColors();
  const { productId } = params as { productId: string };
console.log('produdt detail param;', params);
 const { data, error, isLoading } = useGetProductDetailQuery(productId);
if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Text>Error fetching product details.</Text>;
  }
  return (
    <View style={{backgroundColor: themeColors.surface_primary, flex:1, paddingHorizontal: sizes.width* 0.05}}>

     <Image source={{ uri: data?.images[0] }} style={{width: sizes.width, height: sizes.height* 0.35, resizeMode:'contain'}} />
      <Text style={{color: themeColors.text_primary, fontSize:16, marginBottom: sizes.gap_medium}}>{data?.title}</Text>
      <Text style={{color: themeColors.text_primary, fontSize: 14, lineHeight: 24}}>{data?.description}</Text>
      <Text style={{color: themeColors.text_primary, fontSize: 14, lineHeight: 24}}>${data?.price}</Text>
    </View>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({});
