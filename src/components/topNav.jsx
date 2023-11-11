/* eslint-disable prettier/prettier */
import React, {StrictMode} from 'react';
import {View, Image, StyleSheet, Pressable, Button} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass';
import {faUser} from '@fortawesome/free-solid-svg-icons/faUser';

export default function TopNav({navigation}) {


    return (
        <StrictMode>
            <View style={styles.topNav}>
                <Image source={require('../image/bluejayLogo.png')} style={styles.logo} />
                <View style={styles.left}>
                    <Pressable onPress={() => navigation.navigate('Search')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} style={styles.btn} size="25px" />
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate('Account')}>
                        <FontAwesomeIcon icon={faUser} style={styles.btn} size="25px" />
                    </Pressable>
                </View>
            </View>
        </StrictMode>
    );
};

const styles = StyleSheet.create({
    topNav: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '10px',
    },

    logo: {
        width: 80,
        height: 80,
    },

    left: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginRight: 5,
    },

    btn: {
        marginHorizontal: 13,
    },
})