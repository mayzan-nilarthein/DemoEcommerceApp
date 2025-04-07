// src/screens/CartScreen.tsx
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromOrder } from '../stores/slices/orderSlice';
import { RootState } from '@reduxjs/toolkit/query';

const CartScreen = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state: RootState) => state.orders.items); // Access orders from Redux store

  const handleRemoveFromOrder = (id: string) => {
    dispatch(removeFromOrder(id));
  };

  const renderItem = ({ item }) => (
    <View style={styles.orderItem}>
      <Text>{item.title}</Text>
      <Text>Quantity: {item.quantity}</Text>
      <TouchableOpacity onPress={() => handleRemoveFromOrder(item.id)} style={styles.removeButton}>
        <Text style={styles.removeButtonText}>Remove</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your Cart</Text>
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
    fontSize: 24,
    fontWeight: 'bold',
  },
  orderItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
  },
  removeButton: {
    backgroundColor: '#ff0000',
    padding: 5,
    borderRadius: 4,
  },
  removeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default CartScreen;
