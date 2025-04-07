
export type AuthStackParamList = {
  Login: undefined;
  SignUp: undefined;
};
export type RootStackParamList = {
  Login: undefined;
  SignUp: undefined;
  Home: undefined;
  Products: undefined;
  ProductDetail: { productId: string };
  Order: undefined;
  OrderList: undefined;
  Profile: undefined;
  Setting: undefined;
}

export type MainStackParamList = {
 BottomTabs: undefined;
}


export type HomeStackParamList = {
  Home: undefined;
}

export type ProductStackParamList = {
  Products: undefined;
  ProductDetail: { productId: string };
}
export type ProfileStackParamList = {
  Order: undefined;
  OrderList: undefined;
  Profile: undefined;
  Setting: undefined
}
