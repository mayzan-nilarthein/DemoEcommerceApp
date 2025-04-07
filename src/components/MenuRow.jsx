import {View, Text, Image,  Pressable, Platform} from 'react-native';


import { styles } from '../theme/styles';
import { sizes } from '../theme/sizes';
import { icons } from '../assets/icons/icons';
import CustomSwitch from './CustomSwitch';
import { useThemeColors } from '../theme/useThemeColors';

const MenuRow = ({
  icon,
  title,
  isSwitchButton,
  onPress,

}) => {
  const themeColors = useThemeColors();

  return (
    <Pressable
      style={{
        ...styles.menuRowWrapper,
      }}
      onPress={onPress}>
      <View
        style={{
          flexDirection: 'row',

          alignItems: 'center',
        }}>
        <Image source={icon} style={styles.tabIcon} resizeMode="contain" />

        <Text
          style={{
              color: themeColors.text_secondary,
              marginLeft: sizes.spacing_medium,
            }}>
          {title}
        </Text>
      </View>

      {isSwitchButton && (
        <CustomSwitch size={60} />
      ) }
    </Pressable>
  );
};

export default MenuRow;
