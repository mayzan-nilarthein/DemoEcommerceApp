import { StyleSheet, Text, View, Pressable, FlatList, Image, ActivityIndicator } from "react-native";
import React, { useState, useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import { useGetProductsQuery } from "../services/productApi";


const Home = () => {
  const navigation = useNavigation();
  const { data, error, isLoading } = useGetProductsQuery({});

  if (isLoading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return <Text>Error fetching products</Text>;
  }

  return (
    <View>

      <FlatList

        horizontal
        data={data?.products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ marginRight: 10, width: '100%', height: '100%' }}>
            <Text>{item.title}</Text>
            <Image
              source={{ uri: item.images[0]}}
              style={{ width: 100, height: 100,  resizeMode:'contain'}}
              resizeMode="contain"
            />
          </View>
        )}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
