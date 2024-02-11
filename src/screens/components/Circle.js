import React, { useState } from "react";
import { TouchableOpacity, View, Text } from "react-native";
import styles from "../style/Style";

const Circle = ({ onPress, style, isSelected }) => {
  const handlePress = () => {
    onPress && onPress();
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View
        style={[
          style,
          { marginHorizontal: 5, borderRadius: 10, height: 21, width: 21 },
          isSelected ? styles.circleBorder : null
        ]}
      >
       
      </View>
    </TouchableOpacity>
  );
};
export default Circle;