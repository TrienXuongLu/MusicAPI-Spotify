/* eslint-disable prettier/prettier */
import React from "react";
import { View, Image, StyleSheet, Pressable, Text} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Switch } from '@rneui/themed';
import {ConnectedDevices} from '../json/connectedDevices';
import {RecommendedDevices} from '../json/devices.json';


export default function BluetoothBox() {

    return (
        <View>
            <View>
                <Text>Bluetooth</Text>
                <FontAwesomeIcon icon="fa-regular fa-bluetooth" />
                <Switch />
            </View>
            <View>
                <Text>Connected Devices</Text>
                {ConnectedDevices.map((item, index) => {
                    return (
                        <View key={index}>
                            <Text>{item.name}</Text>
                            <Text>{item.status}</Text>
                            <FontAwesomeIcon icon="fa-solid fa-ellipsis-vertical" />
                        </View>
                    );
                })}
            </View>
            <View>
                <Text>Recommended Devices</Text>
                {RecommendedDevices.map((item, index) => {
                    return (
                        <View key={index}>
                            <Text>{item.name}</Text>
                            <FontAwesomeIcon icon="fa-solid fa-ellipsis-vertical" />
                        </View>
                    );
                })}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    bluetoothBox: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    bluetoothBtn: {
        width: 30,
        height: 30,
    },
});