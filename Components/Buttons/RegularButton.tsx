import React, { FunctionComponent, ReactNode } from "react";
import styled from "styled-components/native";
import { colors } from "../colors";
import { Button, ButtonProps, StyleProp, ViewStyle } from "react-native";
import RegularText from "../text/regularText";
import { Text, View, StyleSheet, Pressable } from "react-native";

const RegularButton = (props: {
  onPress?: any;
  buttonStyle?: StyleProp<ViewStyle>;
  borderRadius?: number;
  children: ReactNode;
  color:string;
}) => {
  return (
    <View
      style={{ borderRadius: props.borderRadius ?? 20, overflow: "hidden" }}
    >
      <Pressable
        android_ripple={{ color: colors.secondary }}
        style={[
          {
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            alignSelf: "center",
            backgroundColor: colors.secondary,
            borderRadius: props.borderRadius ?? 20,
            elevation: 0,
            paddingVertical: 20,
            paddingHorizontal: 32,
          },
          props.buttonStyle,
        ]}
        onPress={props.onPress ?? function () {}}
      >
        <RegularText textStyles={{color: props.color}}>{props.children}</RegularText>
      </Pressable>
    </View>
  );
};

export default RegularButton;
