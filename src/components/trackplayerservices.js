/* eslint-disable prettier/prettier */
import TrackPlayer, {Capability, RepeatMode, Event, AppKilledPlaybackBehavior} from "react-native-track-player";

export async function AddTrack(data) {
    if(data) {
        console.log(data);
        await TrackPlayer.add(data);
        await TrackPlayer.setRepeatMode(RepeatMode.Queue);
    } else {
        console.log('No data in AddTrack');
    }
}

export async function SetUpTrackPlayer() {
    var isSetup = false;
    try {
        await TrackPlayer.getActiveTrack();
        isSetup = true;
    } catch (e) {
        await TrackPlayer.setupPlayer();
        console.log(TrackPlayer.setupPlayer());
        // const queue = await TrackPlayer.getQueue();
        // if(queue.length === 0) {
        //     console.log('No tracks in queue');
        //     await false;
        // }
        await TrackPlayer.updateOptions({
            android: {
                appKilledPlaybackBehavior: AppKilledPlaybackBehavior.StopPlaybackAndRemoveNotification,
            },
            capabilities: [
                Capability.Play,
                Capability.Pause,
                Capability.SkipToNext,
                Capability.SkipToPrevious,
            ],
            compactCapabilities: [
                Capability.Play,
                Capability.Pause,
                Capability.SkipToNext,
            ],
        });
        isSetup = true;
    } finally {
        return isSetup;
    }
};

export async function PlaybackService() {
    TrackPlayer.addEventListener(Event.RemotePause, () => {
        TrackPlayer.pause();
    });

    TrackPlayer.addEventListener(Event.RemotePlay, () => {
        TrackPlayer.play();
    });

    TrackPlayer.addEventListener(Event.RemoteNext, () => {
        TrackPlayer.skipToNext();
    });

    TrackPlayer.addEventListener(Event.RemotePrevious, () => {
        TrackPlayer.skipToPrevious();
    });
}