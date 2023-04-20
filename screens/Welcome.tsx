import { StatusBar } from "expo-status-bar";
import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { colors } from "../Components/colors";
import { container } from "../Components/shared";
import RegularButton from "../Components/Buttons/RegularButton";
import background from "../assets/backgrounds/background_v1.png";
import BigText from "../Components/text/bigText";
import SmallText from "../Components/text/smalltext";
import RegularText from "../Components/text/regularText";

const WelcomeContainer = styled(container)`
  background-color: ${colors.secondary};
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

const TopSection = styled.View`
 width: 100%
 flex: 1
 max-height: 55%
 `;
const BottomSection = styled.View`
 width: 100%
 flex: 1
 padding: 25px
 max-height: 55%
 justify-content: flex-end
 `;

const TopImage = styled.Image`
 width: 100%
 height: 100%
 resize-mode: stretch

 `;

const Welcome: FunctionComponent = () => {
  return (
    <>
      <StatusBar style="light" />
      <WelcomeContainer>
        <TopSection>
          <TopImage source={background} />
        </TopSection>
        <BottomSection>
          <BigText
            textStyles={{ width: "70%", marginBottom: 30, fontSize: 37 }}
          >Best way to track your events 
          </BigText>
          <SmallText textStyles={{ fontSize: 20, width: "70%" , paddingBottom:20}}>
             Your portal to events in Al Akhwayn University!
          </SmallText>
          <RegularButton buttonStyle = {{backgroundColor: colors.primary , paddingTop: 20}}>Proceed!</RegularButton>
          
        </BottomSection>
      </WelcomeContainer>
    </>
  );
};

export default Welcome;
