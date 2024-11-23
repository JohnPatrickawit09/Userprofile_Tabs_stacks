import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';

// Example profile image, replace with a valid URL or local image
const avatarImage = { uri: 'https://static.wikia.nocookie.net/140d4cba-eb7b-46a6-b102-6870ad6db725/scale-to-width/755' };

const Profile = () => {
  return (
    <View style={styles.container}>
      {/* Profile Image */}
      <Image source={avatarImage} style={styles.avatar} />
      
      {/* Profile Name */}
      <Text style={styles.name}>John Patrick</Text>
      
      {/* Bio Section */}
      <Text style={styles.bio}>A passionate SCAMMER CAT !</Text>
      
      {/* Edit Profile Button */}
      <TouchableOpacity style={styles.button} onPress={() => alert('Edit Profile')}>
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>
      
      {/* Modern Card with Info */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Contact Info</Text>
        <Text style={styles.cardDescription}>Email: awitjohnpatrick@example.com</Text>
        <Text style={styles.cardDescription}>Phone: +1234567890</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    padding: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60, // Circular image
    borderWidth: 4,
    borderColor: '#6200ea',
    marginBottom: 20,
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  bio: {
    fontSize: 16,
    color: '#777',
    textAlign: 'center',
    marginBottom: 30,
    paddingHorizontal: 20,
    fontStyle: 'italic',
  },
  button: {
    backgroundColor: '#6200ea',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginBottom: 30,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    width: '100%',
    maxWidth: 350,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    alignItems: 'center',
    marginTop: 20,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#333',
    marginBottom: 10,
  },
  cardDescription: {
    fontSize: 16,
    color: '#777',
    textAlign: 'center',
  },
});

export default Profile;
