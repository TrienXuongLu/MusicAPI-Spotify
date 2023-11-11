/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Image, StyleSheet, Pressable} from 'react-native';
import TopSearch from '../components/topSearch';
import BottomNav from '../components/bottomNav';

export default function Search() {
    return (
        <View>
            <TopSearch />
            <BottomNav />
        </View>
    )
}