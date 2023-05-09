// ProfilePage.tsx

import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

interface ProfilePageProps {}

const ProfilePage: React.FC<ProfilePageProps> = () => {
  const handlePress = (buttonName: string) => {
    switch (buttonName) {
      case 'Awards':
        // Handle Awards logic here
        break;
      case 'Submissions':
        // Handle Submissions logic here
        break;
      case 'Statistics':
        // Handle Statistics logic here
        break;
      case 'Profile Settings':
        // Handle Profile Settings logic here
        break;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileSection}>
        {/* Add profile related components here */}
        <Text style={styles.title}>Profile Page</Text>
      </View>
      <View style={styles.buttonsContainer}>
        {['Awards', 'Submissions', 'Statistics', 'Profile Settings'].map(
          (buttonName, index) => (
            <Pressable
              key={index}
              style={({ pressed }) => [
                styles.button,
                {
                  backgroundColor: pressed ? '#ccc' : '#fff',
                },
              ]}
              onPress={() => handlePress(buttonName)}
            >
              <Text style={styles.buttonText}>{buttonName}</Text>
            </Pressable>
          ),
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  profileSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 4,
    padding: 12,
    margin: 4,
    width: '45%',
  },
  buttonText: {
    fontSize: 16,
    textAlign: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default ProfilePage;
