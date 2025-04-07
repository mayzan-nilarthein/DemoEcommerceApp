import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MainStackParamList } from "../types";
import BottomTabs from "../BottomTabs";
import Home from "../../screens/Home";
import Products from "../../screens/Products";
import ProductDetail from "../../screens/ProductDetail";
import Profile from "../../screens/Profile";
import Setting from "../../screens/Setting";

import { useThemeColors } from "../../theme/useThemeColors";
import CartList from "../../screens/OrderList";



const Stack = createNativeStackNavigator<MainStackParamList>();

const MainStack = ()=> {
  const themeColors = useThemeColors();
return(
    <Stack.Navigator initialRouteName="BottomTabs" screenOptions={{ headerShown: false, }}>

      <Stack.Screen name="BottomTabs" component={BottomTabs} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Products" component={Products} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} options={{headerShown: true}}/>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Setting" component={Setting} />
      <Stack.Screen name="CartList" component={CartList} options={{headerShown: true,}} />

    </Stack.Navigator>
)
}
export default MainStack;