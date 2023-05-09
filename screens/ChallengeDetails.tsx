import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  FlatList,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { colors } from "../Components/colors";

import { Icon } from "@ui-kitten/components";
import ProfileHeader from "react-native-profile-header";
import { ScrollView } from "react-native";
import learnMoreData from "../assets/data/learnMoreData";
import RegularButton from "../Components/Buttons/RegularButton";

const height = Dimensions.get("window").height;

const renderLearnMoreItem = ({ item }: any) => {
  return (
    <ImageBackground
      source={item.image}
      style={[
        styles.learnMoreItem,
        {
          marginLeft: item.id === "learnMore-1" ? 20 : 0,
        },
      ]}
      imageStyle={styles.learnMoreItemImage}
    >
      {/* <Icon name="heart-outline" fill="red" style={styles.iconsmall} /> */}
    </ImageBackground>
  );
};
const Details = ({ route, navigation }: any) => {
  const { item } = route.params;
  return (
    <ScrollView>
      <View style={styles.container}>
        {/* <ProfileHeader height={80} disableFirstIcon={true} disableSecondIcon={true}/>  */}
        <ImageBackground source={item.imageBig} style={styles.backgroundImage}>
          <TouchableOpacity
            style={styles.backIcon}
            onPress={() => navigation.goBack()}
          >
            {/* <Icon name="chevron-left" size={32} color={colors.white} /> */}
          </TouchableOpacity>
          <View style={styles.titlesWrapper}>
            <Text style={styles.itemTitle}>{item.title}</Text>
            <View style={styles.locationWrapper}>
              {/* <Icon name="location-pin" size={24} color={colors.white} /> */}
              {/* <Text style={styles.locationText}>{item.location}</Text> */}
            </View>
          </View>
        </ImageBackground>
        <View style={styles.descriptionWrapper}>
          <View style={styles.heartWrapper}>
            <Icon
              name="camera-outline"
              fill={colors.green}
              style={styles.icon}
            />
          </View>
          <View style={styles.descriptionTextWrapper}>
            <Text style={styles.descriptionTitle}>Description</Text>
            <Text style={styles.descriptionText}>{item.description}</Text>
          </View>

          <View style={styles.infoWrapper}>
            <View style={styles.infoItem}>
              <Text style={styles.infoTitle}>Points</Text>
              <View style={styles.infoTextWrapper}>
                <Text style={styles.infoText}>{item.points}</Text>
              </View>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.infoTitle}>Location</Text>
              <View style={styles.infoTextWrapper}>
                <Text style={styles.infoText}>{item.location}</Text>
                <Text style={styles.infoSubText}></Text>
              </View>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.infoTitle}>Time Remaining</Text>
              <View style={styles.infoTextWrapper}>
                <Text style={styles.infoText}>{item.timeremaining}</Text>
                <Text style={styles.infoSubText}> mins</Text>
              </View>
            </View>
          </View>
          <View style={{ paddingTop: 20, paddingHorizontal: 20 }}>
            <RegularButton
              buttonStyle={{ backgroundColor: colors.green }}
              children={"Scan Now"}
              color={"black"}
              onPress={() => navigation.navigate("CameraView")}
            />
          </View>
          {/* <TouchableOpacity
          style={styles.buttonWrapper}
          onPress={() => console.log('You booked a trip!')}>
          <Text style={styles.buttonText}>Scan Now</Text>
        </TouchableOpacity> */}
          <View style={{ flexDirection: "row", alignItems: "baseline" }}>
            <Text style={styles.descriptionTitlefeed}>Picture feed</Text>
            <Text style={styles.seemore}>see more</Text>
          </View>
          <View style={styles.learnMoreItemsWrapper}>
            <FlatList
              data={learnMoreData}
              renderItem={renderLearnMoreItem}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  learnMoreItemsWrapper: {
    paddingVertical: 10,
  },
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
    paddingBottom: "0%",
  },
  backgroundImage: {
    height: height * 0.6,
    justifyContent: "space-between",
  },
  descriptionWrapper: {
    flex: 1,
    backgroundColor: colors.secondary,
    marginTop: -20,
    height: "100%",
    borderRadius: 25,
  },
  backIcon: {
    marginLeft: 20,
    marginTop: 60,
  },
  titlesWrapper: {
    marginHorizontal: 20,
    marginBottom: 40,
  },
  itemTitle: {
    fontFamily: "BebasNeue-Regular",
    fontSize: 44,
    color: colors.white,
  },
  locationWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  locationText: {
    fontFamily: "BebasNeue-Regular",
    fontSize: 16,
    color: colors.white,
  },
  learnMoreItem: {
    width: 170,
    height: 180,
    justifyContent: "flex-end",
    marginRight: 20,
  },
  learnMoreItemImage: {
    borderRadius: 20,
  },
  learnMoreItemText: {
    fontFamily: "BebasNeue-Regular",
    fontSize: 18,
    color: colors.white,
    marginHorizontal: 10,
    marginVertical: 20,
  },
  heartWrapper: {
    position: "absolute",
    right: 40,
    top: -30,
    width: 64,
    height: 64,
    backgroundColor: colors.secondary,
    borderRadius: 64,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: colors.white,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  descriptionTextWrapper: {
    marginTop: 30,
    marginHorizontal: 20,
  },
  descriptionTitle: {
    fontFamily: "BebasNeue-Regular",
    fontSize: 24,
    color: colors.white,
  },
  descriptionTitlefeed: {
    fontFamily: "BebasNeue-Regular",
    fontSize: 24,
    color: colors.white,
    paddingLeft: 20,
    paddingTop: 20,
  },
  seemore: {
    fontFamily: "BebasNeue-Regular",
    textAlign: "right",

    fontSize: 12,
    color: colors.green,
    paddingLeft: "54%",
    paddingTop: 20,
  },
  descriptionText: {
    marginTop: 20,
    fontFamily: "BebasNeue-Regular",
    fontSize: 16,
    color: colors.darkGray,
    height: 85,
  },
  infoWrapper: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginTop: 20,
    justifyContent: "space-between",
  },
  infoItem: {},
  infoTitle: {
    fontFamily: "BebasNeue-Regular",
    fontSize: 12,
    color: colors.gray,
  },
  infoTextWrapper: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginTop: 5,
  },
  infoText: {
    fontFamily: "BebasNeue-Regular",
    fontSize: 32,
    color: colors.orange,
  },
  infoSubText: {
    fontFamily: "BebasNeue-Regular",
    fontSize: 14,
    color: colors.gray,
  },
  buttonWrapper: {
    marginHorizontal: 20,
    marginTop: 40,
    backgroundColor: colors.orange,
    alignItems: "center",
    paddingVertical: 15,
    borderRadius: 10,
  },
  buttonText: {
    fontFamily: "BebasNeue-Regular",
    fontSize: 18,
    color: colors.secondary,
  },
  icon: {
    paddingLeft: 70,
    width: 32,
    height: 32,
  },
  iconsmall: {
    paddingLeft: 20,
    paddingBottom: 20,
    width: 22,
    height: 22,
  },
});

export default Details;
