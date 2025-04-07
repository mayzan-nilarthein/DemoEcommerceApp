import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../stores';
import AuthStack from './stack/AuthStack';

import { NavigationContainer } from '@react-navigation/native';

import MainStack from './stack/MainStack';

const RootNavigator = () => {
  const isSignedIn = useSelector((state: RootState) => state.auth.isSignedIn);

  return (
    <NavigationContainer>
      {isSignedIn ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default RootNavigator;
