import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {ThemeContext} from '../Context/ThemeContext';
import CustomHeader from './CustomHeader';
import {colors} from '../theme/colors';
import { useThemeColors } from '../theme/useThemeColors';

const Loading = ({title, hasHeader}) => {
  const themeColors = useThemeColors();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: themeColors.surface_primary,
        // justifyContent: 'center',
        // alignItems: 'center',
      }}>
      {hasHeader && (
        <CustomHeader
          title={title}
          hasRightIcon={true}
          // setShowSignInModal={setShowSignInModal1}
          // isFav={favorites?.some(fav => fav.menu.id === data?.id)}
          // onPressFav={onPressFav}
        />
      )}
      <ActivityIndicator
        color={colors.primary}
        size={'large'}
        style={{flex: 1, justifyContent: 'center'}}
      />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({});
