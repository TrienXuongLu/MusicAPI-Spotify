/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import TopNav from '../components/topNav';
import {ScrollView, View, StyleSheet, Text, Image, FlatList, AppRegistry} from 'react-native';
import { PlaybackService } from '../components/trackplayerservices';
import TrackPlayer from 'react-native-track-player';
import {name as appName} from '../../app.json';
import App from '../../App';

const categoryData = [{category: "Classical", id: 1}, {category: "Country", id: 2}, {category: "Pop", id: 3}, {category: "Salsa", id: 4}, {category: "R&B", id: 5}, {category: "Hip Hop", id: 6}, {category: "Rap", id: 7}, {category: "Jazz", id: 8}];

AppRegistry.registerComponent(appName, () => App);
TrackPlayer.registerPlaybackService(() => PlaybackService);

const renderItem = ({item}) => {
    return (
        <View style={styles.musicBox}>
            <Image source={require('../image/wes-hicks-MEL-jJnm7RQ-unsplash.jpg')} style={styles.img} />
            <Text style={styles.text}>{item.category}</Text>
        </View>
    );
};

export default function Home({navigation}) {

    return (
        <View>
            <TopNav />
            <ScrollView style={styles.page}>
                <View>
                    <Text style={styles.title}>Category</Text>
                    <View style={styles.container}>
                        <FlatList 
                            data={categoryData}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={renderItem}
                            numColumns={4}
                        />
                    </View>
                </View>
                <View>
                    <Text style={styles.title}>Trending Song</Text>
                    <View style={styles.container}>
                        <FlatList 
                            data={categoryData}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={renderItem}
                            numColumns={4}
                        />
                    </View>
                </View>
                <View>
                    <Text style={styles.title}>Playlist</Text>
                    <View style={styles.container}>
                        <FlatList 
                            data={categoryData}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={renderItem}
                            numColumns={4}
                        />
                    </View>
                </View>
            </ScrollView>
        </View>

    )
}

const styles = StyleSheet.create({
    page: {
        height: '93.5%',
        backgroundColor: '#fff',
        position: 'relative',
    },

    title: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 10,
    },

    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        marginBottom: 10,
    },

    musicBox: {
        marginHorizontal: 11,
        marginBottom: 5,
    },

    img: {
        height: 80,
        width: 80,
    },

    text: {
        textAlign: 'center',
        fontSize: 16,
    }
});