/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {View, Image, StyleSheet, Pressable, TextInput} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass';

const apiKey = "54b9bf65e31ee67562652998bf41cd4e";

export default function TopSearch({navigation}) {
    const [searchInput, setSearchInput] = useState('');
    const [songApi, setSongApi] = useState([]);
    const [apiToken, setApiToken] = useState('');

    useEffect(() => {
        fetch('http://api.musixmatch.com/ws/1.1/track.search?q_track=' + searchInput + '&page_size=8' + '&apikey=' + apiKey)
        .then(response => response.json())
        .then(data => {
            console.log(data.message.body.track_list);
            setSongApi(data.message.body.track_list);
        });
    }, [searchInput]);

    function handleTextChange(text) {
        setSearchInput(text);
    }

    console.log(songApi);

    return (
        <View style={styles.topSearch}>
            <Image source={require('../image/bluejayLogo.png')} style={styles.logo} />
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} onChangeText={handleTextChange} value={searchInput} />
                <FontAwesomeIcon icon={faMagnifyingGlass} size="25px" style={styles.search} onPress={() => navigation.navigate('List')} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
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
})
