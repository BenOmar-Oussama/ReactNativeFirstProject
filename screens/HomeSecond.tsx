import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  ImageBackground,
  Dimensions,
} from "react-native";
import { Badge } from "@rneui/themed";
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import EventCalendar from 'react-native-events-calendar'
import { colors } from "../Components/colors";
import activitiesData from "../assets/data/activitiesData";
import learnMoreData from "../assets/data/learnMoreData";
import discoverData from "../assets/data/discoverData";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { Icon } from '@ui-kitten/components';
import StoryList from "../Components/StoryList";
import RNCalendarEvents from "react-native-calendar-events";
import { container } from '../Components/shared';


const HomeSecond = ({ navigation }: any) => {
  const getCurrentDate=(extraday: number )=>{
 
    var date = new Date().getDate() + extraday ;
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();

    //Alert.alert(date + '-' + month + '-' + year);
    // You can turn it in to your desired format
    return date + '-' + month + '-' + year;//format: d-m-y;
}
  let { width } = Dimensions.get('window')
  const events = [
    { color: '#F4EFDB',start: '2017-09-07 00:30:00', end: '2017-09-07 01:30:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
    { color: '#F4EFDB',start: '2017-09-07 01:30:00', end: '2017-09-07 02:20:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
    { start: '2017-09-07 04:10:00', end: '2017-09-07 04:40:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
    {color: '#F4EFDB', start: '2017-09-07 01:05:00', end: '2017-09-07 01:45:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
    { color: '#F4EFDB',start: '2017-09-07 14:30:00', end: '2017-09-07 16:30:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
    { start: '2017-09-08 01:20:00', end: '2017-09-08 02:20:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
    { start: '2017-09-08 04:10:00', end: '2017-09-08 04:40:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
    { color: '#F4EFDB',start: '2017-09-08 00:45:00', end: '2017-09-08 01:45:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
    { start: '2017-09-08 11:30:00', end: '2017-09-08 12:30:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
    { color: '#F4EFDB',start: '2017-09-09 01:30:00', end: '2017-09-09 02:00:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
    { start: '2017-09-09 03:10:00', end: '2017-09-09 03:40:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
    { color: '#F4EFDB',start: '2017-09-09 00:10:00', end: '2017-09-09 01:45:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' }
]
 
  const vacation = {key:'vacation', color: 'red', selectedDotColor: 'blue'};
const massage = {key:'massage', color: 'blue', selectedDotColor: 'blue'};
const workout = {key:'workout', color: 'green'};
  const data = [
    { label: "Item 1", value: "1" },
    { label: "Item 2", value: "2" },
    { label: "Item 3", value: "3" },
    { label: "Item 4", value: "4" },
    { label: "Item 5", value: "5" },
    { label: "Item 6", value: "6" },
    { label: "Item 7", value: "7" },
    { label: "Item 8", value: "8" },
  ];
  const stories = [
    {
      id: "SSE",
      newstories: 4,
      image: "https://picsum.photos/id/237/200/300",
    },
    {
      id: "SHSS",
      newstories: 2,
      image: "https://picsum.photos/id/238/200/300",
    },
    {
      id: "SBA",
      newstories: 1,
      image: "https://picsum.photos/id/239/200/300",
    },
    {
      id: "SAO",
      newstories: 0,
      image: "https://picsum.photos/id/240/200/300",
    },
    {
      id: "ITS",
      newstories: 0,
      image: "https://picsum.photos/id/241/200/300",
    },
  ];
  const renderDiscoverItem = ({ item }: any) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("ChallengeDetails", {
            item: item,
          })
        }
      >
        <ImageBackground
          source={item.image}
          style={[
            styles.discoverItem,
            { marginLeft: item.id === "discover-1" ? 20 : 0 },
          ]}
          imageStyle={styles.discoverItemImage}
        >
         
          {/* <LinearGradient
            colors={["#FC67A7", "#F6815B"]}
            start={[0.1, 0.1]}
            style={styles.linearGradient}
          > */}
           <Badge
            status =  {item.status == 0 ? "primary" : "success" }
            value={item.points + " pts"}
            containerStyle={{ position: 'absolute', top: 0, left: 0 }}
            badgeStyle={{height:20, width:60 , borderColor:"transparent"}}
          />
          <View style={{flexDirection:"row" , alignSelf:"center"}}>
          <Text style={styles.discoverItemremainingtime}>{item.timeremaining} mins</Text>
          <Icon name="clock-outline"  fill={colors.white} style={styles.icontime} />
          </View>
          <Text style={styles.discoverItemTitle}>{item.title}</Text> 
          
          <View style={styles.discoverItemLocationWrapper}>
            <Icon name="pin-outline"  fill={colors.white} style={styles.icon} />
            <Text style={styles.discoverItemLocationText}>{item.location}</Text>
            <Text style={styles.discoverItemType}>Type : </Text>
            <Icon name= {item.Challengetype}  fill={colors.white} style={styles.icon} />
          </View>
          {/* </LinearGradient> */}
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  const renderActivityItem = ({ item }: any) => {
    return (
      <View
        style={[
          styles.activityItemWrapper,
          {
            marginLeft: item.id === "activities-1" ? 20 : 0,
          },
        ]}
      >
        <Image source={item.image} style={styles.activityItemImage} />
        <Text style={styles.activityItemText}>{item.title}</Text>
      </View>
    );
  };

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
        <Text style={styles.learnMoreItemText}>{item.title}</Text>
      </ImageBackground>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* Header */}
        <SafeAreaView>
          <View style={styles.menuWrapper}>
            {/* <Icon
              name="menu"
              size={32}
              color={colors.black}
              
            /> */}
            {/* <Image source={profile} style={styles.profileImage} /> */}
          </View>
        </SafeAreaView>

        {/* Discover */}
        <View style={styles.discoverWrapper}>
          {/* <Text style={styles.discoverTitle}>Discover</Text> */}
          <StoryList stories={stories} />
          <View style={{flexDirection : "row" , alignItems:"baseline" , alignSelf:"flex-start"}}>
          <Text style={styles.ongoing}>OnGoing</Text>
          <Text style={styles.ongoingChal}>Challenges</Text>
          </View>
          <ScrollView horizontal={true} bounces={true}>
            <View style={styles.discoverCategoriesWrapper}>
              <Text
                style={[styles.discoverCategoryText, { color: colors.orange }]}
              >
                All
              </Text>
              {/* <MultiSelectComponent/> */}
              <Text style={styles.discoverCategoryText}>SSE</Text>
              <Text style={styles.discoverCategoryText}>SAO</Text>
              <Text style={styles.discoverCategoryText}>SHSS</Text>
              <Text style={styles.discoverCategoryText}>SBA</Text>
              <Text style={styles.discoverCategoryText}>SAC</Text>
              <Text style={styles.discoverCategoryText}>SSE</Text>
              <Text style={styles.discoverCategoryText}>SAO</Text>
              <Text style={styles.discoverCategoryText}>SHSS</Text>
              <Text style={styles.discoverCategoryText}>SBA</Text>
              <Text style={styles.discoverCategoryText}>SAC</Text>
            </View>
          </ScrollView>
          <View style={styles.discoverItemsWrapper}>
            <FlatList
              data={discoverData}
              renderItem={renderDiscoverItem}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>

        {/* Activities */}
        <View style={styles.activitiesWrapper}>
          <View style={{flexDirection: "row" , alignItems:"baseline" , alignSelf:"flex-start"}}>
            {/* <Text style={styles.ongoing}></Text> */}
            <Text style={styles.thisweek}>This Week</Text>
          </View>
          <Text style={styles.activitiesTitle}>Available Activities</Text>
          <View style={styles.activitiesItemsWrapper}>
            <FlatList
              data={activitiesData}
              renderItem={renderActivityItem}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{marginTop:"-3%"}}
            />
          </View>
        </View>

        {/* Learn More */}
        <View style={styles.learnMoreWrapper}>
          <Text style={styles.learnMoreTitle}>Challenges</Text>
          <Text style={styles.ongoingdates}>{getCurrentDate(0)}</Text>
          <View style={styles.learnMoreItemsWrapper}>
            <FlatList
              data={learnMoreData}
              renderItem={renderLearnMoreItem}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
          <Text style={styles.ongoingdates}>{getCurrentDate(1)}</Text>
          <View style={styles.learnMoreItemsWrapper}>
            <FlatList
              data={learnMoreData}
              renderItem={renderLearnMoreItem}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
          <Text style={styles.ongoingdates}>{getCurrentDate(2)}</Text>
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
        {/* <EventCalendar
      eventTapped={() => {}}
      events={events}
      width={width}
      initDate={'2017-09-08'}
      // style={styles.calendar}
    /> */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  calendar:{
    backgroundColor: 'white'
  },
  icon: {
    paddingLeft: 0,
    width: 20,
    height: 20,
  },
  icontime: {
    paddingLeft: 0,
    width: 36,
    height: 36,
  },
  linearGradient: {
    width: '100%',
    height: '100%',
    
    
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    flex: 1,

    backgroundColor: colors.secondary,
  },
  menuWrapper: {
    marginHorizontal: 0,
    marginTop: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  profileImage: {
    width: 52,
    height: 52,
    borderRadius: 10,
  },
  discoverWrapper: {
    // marginHorizontal: 20,
    marginTop: 0,
    paddingTop: 0,
    backgroundColor: colors.secondary,
  },
  discoverTitle: {
    marginHorizontal: 20,
    paddingTop: 0,
    marginTop: -20,
    fontFamily: "BebasNeue-Regular",
    fontSize: 38,
    color: colors.white,
  },
  ongoing: {
    marginHorizontal: 20,
    paddingVertical: 10,
    marginTop: -20,
    fontFamily: "BebasNeue-Regular",
    fontSize: 24,
    color: colors.white,
  },
  ongoingChal: {
    marginHorizontal: 0,
    paddingVertical: 10,
    marginTop: -20,
    marginLeft: "-3%",
    fontFamily: "BebasNeue-Regular",
    fontSize: 42,
    color: colors.green,
  },
  discoverCategoriesWrapper: {
    marginHorizontal: 20,
    flexDirection: "row",
    marginTop: 0,
    backgroundColor: colors.secondary,
  },
  discoverCategoryText: {
    marginRight: 30,
    fontFamily: "BebasNeue-Regular",
    fontSize: 16,
    color: colors.gray,
  },
  discoverItemsWrapper: {
    paddingVertical: 15,
  },
  discoverItem: {
    height: 170,
    width: 250,
    justifyContent: "flex-end",
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginRight: 20,
  },
  discoverItemImage: {
    borderRadius: 20,
  },
  discoverItemTitle: {
    fontFamily: "BebasNeue-Regular",
    fontSize: 22,
    color: colors.white,
    opacity:1,
  },
  discoverItemType: {
    fontFamily: "BebasNeue-Regular",
    fontSize: 16,
    color: colors.white,
    paddingLeft:120,
    opacity:1,
  },
  discoverItemremainingtime: {
    fontFamily: "BebasNeue-Regular",
    fontSize: 28,
    color: colors.white,
    textAlign:"center",
    marginBottom:"10%"
  },
  discoverItemLocationWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  discoverItemLocationText: {
    marginLeft: 5,
    fontFamily: "BebasNeue-Regular",
    fontSize: 14,
    color: colors.white,
  },
  activitiesWrapper: {
    marginTop: 10,
  },
  activitiesTitle: {
    marginHorizontal: 20,
    marginTop:"-3%",
    fontFamily: "BebasNeue-Regular",
    fontSize: 24,
    color: colors.white,
  },
  thisweek: {
    marginHorizontal: 20,
    marginTop:"-3%",
    paddingBottom:"4%",
    fontFamily: "BebasNeue-Regular",
    fontSize: 46,
    color: colors.green,
  },
  activitiesItemsWrapper: {
    paddingVertical: 20,
  },
  activityItemWrapper: {
    justifyContent: "flex-end",
    alignItems: "center",
    marginRight: 20,
  },
  activityItemImage: {
    width: 36,
  },
  activityItemText: {
    marginTop: 5,
    fontFamily: "BebasNeue-Regular",
    fontSize: 14,
    color: colors.gray,
  },
  learnMoreWrapper: {
    marginTop: 10,
  },
  learnMoreTitle: {
    marginTop:"-3%",
    marginHorizontal: 20,
    fontFamily: "BebasNeue-Regular",
    fontSize: 28,
    color: colors.white,
  },
  ongoingdates: {
    marginHorizontal: 20,
    fontFamily: "BebasNeue-Regular",
    fontSize: 24,
    color: colors.white,
  },
  learnMoreItemsWrapper: {
    paddingVertical: 10,
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
});

export default HomeSecond;
