// src/screens/CartScreen.tsx
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromOrder } from '../stores/slices/orderSlice';
import { RootState } from '@reduxjs/toolkit/query';
import { colors } from '../theme/colors';
import { useThemeColors } from '../theme/useThemeColors';


const CartList = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state: RootState) => state.orders.items);
  console.log('Orders::::', orders);
  const themeColors = useThemeColors();


  const handleRemoveFromOrder = (id: string) => {
    dispatch(removeFromOrder(id));
  };

  const renderItem = ({ item }) => (


    <View style={{...styles.orderItem, backgroundColor: themeColors.surface_secondary}}>
      <Image src={item.url} style={{width: 50, height: 50}} resizeMode={'contain'} />
      <Text style={{color:themeColors.text_primary}}>{item.name}</Text>
      <Text style={{color:themeColors.text_primary}}>Quantity: {item.quantity}</Text>

    </View>
  );

  return (
    <View style={{...styles.container, backgroundColor: themeColors.surface_primary}}>
      <Text style={{...styles.header, color: themeColors.text_primary}}>Cart items</Text>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,

  },
  header: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingBottom: 10
  },
  orderItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    padding: 10,
    borderRadius: 8,
  },

  removeButtonText: {
    color: colors.plain_white,
    fontWeight: 'bold',
  },
});

export default CartList;
