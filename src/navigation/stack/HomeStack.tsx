import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../../screens/Home";
import { HomeStackParamList } from "../types";


const Stack = createNativeStackNavigator<HomeStackParamList>();

const HomeStack = ()=> {
return(
    <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
)
}
export default HomeStack;