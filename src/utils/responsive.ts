
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

const scaleWidth = (size: number): number => (width / guidelineBaseWidth) * size;
const scaleHeight = (size: number): number => (height / guidelineBaseHeight) * size;

export { scaleWidth, scaleHeight };
