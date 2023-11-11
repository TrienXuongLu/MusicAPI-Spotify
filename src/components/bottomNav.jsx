/* eslint-disable prettier/prettier */
import React, {StrictMode} from 'react';
import {View, Image, StyleSheet, Pressable} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHouse} from '@fortawesome/free-solid-svg-icons/faHouse';
import {faMusic} from '@fortawesome/free-solid-svg-icons/faMusic';
import {faInstagram} from '@fortawesome/free-brands-svg-icons/faInstagram';
import {faBluetooth} from '@fortawesome/free-brands-svg-icons/faBluetooth';
import {StickyContainer} from 'react-sticky';

export default function BottomNav() {


    return (
        <View style={styles.botNav}>
            <View>
                <FontAwesomeIcon icon={faHouse} style={styles.btn} size="25px" />
            </View>
            <View>
                <FontAwesomeIcon icon={faMusic} style={styles.btn} size="25px" />
            </View>
            <View>
                <FontAwesomeIcon icon={faInstagram} style={styles.btn} size="25px" />
            </View>
            <View>
                <FontAwesomeIcon icon={faBluetooth} style={styles.btn} size="25px" />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    botNav: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        borderTopColor: '#999',
        borderTopWidth: 2,
        borderStyle: 'solid',
        paddingVertical: 10,
        backgroundColor: '#fff',
    },

    btn: {

    },
});