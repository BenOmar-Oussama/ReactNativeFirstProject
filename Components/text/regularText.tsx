import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { colors } from "../colors";
import { StyleProp } from "react-native";

const StyledText = styled.Text`
font-size: 15px
color: ${colors.white}
text-align: left
font-family:BebasNeue-Regular
`;

import { TextProps } from "./types";

const RegularText: React.FC<TextProps> = (props: any) => {
  return <StyledText style={props.textStyles}> {props.children} </StyledText>;
};
export default RegularText;
