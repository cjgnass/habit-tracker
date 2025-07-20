import { useState, useEffect } from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  Button,
  Pressable,
  Text,
} from "react-native";
import {
  useAudioPlayer,
  useAudioRecorder,
  AudioModule,
  RecordingPresets,
  setAudioModeAsync,
  useAudioRecorderState,
} from "expo-audio";
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import Fonts from "@/constants/fonts";
import AssistantButton from "@/components/AssistantButton";
import colors from "@/constants/colors";
import Habit from "@/components/Habit";
import QuantativeHabit from "@/components/QuantativeHabit";
export default function Home() {
  const [fontsLoaded] = useFonts({
    [Fonts.regular]: Inter_400Regular,
    [Fonts.bold]: Inter_700Bold,
  });
  const audioRecorder = useAudioRecorder(RecordingPresets.HIGH_QUALITY);
  const recorderState = useAudioRecorderState(audioRecorder);
  const audioPlayer = useAudioPlayer("");
  const [assistantActive, setAssistantActive] = useState(false);
  const [habits, setHabits] = useState(["Habbit 1", "Habbit 2"]);

  const addHabit = () => {
    setHabits([...habits, `Habit ${habits.length + 1}`]);
  };

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

  const handleButtonPress = () => {
    setAssistantActive(!assistantActive);
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
      <View style={styles.habitsHeader}>
        <Text style={styles.header}>Habits</Text>
      </View>
      <ScrollView
        style={styles.mainContainer}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <Habit name={"Habit 1"} />
        <Habit name={"Habit 2"} />
        <Habit name={"Habit 3"} />
        <Habit name={"Habit 1"} />
        <Habit name={"Habit 2"} />
        <Habit name={"Habit 3"} />
      </ScrollView>
      <View style={styles.assistantContainer}>
        <AssistantButton
          onPress={handleButtonPress}
          size={100}
          active={assistantActive}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: colors.background,
    padding: 10,
  },
  header: { fontFamily: Fonts.bold, fontSize: 30, color: colors.primary },
  mainContainer: {
    borderRadius: 20,
    margin: 20,
    backgroundColor: colors.primary,
    flex: 1,
    padding: 20,
    overflow: "hidden",
  },
  assistantContainer: {
    backgroundColor: colors.background,
    flex: 0.15,
    margin: 20,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  assistantButton: {},
  habitsHeader: {
    flex: 0.1,
    justifyContent: "center",
    alignItems: "center",
  },
  habitsText: {
    fontFamily: Fonts.regular,
    fontSize: 20,
    margin: 10,
    color: colors.background,
  },
});
