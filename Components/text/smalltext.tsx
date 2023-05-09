import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { colors } from "../colors";
import { StyleProp } from "react-native";

const StyledText = styled.Text`
font-size: 13px
color: ${colors.gray}
text-align: left
font-family: BebasNeue-Regular
`;

import { TextProps } from "./types";

const SmallText: React.FC<TextProps> = (props:any) => {
  return <StyledText style = {props.textStyles}> {props.children} </StyledText>;
};
export default SmallText;
