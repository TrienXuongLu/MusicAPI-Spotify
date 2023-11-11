/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import TopNav from '../components/topNav';
import BottomNav from '../components/bottomNav';
import BluetoothBox from '../components/bluetoothBox';
import {SongCategory} from '../json/songCategory.json';
import {Song} from '../json/song.json';
import {ScrollView, View, StyleSheet, Text, Image, Pressable} from 'react-native';

export default function Home({navigation}) {

    return (
        <View>
            <ScrollView style={styles.page}>
                <TopNav navigation={navigation} />
                <View>
                    <Text style={styles.title}>Category</Text>
                    <View style={styles.container}>
                        <View style={styles.musicBox}>
                            <Image source={require('../image/wes-hicks-MEL-jJnm7RQ-unsplash.jpg')} style={styles.img} />
                            <Text style={styles.text}>Classical</Text>
                        </View>
                        <View>
                            <Image source={require('../image/wes-hicks-MEL-jJnm7RQ-unsplash.jpg')} style={styles.img} />
                            <Text style={styles.text}>Country</Text>
                        </View>
                        <View>
                            <Image source={require('../image/wes-hicks-MEL-jJnm7RQ-unsplash.jpg')} style={styles.img} />
                            <Text style={styles.text}>Pop</Text>
                        </View>
                        <View>
                            <Image source={require('../image/wes-hicks-MEL-jJnm7RQ-unsplash.jpg')} style={styles.img} />
                            <Text style={styles.text}>Salsa</Text>
                        </View>
                        <View>
                            <Image source={require('../image/wes-hicks-MEL-jJnm7RQ-unsplash.jpg')} style={styles.img} />
                            <Text style={styles.text}>R&B</Text>
                        </View>
                        <View>
                            <Image source={require('../image/wes-hicks-MEL-jJnm7RQ-unsplash.jpg')} style={styles.img} />
                            <Text style={styles.text}>Hip Hop</Text>
                        </View>
                        <View>
                            <Image source={require('../image/wes-hicks-MEL-jJnm7RQ-unsplash.jpg')} style={styles.img} />
                            <Text style={styles.text}>Rap</Text>
                        </View>
                        <View>
                            <Image source={require('../image/wes-hicks-MEL-jJnm7RQ-unsplash.jpg')} style={styles.img} />
                            <Text style={styles.text}>Jazz</Text>
                        </View>
                    </View>
                </View>
                <View>
                    <Text style={styles.title}>Trending Song</Text>
                    <View style={styles.container}>
                        <View style={styles.musicBox}>
                            <Image source={require('../image/wes-hicks-MEL-jJnm7RQ-unsplash.jpg')} style={styles.img} />
                            <Text style={styles.text}>Classical</Text>
                        </View>
                        <View>
                            <Image source={require('../image/wes-hicks-MEL-jJnm7RQ-unsplash.jpg')} style={styles.img} />
                            <Text style={styles.text}>Country</Text>
                        </View>
                        <View>
                            <Image source={require('../image/wes-hicks-MEL-jJnm7RQ-unsplash.jpg')} style={styles.img} />
                            <Text style={styles.text}>Pop</Text>
                        </View>
                        <View>
                            <Image source={require('../image/wes-hicks-MEL-jJnm7RQ-unsplash.jpg')} style={styles.img} />
                            <Text style={styles.text}>Salsa</Text>
                        </View>
                        <View>
                            <Image source={require('../image/wes-hicks-MEL-jJnm7RQ-unsplash.jpg')} style={styles.img} />
                            <Text style={styles.text}>R&B</Text>
                        </View>
                        <View>
                            <Image source={require('../image/wes-hicks-MEL-jJnm7RQ-unsplash.jpg')} style={styles.img} />
                            <Text style={styles.text}>Hip Hop</Text>
                        </View>
                        <View>
                            <Image source={require('../image/wes-hicks-MEL-jJnm7RQ-unsplash.jpg')} style={styles.img} />
                            <Text style={styles.text}>Rap</Text>
                        </View>
                        <View>
                            <Image source={require('../image/wes-hicks-MEL-jJnm7RQ-unsplash.jpg')} style={styles.img} />
                            <Text style={styles.text}>Jazz</Text>
                        </View>
                    </View>
                </View>
                <View>
                    <Text style={styles.title}>Playlist</Text>
                    <View style={styles.container}>
                        <View style={styles.musicBox}>
                            <Image source={require('../image/wes-hicks-MEL-jJnm7RQ-unsplash.jpg')} style={styles.img} />
                            <Text style={styles.text}>Classical</Text>
                        </View>
                        <View>
                            <Image source={require('../image/wes-hicks-MEL-jJnm7RQ-unsplash.jpg')} style={styles.img} />
                            <Text style={styles.text}>Country</Text>
                        </View>
                        <View>
                            <Image source={require('../image/wes-hicks-MEL-jJnm7RQ-unsplash.jpg')} style={styles.img} />
                            <Text style={styles.text}>Pop</Text>
                        </View>
                        <View>
                            <Image source={require('../image/wes-hicks-MEL-jJnm7RQ-unsplash.jpg')} style={styles.img} />
                            <Text style={styles.text}>Salsa</Text>
                        </View>
                        <View>
                            <Image source={require('../image/wes-hicks-MEL-jJnm7RQ-unsplash.jpg')} style={styles.img} />
                            <Text style={styles.text}>R&B</Text>
                        </View>
                        <View>
                            <Image source={require('../image/wes-hicks-MEL-jJnm7RQ-unsplash.jpg')} style={styles.img} />
                            <Text style={styles.text}>Hip Hop</Text>
                        </View>
                        <View>
                            <Image source={require('../image/wes-hicks-MEL-jJnm7RQ-unsplash.jpg')} style={styles.img} />
                            <Text style={styles.text}>Rap</Text>
                        </View>
                        <View>
                            <Image source={require('../image/wes-hicks-MEL-jJnm7RQ-unsplash.jpg')} style={styles.img} />
                            <Text style={styles.text}>Jazz</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <BottomNav />
        </View>

    )
}

const styles = StyleSheet.create({
    page: {
        height: '100%',
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
        marginHorizontal: 6,
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