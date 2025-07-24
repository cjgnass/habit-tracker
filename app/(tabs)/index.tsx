import { useCallback, useState, useEffect } from "react";
import { ScrollView, View, StyleSheet, Text, Alert } from "react-native";
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
import { useFocusEffect } from "@react-navigation/native";
import Fonts from "@/constants/fonts";
import AssistantButton from "@/components/AssistantButton";
import colors from "@/constants/colors";
import Habit from "@/components/Habit";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Home() {
  const [fontsLoaded] = useFonts({
    [Fonts.regular]: Inter_400Regular,
    [Fonts.bold]: Inter_700Bold,
  });

  const audioRecorder = useAudioRecorder(RecordingPresets.HIGH_QUALITY);
  const recorderState = useAudioRecorderState(audioRecorder);
  const audioPlayer = useAudioPlayer("");

  const [assistantActive, setAssistantActive] = useState(false);
  const [habitList, setHabitList] = useState([]);

  // Load habits from AsyncStorage

  useFocusEffect(
    useCallback(() => {
      const loadHabits = async () => {
        try {
          const value = await AsyncStorage.getItem("@habits");
          const habits = value ? JSON.parse(value) : {};
          const today = new Date().getDay();
          console.log(today);
          const habitArray = Object.keys(habits)
            .map((habitName) => ({
              name: habitName,
              ...habits[habitName],
            }))
            .filter((habit) => {
              return habit.selectedDays?.includes(today);
            });
          console.log(habitArray);
          setHabitList(habitArray);
        } catch (err) {
          console.log(err);
        }
      };

      loadHabits();
    }, []), // no dependencies — just reload on tab focus
  );
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

  const handleButtonPress = () => {
    setAssistantActive((prev) => !prev);
  };

  return (
    <View style={styles.container}>
      <View style={styles.habitsHeader}>
        <Text style={styles.header}>Habits</Text>
      </View>

      <ScrollView
        style={styles.mainContainer}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        {habitList.map((habit) => (
          <Habit key={habit.name} name={habit.name} streak={habit.streak} />
        ))}
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
