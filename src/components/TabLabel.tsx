import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { sizes } from "../theme/sizes";
import { colors } from "../theme/colors";

interface TabLabelProps {
    focused: boolean;
    name: string;

}
const TabLabel: React.FC<TabLabelProps> = ({ focused, name }) => {
    return (
        <Text
            maxFontSizeMultiplier={1}
            style={{
                fontSize: sizes.font_small,
                color: focused ? colors.primary : colors.text_secondary
            }}>
            {name}
        </Text>


    );
};

export default TabLabel;
