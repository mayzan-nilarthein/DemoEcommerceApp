import React from 'react';
import { Image } from 'react-native';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import { styles } from '../theme/styles';
import { icons } from '../assets/icons/icons';


import TabLabel from '../components/TabLabel';
import Home from '../screens/Home';
import Products from '../screens/Products';
import Profile from '../screens/Profile';
import { useThemeColors } from '../theme/useThemeColors';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  const themeColors = useThemeColors();
  return (
    <Tab.Navigator

      screenOptions={{

        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        headerShadowVisible: false,
        headerShown: false,
        tabBarStyle: {

          backgroundColor: themeColors.surface_primary,
          borderTopColor: themeColors.border_invert,

        },


      }}

    >
      {/* <Tab.Screen
        name="HomeTab"
        component={Home}
        options={{

          tabBarIcon: ({ focused }: { focused: boolean }) => (
            <Image style={styles.tabIcon} source={focused? icons.tab_home_filled: icons.tab_home} />
          ),

          tabBarLabel: ({ focused }: { focused: boolean }) =>
          {
            return(
               <TabLabel focused={focused} name='Home'/>
          )
          }
        }}
      /> */}

      <Tab.Screen
        name="ProductTab"
        component={Products}
        options={{
          tabBarIcon: ({ focused }: { focused: boolean }) => (
             <Image style={styles.tabIcon} source={focused? icons.tab_product_filled: icons.tab_product} />
          ),
           tabBarLabel: ({ focused }: { focused: boolean }) =>
          {
            return(
               <TabLabel focused={focused} name='Product' />
          )
          }
        }}
      />


      <Tab.Screen
        name="ProfileTab"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }: { focused: boolean }) => (
             <Image style={styles.tabIcon} source={focused? icons.tab_profile_filled: icons.tab_profile} />
          ),
          tabBarLabel: ({ focused }: { focused: boolean }) =>
          {
            return(
               <TabLabel focused={focused} name='Profile'/>
          )
          }
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
