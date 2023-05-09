import React from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  ProgressBarAndroid,
  Pressable,
} from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Button, Icon } from "@ui-kitten/components";
import { colors } from "./colors";
import { color } from "react-native-reanimated";
import { StarIcon } from "./IconsFiles/Star";
import { TextStyle } from "react-native";
import RegularText from "./text/regularText";

const CustomDrawer = (props: any) => {
  return (
    <View style={{ flex: 1, marginTop: 40 }}>
      <View
        // source={require("../assets/images/wepik-export-20230423192709.png")}
        style={{
            backgroundColor: colors.secondary,
            borderTopEndRadius: 30,
            paddingHorizontal:20,
            paddingVertical:20
          }}
      >
        <View
        style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent:"space-between",
            width: "100%",
          }}>
          <Image
            source={require("../assets/images/user-profile.jpg")}
            style={{
              width: "25%",
              borderRadius: 40,
              aspectRatio: 1,
            }}
          />
          <View style={{ width: "40%" }}>
            <Text
              style={{
                color: "#fff",
                fontSize: 18,
                fontFamily: "BebasNeue-Regular",
                marginBottom: 5,
                width: "100%",
              }}
            >
              Oussama Ben Omar El Mdaghri
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  color: "#fff",
                  fontFamily: "BebasNeue-Regular",
                  marginRight: 5,
                }}
              >
                280 pts
              </Text>
              <StarIcon />
              {/* <FontAwesome5 name="coins" size={14} color="#fff" /> */}
            </View>
          </View>
          <Pressable
          
            android_ripple={{ color: colors.secondary }}
            style={{
            
            
              backgroundColor: "white",
              borderRadius: 10,
              width: "25%",
              height: 40,
              justifyContent: "center",
              alignItems: "center",
              borderColor: colors.white,
              borderWidth: 1,
              shadowColor: "#171717",
              shadowOffset: { width: -2, height: 4 },
              shadowOpacity: 0.2,
              shadowRadius: 3,
            }}
            children={
              <RegularText
                textStyles={{
                  fontSize: 11,
                  color: colors.secondary,
                  fontWeight: "bold",
                  fontFamily: "BebasNeue-Regular",
                  alignSelf: "center",
                }}
              >
                Redeem
              </RegularText>
            }
          />
        </View>
      </View>

      <View 
        style={{
          flexDirection: "column",
          paddingHorizontal: 0,
          paddingTop: 0,
          width: "100%",
          backgroundColor: colors.secondary,
          paddingBottom: 10,
        }}
      >
       
        <RegularText
          textStyles={{
            paddingLeft: 10,
            fontSize: 18,
            color: colors.white,
            fontWeight: "bold",
            fontFamily: "BebasNeue-Regular",
            alignSelf: "flex-start",
            paddingBottom:10,
          }}
          children={"Level 2"}
        />
        
       
        <ProgressBarAndroid
          styleAttr="Horizontal"
          indeterminate={false}
          progress={0.5}
          color={colors.green}
          style={{
            alignSelf: "center",
            backgroundColor: colors.secondary,
            width: "100%",
          }}
        />
      </View>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{
          backgroundColor: colors.secondary,
          paddingTop: 0,
          height: "100%",
        }}
      >
        <View style={{ flex: 1, backgroundColor: colors.secondary }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View
        style={{
          padding: 20,
          borderTopWidth: 1,
          borderTopColor: "#ccc",
          backgroundColor: colors.secondary,
        }}
      >
        <TouchableOpacity onPress={() => {}} style={{ paddingVertical: 15 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            {/* <Icon name="share-social-outline" size={22} /> */}
            <Text
              style={{
                color: colors.white,
                fontSize: 15,
                fontFamily: "BebasNeue-Regular",
                marginLeft: 5,
              }}
            >
              Settings
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={{ paddingVertical: 15 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            {/* <Icon name="exit-outline" size={22} /> */}
            <Text
              style={{
                color: colors.white,
                fontSize: 15,
                fontFamily: "BebasNeue-Regular",
                marginLeft: 5,
              }}
            >
              Sign Out
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;
