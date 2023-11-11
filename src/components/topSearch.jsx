/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {View, Image, StyleSheet, Pressable, TextInput} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass';

export default function TopSearch() {
    const [text, setTExt] = useState('');

    return (
        <View style={styles.topSearch}>
            <Image source={require('../image/bluejayLogo.png')} style={styles.logo} />
            <View>
                <TextInput style={styles.input} />
                <FontAwesomeIcon icon={faMagnifyingGlass} style={styles.btn} size="25px" />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    topSearch: {
        
    },

    logo: {
        width: 80,
        height: 80,
    },

    btn: {
        height: 40,
        width: 100,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        borderStyle: 'solid',
    }
});