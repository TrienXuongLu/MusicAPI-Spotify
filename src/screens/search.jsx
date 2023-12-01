/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {View, Image, StyleSheet, TextInput, Text, Pressable, TouchableOpacity} from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEllipsisVertical} from '@fortawesome/free-solid-svg-icons/faEllipsisVertical';
import {useNavigation} from '@react-navigation/native';
import {encode} from 'base-64';
import { AddTrack } from '../components/trackplayerservices';

const clientID = "fbd1dbf6e3e14e239ca20d6f27cad65f";
const secret = "e3373732422a4375a31f8c97002d2726";

export default function Search({navigation}) {
    const [searchInput, setSearchInput] = useState('');
    const [songApi, setSongApi] = useState([]);
    const [token, setToken] = useState('');
    const [helper, setHelper] = useState([]);
    const [helperArray, setHelperArray] = useState([]);

    useEffect(() => {
        fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' + encode(clientID + ':' + secret),
            },
            body: 'grant_type=client_credentials',
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setToken(data.access_token);
        })
    }, []);

    useEffect(() => {
        fetch(`https://api.spotify.com/v1/search?q=remaster%2520track%3A${searchInput}&type=track&limit=10`, {
            headers: {
                Authorization: 'Bearer ' + token,
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data.tracks.items);
            setSongApi(data.tracks.items);
        })
    }, [searchInput, token]);

    useEffect(() => {
        function handleAddTrack() {
            const newItems = songApi.map((item) => {
                var {album, art, market, disc, duration, explicit, external, externalUrl, href, id, is_local, name, pop, preview_url, trackNum, type, uri} = item;
                return {url: href, title: name, artists: id};
            });
            console.log(newItems);
            setHelper((previous) => [...previous, ...newItems]);
        };
        handleAddTrack();
    }, [songApi]);

    useEffect(() => {
        console.log(helper);
        AddTrack(helper);
    }, [helper]);

    function handleTextChange(text) {
        setSearchInput(text);
    };

    function handleSubmitEditting() {
        console.log('submitting');
    }

    return (
        <View style={styles.searchPage}>
            <View style={styles.topSearch}>
                <Image source={require('../image/bluejayLogo.png')} style={styles.logo} />
                <View style={styles.inputContainer}>
                    <TextInput style={styles.input} onChangeText={handleTextChange} value={searchInput} onSubmitEditing={handleSubmitEditting} />
                </View>
            </View>
            <ScrollView style={styles.mainSection}>
                <View style={styles.songSection}>
                    <Text style={styles.title}>Most Matched Song</Text>
                    <View style={styles.container}>
                        {songApi.length !== 0 && songApi !== null ?
                            <FlatList 
                                data={songApi}
                                renderItem={({item}) => {
                                    return (
                                    <Pressable style={styles.songBox} key={item.url} onPress={() => { navigation.navigate('Play', {helper, token})}}>
                                        <Image source={{uri: item.album.images[2].url}} style={styles.img}/>
                                        <View style={styles.songInfo}>
                                            <Text style={styles.songName}>{item.name}</Text>
                                            <View style={styles.songDetail}>
                                                <Text style={styles.auth}>{item.artists.name}</Text>
                                            </View>
                                        </View>
                                        <FontAwesomeIcon icon={faEllipsisVertical} size="25px" style={styles.setting} />
                                    </Pressable>
                                    )
                                }}
                            />
                        : <Text>Loading...</Text>}
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    searchPage: {
        backgroundColor: '#fff',
    },

    mainSection: {
        height: '89%',
        position: 'relative',
        marginBottom: 5,
        marginTop: 40,
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
        marginVertical: 5,
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
        width: 300,
        paddingTop: 5,
    },

    auth: {
        color: '#fff',
        fontSize: 18,
    },

    setting: {
        position: 'absolute',
        right: 10,
        top: '35%',
        color: '#fff',
    },

    topSearch: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 50,
        paddingTop: 10,
    },

    logo: {
        width: 80,
        height: 80,
    },

    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 20,
        marginRight: 10,
    },

    input: {
        borderColor: 'black',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 5,
        height: 40,
        width: 250,
    },

    search: {
        alignSelf: 'center',
        top: 10,
        marginLeft: 10,
    },
});