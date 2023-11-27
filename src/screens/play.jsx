import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import TopNav from '../components/topNav';
import BottomNav from '../components/bottomNav';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlay, faPause, faForward, faBackward, faRandom } from '@fortawesome/free-solid-svg-icons';

export default function Play() {
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    return (
        <View style={styles.container}>
            <TopNav />
            <View style={styles.mainContent}>
                <Image
                    source={require('../image/wes-hicks-MEL-jJnm7RQ-unsplash.jpg')}
                    style={styles.albumArt}
                />
                <Text style={styles.songTitle}>Bones</Text>
                <Text style={styles.artist}>Imagine Dragons</Text>

                {/* Music Controls */}
                <View style={styles.controls}>
                    <Pressable onPress={() => {}}>
                        <FontAwesomeIcon icon={faRandom} size={25} style={styles.controlIcon} />
                    </Pressable>
                    <Pressable onPress={() => {}}>
                        <FontAwesomeIcon icon={faBackward} size={25} style={styles.controlIcon} />
                    </Pressable>
                    <Pressable onPress={togglePlayPause}>
                        <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} size={25} style={styles.controlIcon} />
                    </Pressable>
                    <Pressable onPress={() => {}}>
                        <FontAwesomeIcon icon={faForward} size={25} style={styles.controlIcon} />
                    </Pressable>
                </View>
            </View>
            <BottomNav />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    mainContent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    albumArt: {
        width: 300,
        height: 300,
        marginBottom: 20,
    },
    songTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    artist: {
        fontSize: 18,
        color: 'gray',
        marginBottom: 20,
    },
    controls: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '60%',
    },
    controlIcon: {
        color: 'black',
    },
});
