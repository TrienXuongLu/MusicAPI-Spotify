import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import TopNav from '../components/topNav';
import BottomNav from '../components/bottomNav';

const reels = [
  { id: 1, title: 'Reel 1' },
  { id: 2, title: 'Reel 2' },
];

export default function ReelPage() {
  return (
    <View style={styles.container}>
      <TopNav />
      <ScrollView style={styles.mainContent}>
        {reels.map((reel) => (
          <View key={reel.id} style={styles.reelContainer}>
            <View style={styles.reelBox} />
            <Text style={styles.reelTitle}>{reel.title}</Text>
          </View>
        ))}
      </ScrollView>
      <BottomNav />
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
  },
  reelContainer: {
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  reelBox: {
    width: '90%',
    height: '90%',
    backgroundColor: '#ccc',
  },
  reelTitle: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
