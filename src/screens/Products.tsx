// screens/ProductsScreen.tsx
import React from 'react';
import { View, Text, FlatList, ActivityIndicator, Image , Pressable} from 'react-native';

import { useNavigation } from "@react-navigation/native";
import { useGetProductsQuery } from '../services/productApi';
import { styles } from '../theme/styles';
import CustomHeader from '../components/CustomHeader';
import Card from '../components/Card';
import { useThemeColors } from '../theme/useThemeColors';

const Products = () => {
  // Call the query, passing no argument or an empty object if needed
  const { data, error, isLoading } = useGetProductsQuery({});
  const themeColors = useThemeColors();
  const navigation = useNavigation();

  if (isLoading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return <Text>Error fetching products</Text>;
  }



  return (
    <View style={{...styles.container, backgroundColor: themeColors.surface_primary}}>
      <CustomHeader title={"All Products"} />
      <FlatList
        data={data?.products}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        renderItem={({ item }) => (
          <Card name={item.title} url={item.images[0]} onPress={()=>navigation.navigate('ProductDetail', {productId: item.id})}  id={item.id} price={item.price}/>
        )}
      />
    </View>
  );
};

export default Products;
