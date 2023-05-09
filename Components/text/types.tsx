  import { ReactNode } from "react";
import { StyleProp, TextStyle } from "react-native";

export interface TextProps {
    textStyles?: TextStyle; 
    children: ReactNode;
}