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

  return (
    <View>
      <Text> hello</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
