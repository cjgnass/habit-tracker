import { useState, useEffect } from "react";
import { View, StyleSheet, Button, Pressable } from "react-native";
import {
  useAudioPlayer,
  useAudioRecorder,
  AudioModule,
  RecordingPresets,
  setAudioModeAsync,
  useAudioRecorderState,
} from "expo-audio";
import SignalIcon from "@/components/SignalIcon";
import SolidCircleIcon from "@/components/SolidCircleIcon";

export default function Home() {
  const audioRecorder = useAudioRecorder(RecordingPresets.HIGH_QUALITY);
  const recorderState = useAudioRecorderState(audioRecorder);
  const audioPlayer = useAudioPlayer("");

  const startRecording = async () => {
    await audioRecorder.prepareToRecordAsync();
    audioRecorder.record();
  };

  const stopRecording = async () => {
    // The recording will be available on `audioRecorder.uri`.
    await audioRecorder.stop();
    audioPlayer.replace(audioRecorder.uri);
  };

  const playRecording = async () => {
    console.log("Play");
    console.log(audioPlayer.duration);
    audioPlayer.play();
  };

  useEffect(() => {
    (async () => {
      const status = await AudioModule.requestRecordingPermissionsAsync();
      if (!status.granted) {
        Alert.alert("Permission to access microphone was denied");
      }

      setAudioModeAsync({
        playsInSilentMode: true,
        allowsRecording: true,
      });
    })();
  }, []);

  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: "gray", flex: 2 }}></View>
      <View style={{ backgroundColor: "silver", flex: 1 }}>
        <SolidCircleIcon />  
        <SignalIcon />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 10,
  },
});
