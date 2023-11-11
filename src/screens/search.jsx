/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Image, StyleSheet, Pressable, Text} from 'react-native';
import TopSearch from '../components/topSearch';
import BottomNav from '../components/bottomNav';
import { ScrollView } from 'react-native-gesture-handler';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEllipsisVertical} from '@fortawesome/free-solid-svg-icons/faEllipsisVertical';

export default function Search({navigation}) {
    return (
        <View>
            <TopSearch />
            <ScrollView style={styles.mainSection}>
                <View style={styles.songSection}>
                    <Text style={styles.title}>Most Matched Song</Text>
                    <View style={styles.songBox}>
                        <Image source={require('../image/wes-hicks-MEL-jJnm7RQ-unsplash.jpg')} style={styles.img}/>
                        <View style={styles.songInfo}>
                            <Text style={styles.songName}>Bones</Text>
                            <View style={styles.songDetail}>
                                <Text style={styles.auth}>Imagine Dragons</Text>
                                <Text style={styles.time}>2:45</Text>
                            </View>
                        </View>
                        <FontAwesomeIcon icon={faEllipsisVertical} size="25px" style={styles.setting} />
                    </View>
                </View>
                <View style={styles.songSection}>
                    <Text style={styles.title}>Song</Text>
                    <View style={styles.songBox}>
                        <Image source={require('../image/wes-hicks-MEL-jJnm7RQ-unsplash.jpg')} style={styles.img}/>
                        <View style={styles.songInfo}>
                            <Text style={styles.songName}>Bones</Text>
                            <View style={styles.songDetail}>
                                <Text style={styles.auth}>Imagine Dragons</Text>
                                <Text style={styles.time}>2:45</Text>
                            </View>
                        </View>
                        <FontAwesomeIcon icon={faEllipsisVertical} size="25px" style={styles.setting} />
                    </View>
                </View>
                <View style={styles.songSection}>
                    <Text style={styles.title}>Video</Text>
                    <View style={styles.songBox}>
                        <Image source={require('../image/wes-hicks-MEL-jJnm7RQ-unsplash.jpg')} style={styles.img}/>
                        <View style={styles.songInfo}>
                            <Text style={styles.songName}>Bones</Text>
                            <View style={styles.songDetail}>
                                <Text style={styles.auth}>Imagine Dragons</Text>
                                <Text style={styles.time}>2:45</Text>
                            </View>
                        </View>
                        <FontAwesomeIcon icon={faEllipsisVertical} size="25px" style={styles.setting} />
                    </View>
                </View>
            </ScrollView>
            <BottomNav />
        </View>
    )
}

const styles = StyleSheet.create({
    mainSection: {
        height: 500,
        marginHorizontal: 5,
        backgroundColor: '#ffff',
    },

    songSection: {
        marginVertical: 5,
    },

    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },

    songBox: {
        flexDirection: 'row',
        paddingTop: 5,
        paddingLeft: 5,
        backgroundColor: '#9999',
        height: 80,
    },

    img: {
        height: 70,
        width: 70,
    },

    songInfo: {
        paddingLeft: 10,
        paddingTop: 5,
        paddingRight: 90,
    },

    songName: {
        fontSize: 18,
        color: '#fff',
    },

    songDetail: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 200,
        paddingTop: 5,
    },

    auth: {
        color: '#fff',
        fontSize: 18,
    },

    time: {
        color: '#fff',
        fontSize: 18,
    },

    setting: {
        position: 'absolute',
        right: 10,
        top: '35%',
        color: '#fff',
    },
});