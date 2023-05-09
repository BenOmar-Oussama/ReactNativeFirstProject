import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { container } from "../Components/shared";
import { colors } from "../Components/colors";
import { useState } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";

import { MaterialIcons, AntDesign } from "@expo/vector-icons";

import { StyleProp, TextStyle } from "react-native";
import RegularText from "../Components/text/regularText";
import StoryList from "../Components/StoryList";
import BigText from "../Components/text/bigText";
import { Line } from "react-native-svg";
import { debug } from "react-native-reanimated";

const { width } = Dimensions.get("window");

const HomeContainer = styled(container)`background-color = ${colors.secondary};
`;

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  challengeType: number;
  points: number;
  organizer: string;
  timeRemaining: string;
  location: string;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  imageUrl,
  challengeType,
  points,
  organizer,
  timeRemaining,
  location,
}) => (
  <View style={styles.card}>
    <Image source={{ uri: imageUrl }} style={styles.cardImage} />
    <View style={styles.cardContent}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardDescription}>{description}</Text>
      <View style={styles.challengeInfo}>
        <MaterialIcons name="camera-alt" size={24} color="#1B1B1B" />
        {/* Add other icons for different challenge types */}
        <Text style={styles.points}>{points} points</Text>
      </View>
      <Text style={styles.organizer}>Organizer: {organizer}</Text>
      <Text style={styles.timeRemaining}>Time remaining: {timeRemaining}</Text>
      <Text style={styles.location}>Location: {location}</Text>
      <View style={styles.socialButtons}>
        <TouchableOpacity style={styles.likeButton}>
          <AntDesign name="like2" size={24} color="#1B1B1B" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.shareButton}>
          <AntDesign name="sharealt" size={24} color="#1B1B1B" />
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

const Home: FunctionComponent = () => {
  const stories = [
    {
      id: "SSE",
      image: "https://picsum.photos/id/237/200/300",
    },
    {
      id: "SHSS",
      image: "https://picsum.photos/id/238/200/300",
    },
    {
      id: "SBA",
      image: "https://picsum.photos/id/239/200/300",
    },
    {
      id: "SAO",
      image: "https://picsum.photos/id/240/200/300",
    },
    {
      id: "ITS",
      image: "https://picsum.photos/id/241/200/300",
    },
  ];
  const cards = [
    {
      title: "Event 1",
      description: "Event 1 description",
      imageUrl: "https://via.placeholder.com/150",
      challengeType: 1,
      points: 100,
      organizer: "Organizer 1",
      timeRemaining: "2 days",
      location: "Location 1",
    },
    {
      title: "Event 1",
      description: "Event 1 description",
      imageUrl: "https://via.placeholder.com/150",
      challengeType: 1,
      points: 100,
      organizer: "Organizer 1",
      timeRemaining: "2 days",
      location: "Location 1",
    },
    {
      title: "Event 1",
      description: "Event 1 description",
      imageUrl: "https://via.placeholder.com/150",
      challengeType: 1,
      points: 100,
      organizer: "Organizer 1",
      timeRemaining: "2 days",
      location: "Location 1",
    },
    // Add more cards here
  ];
  return (
    <HomeContainer
      style={{ backgroundColor: colors.secondary, paddingTop: 30 }}
    >
      <View
        style={{
          backgroundColor: colors.secondary,
          height: "27%",
          paddingTop: 0,
        }}
      >
        <BigText
          textStyles={{
            width: "100%",
            marginBottom: 0,
            fontSize: 37,
            paddingLeft: "3%",
          }}
        >
          Welcome,
        </BigText>
        <View style={styles.viewStyleForLine} />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            paddingTop: "3%",
            paddingBottom: "3%",
          }}
        >
          <TouchableOpacity>
            <RegularText textStyles={{ paddingLeft: "3%", fontSize: 16 , color:colors.green}}>
              Discover
            </RegularText>
          </TouchableOpacity>
          <TouchableOpacity>
          <RegularText textStyles={{ paddingLeft: "3%", fontSize: 16 }}>
            Following
          </RegularText>
          </TouchableOpacity>
          <TouchableOpacity>
          <RegularText textStyles={{ paddingLeft: "3%", fontSize: 16 }}>
            Friends
          </RegularText>
          </TouchableOpacity>
        </View>
        <View style={styles.viewStyleForLine2} />

        {/* <StoryList stories={stories} /> */}
      </View>
      <ScrollView contentContainerStyle={styles.container}>
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </ScrollView>
    </HomeContainer>
  );
};

const styles = StyleSheet.create({
  viewStyleForLine: {
    paddingVertical: "1%",
    borderBottomColor: "white",
    borderBottomWidth: StyleSheet.hairlineWidth,
    alignSelf: "stretch",
    width: "100%",
  },
  viewStyleForLine2: {
    paddingVertical: 0,
    borderBottomColor: "white",
    borderBottomWidth: StyleSheet.hairlineWidth,
    alignSelf: "center",
    width: "100%",
  },
  container2: {
    flex: 1,
    backgroundColor: "#000",
  },
  scrollContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  storyContainer: {
    width: width / 5,
    height: width / 5,
    borderRadius: width / 8,
    marginHorizontal: 5,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#fff",
    borderWidth: 2,
  },
  activeStoryContainer: {
    borderColor: "#3498db",
  },
  storyImage: {
    width: width / 5 - 10,
    height: width / 5 - 10,
    borderRadius: width / 8 - 5,
  },
  bottomContainer: {
    padding: 10,
    alignItems: "center",
  },
  username: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  container: {
    gap: 20,
    padding: 30,
    backgroundColor: colors.secondary,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 0,
    // shadowColor: colors.green,

    shadowOpacity: 2,
    shadowRadius: 2,
    elevation: 4,
  },
  cardImage: {
    width: "100%",
    height: 200,
  },
  cardContent: {
    padding: 20,
    backgroundColor: "#F5F5F5",
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1B1B1B",
    marginBottom: 10,
  },
  cardDescription: {
    fontSize: 14,
    color: "#333",
    marginBottom: 10,
  },
  challengeInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  points: {
    marginLeft: 10,
    fontSize: 14,
    fontWeight: "bold",
    color: "#1B1B1B",
  },
  organizer: {
    fontSize: 14,
    color: "#333",
    marginBottom: 10,
  },
  timeRemaining: {
    fontSize: 14,
    color: "#333",
    marginBottom: 10,
  },
  location: {
    fontSize: 14,
    color: "#333",
  },
  socialButtons: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 10,
  },
  likeButton: {
    marginRight: 10,
  },
  shareButton: {},
});

export default Home;
