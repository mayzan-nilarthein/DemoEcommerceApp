import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Products from "../../screens/Products";

import ProductDetail from "../../screens/ProductDetail";
import { ProductStackParamList } from "../types";


const Stack = createNativeStackNavigator<ProductStackParamList>();

const ProductStack = ()=> {
return(
    <Stack.Navigator initialRouteName="Products">
        <Stack.Screen name="Products" component={Products} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />

    </Stack.Navigator>
)
}
export default ProductStack;