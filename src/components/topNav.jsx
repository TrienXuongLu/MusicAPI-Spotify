/* eslint-disable prettier/prettier */
import React, {StrictMode} from 'react';
import {View, Image, StyleSheet, Pressable, Button} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass';
import {faUser} from '@fortawesome/free-solid-svg-icons/faUser';
import {useNavigation} from '@react-navigation/native';

export default function TopNav() {

    const navigation = useNavigation();

    const goToSearch = () => {
        navigation.navigate('Search');
    };

    const goToAccount = () => {
        navigation.navigate('Account');
    }

    return (
        <StrictMode>
            <View style={styles.topNav}>
                <Image source={require('../image/bluejayLogo.png')} style={styles.logo} />
                <View style={styles.left}>
                    <Pressable onPress={goToSearch}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} style={styles.btn} size="25px" />
                    </Pressable>
                    <Pressable onPress={goToAccount}>
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
        backgroundColor: '#fff',
    },

    logo: {
        width: 70,
        height: 70,
    },

    left: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginRight: 5,
        backgroundColor: '#fff',
    },

    btn: {
        marginHorizontal: 13,
    },
})