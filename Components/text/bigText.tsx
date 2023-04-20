import React, { FunctionComponent, ReactNode } from "react";
import { colors } from "../colors";
import { StyleProp, TextStyle, Text } from "react-native";

const BigText = (props: {
  textStyles?: StyleProp<TextStyle>;
  children: ReactNode;
}) => {
  return (
    <Text
      style={[
        {
          fontSize: 37,
          color: colors.white,
          textAlign: "left",
          fontFamily: "Lato-Bold",
        },
        props.textStyles,
      ]}
    >
      {props.children}
    </Text>
  );
};
export default BigText;
