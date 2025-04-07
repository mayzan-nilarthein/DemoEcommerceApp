import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "../../screens/Profile";
import Order from "../../screens/Order";
import OrderList from "../../screens/OrderList";
import Setting from "../../screens/Setting";


import { ProfileStackParamList } from "../types";


const Stack = createNativeStackNavigator<ProfileStackParamList>();

const ProfileStack = ()=> {
return(
    <Stack.Navigator >
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Order" component={Order} />
        <Stack.Screen name="OrderList" component={OrderList} />
        <Stack.Screen name="Setting" component={Setting} />

    </Stack.Navigator>
)
}
export default ProfileStack;