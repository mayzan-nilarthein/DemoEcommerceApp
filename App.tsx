import { StyleSheet, Text, View } from "react-native";
import React from "react";



import { Provider } from "react-redux";
import { store } from "./src/stores";
import RootNavigator from "./src/navigation/RootNavigator";
export default function App() {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({});
