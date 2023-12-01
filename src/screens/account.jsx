/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import TopNav from '../components/topNav';
import BottomNav from '../components/bottomNav';

export default function AccountPage() {
  return (
    <View style={styles.container}>
      <View style={styles.mainContent}>
        <Image
          source={require('../image/bluejayLogo.png')}
          style={styles.profilePic}
        />
        <Text style={styles.username}>Username</Text>
        <View style={styles.infoSection}>
          <Text style={styles.infoTitle}>Email:</Text>
          <Text style={styles.infoContent}>user@example.com</Text>
        </View>
        <View style={styles.infoSection}>
          <Text style={styles.infoTitle}>Joined:</Text>
          <Text style={styles.infoContent}>January 1, 2023</Text>
        </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mainContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  infoSection: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10,
  },
  infoContent: {
    fontSize: 18,
  },
});
