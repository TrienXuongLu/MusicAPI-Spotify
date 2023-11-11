/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {View, Image, StyleSheet, Pressable, TextInput} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass';

export default function TopSearch({navigation}) {
    const [text, setTExt] = useState('');

    return (
        <View style={styles.topSearch}>
            <Image source={require('../image/bluejayLogo.png')} style={styles.logo} />
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} />
                <FontAwesomeIcon icon={faMagnifyingGlass} size="25px" style={styles.search} onPress={() => navigation.navigate('List')} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    topSearch: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 80,
        paddingTop: 10,
        backgroundColor: '#fff',
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
        top: -5,
        marginLeft: 10,
    },
})