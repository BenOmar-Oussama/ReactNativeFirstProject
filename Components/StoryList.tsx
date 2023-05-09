import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, Dimensions, TouchableOpacity, Text, Image } from 'react-native';
import { colors } from './colors';
import { Badge } from '@rneui/base';
import { color } from 'react-native-reanimated';

const { width } = Dimensions.get('window');

interface Story {
  
  id: string;
  newstories:number;
  image: string;
}

interface Props {
  stories: Story[];
}

const StoryList: React.FC<Props> = ({ stories }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleStoryPress = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <View style={styles.container}  >
        
        <View style={styles.container}>
      <ScrollView
        horizontal
        // pagingEnabled
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {stories.map((story, index) => (
          <TouchableOpacity
            key={story.id}
            style={[styles.storyContainer, activeIndex === index && styles.activeStoryContainer]}
            onPress={() => handleStoryPress(index)}
          >
            <Image source={{ uri: story.image }} style={styles.storyImage} />
            <Badge
            status="primary"
            value={story.newstories == 0 ? null : story.newstories}
            containerStyle={{ position: 'absolute', top: 0, left: 55 }}
            badgeStyle={{borderColor:"transparent" , backgroundColor: story.newstories == 0 ? "transparent": colors.green }}
          />
            <Text style={styles.username}>{story.id}</Text>
          </TouchableOpacity>
        ))}
        
      </ScrollView>
      <View style={styles.bottomContainer}>
      </View>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: "0%",
    marginTop: "-2%",
    backgroundColor: colors.secondary,
  },
  scrollContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    // paddingBottom:20,
  },
  storyContainer: {
    width: width / 5.5,
    height: width / 5.5,
    borderRadius: width / 8,
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#fff',
    borderWidth: 2,
    marginBottom:"5%"
    
  },
  activeStoryContainer: {
    borderColor: colors.green,
  },
  storyImage: {
    
    marginTop:"40%",
    width: width / 5.5 - 10,
    height: width / 5.5 - 10,
    borderRadius: width / 8 - 5,
  },
  bottomContainer: {
    padding: 10,
    alignItems: 'center',
  },
  Discover: {
    paddingTop:"2%",
    paddingLeft:"5%",
    color: '#fff',
    fontWeight:"bold",
    fontSize: 22,
  },
  username: {
    marginTop:"16%",
    color: '#fff',
    
    fontSize: 12,
  },
});

export default StoryList;
