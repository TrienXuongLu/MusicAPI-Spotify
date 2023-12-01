/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, Pressable, FlatList } from 'react-native';
import TopNav from '../components/topNav';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlay, faPause, faForward, faBackward, faRandom } from '@fortawesome/free-solid-svg-icons';
import TrackPlayer, {usePlaybackState, Event, State, Track, useTrackPlayerEvents, RepeatMode} from 'react-native-track-player';
import { SetUpTrackPlayer, AddTrack } from '../components/trackplayerservices';
import { addEventListener } from 'react-native-track-player/lib/trackPlayer';

export default function Play({ navigation, route}) {
    const [playerInit, setPlayerInit] = useState(false);
    const [playbackState, setPlaybackState] = useState(usePlaybackState());
    const [track, setTrack] = useState('');
    const [isSetupComplete, setIsSetupComplete] = useState(true);
    const {helper, token} = route.params;
    const [array, setArray] = useState([]);
    const [currentTrack, setCurrentTrack] = useState(0);

    async function loadList() {
        const queue = await TrackPlayer.getQueue();
        setArray(queue);
    }

    useEffect(() => {
        loadList();
    });

    useTrackPlayerEvents([Event.PlaybackActiveTrackChanged], async (event) => {
        if(event.state === State.nextTrack) {
            console.log("Received Event", event);
            const playTrack = await TrackPlayer.getTrack();
            setCurrentTrack(playTrack);
        }
        if(event.type === Event.PlaybackState) {
            setPlaybackState(event.state);
        }
        if(event.type === Event.PlaybackError) {
            console.log("Playback Error", event.error);
        }
    });

    useEffect(() => {
        async function setUp() {
            try{
                let setUp = await SetUpTrackPlayer();
                let queue = await TrackPlayer.getQueue();
                if(setUp && queue.length <= 0) {
                    await AddTrack(helper);
                }
            } catch (e) {
                console.error("Error in setting up", e);
            };
        }
        setUp();
    }, [helper]);

    async function skipBtn() {
        await TrackPlayer.skipToNext();
    }

    async function prevBtn() {
        await TrackPlayer.skipToPrevious();
    }

    async function playBtn(playback) {
        try {
            playback = await TrackPlayer.getPlaybackState();
            console.log("Playback State", playback);
            if (await TrackPlayer.getPlaybackState() === State.Playing) {
                console.log(TrackPlayer.getTrack());
                TrackPlayer.pause();
            } else {
                console.log(TrackPlayer.getTrack());
                TrackPlayer.play();
            }
        } catch (e) {
            console.error("Error in playing button", e);
        }
    }

    return (
        <View style={styles.container}>
            <TopNav />
            <View style={styles.mainContent}>
                <Image
                    source={require('../image/wes-hicks-MEL-jJnm7RQ-unsplash.jpg')}
                    style={styles.albumArt}
                />
                {/* Music Controls */}
                <View style={styles.controls}>
                    <Pressable onPress={prevBtn}>
                        <FontAwesomeIcon icon={faBackward} size={25} style={styles.controlIcon} />
                    </Pressable>
                    <Pressable onPress={() => playBtn(playbackState)}>
                        {playbackState === TrackPlayer.STATE_PLAYING ? <FontAwesomeIcon icon={faPause} size={25} style={styles.controlIcon} /> : <FontAwesomeIcon icon={faPlay} size={25} style={styles.controlIcon} /> 
                        }
                    </Pressable>
                    <Pressable onPress={skipBtn}>
                        <FontAwesomeIcon icon={faForward} size={25} style={styles.controlIcon} />
                    </Pressable>
                </View>
            </View>
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
