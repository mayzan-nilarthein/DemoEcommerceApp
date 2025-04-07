import { StyleSheet, Text, StatusBar,View, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import { setCredentials } from "../../stores/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useLoginMutation } from "../../services/authApi";
import { sizes } from "../../theme/sizes";
import { colors } from "../../theme/colors";
import { useThemeColors } from "../../theme/useThemeColors";

const Login = () => {
   const dispatch = useDispatch();
  const [login, { isLoading }] = useLoginMutation();
  const themeColors = useThemeColors();
    const isDarkMode = useSelector((state: any) => state.theme.isDarkMode);

  const [username, setUsername] = useState('emilys');
  const [password, setPassword] = useState('emilyspass');


  const handleLogin = async () => {
    try {
      const result = await login({ username, password }).unwrap();
      // On success, store the tokens in Redux store
      dispatch(setCredentials({
        accessToken: result.accessToken,
        refreshToken: result.refreshToken,
      }));
      console.log('Login successful!', result);
    } catch (err) {
      console.error('Login failed', err);
    }
  };

  return (
    <View style={{justifyContent: 'flex-start',  alignItems: 'center', flex:1, paddingTop: 10, gap: 10}}>
      <StatusBar barStyle={isDarkMode? 'light-content': 'dark-content'} backgroundColor={themeColors.surface_primary} />
      <Text style={{fontSize: 18, fontWeight: 'bold'}}>Login</Text>
      <TextInput style={{width: sizes.width*0.9, backgroundColor: colors.plain_white}} placeholder="Username" value={username} onChangeText={setUsername} />
      <TextInput  style={{width: sizes.width*0.9, backgroundColor: colors.plain_white}} placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
      <Pressable  onPress={handleLogin} style={{width: sizes.width*0.9, backgroundColor: colors.primary,height: 50, borderRadius: 10, justifyContent:'center', alignItems:'center'}}>
        <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>{isLoading ? 'Logging in...' : 'Login'}</Text>
      </Pressable>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
