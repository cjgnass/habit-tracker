import { ScrollView, StyleSheet, View, Text, Pressable } from "react-native";
import { useState, useEfffect } from "react";
import PlusCircleIcon from "@/components/PlusCircleIcon";
import colors from "@/constants/colors";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Fonts from "@/constants/fonts";
import BackIcon from "@/components/BackIcon";

export default function Habits() {
  const [addingHabit, setAddingHabit] = useState(false);
  const mainButtonSize = 50;

  const render = () => {
    return !addingHabit ? (
      <View>
        <Pressable
          onPress={() => setAddingHabit(true)}
          style={[
            styles.mainButton,
            {
              width: mainButtonSize,
              height: mainButtonSize,
              borderRadius: mainButtonSize / 2,
            },
          ]}
        >
          <PlusCircleIcon width={mainButtonSize} height={mainButtonSize} />
        </Pressable>
        <ScrollView style={styles.habitsContainer}></ScrollView>
      </View>
    ) : (
      <View>
        <View style={styles.addHabitHeaderContainer}>
          <Text
            style={{
              fontFamily: Fonts.bold,
              fontSize: 20,
            }}
          >
            Add Habit
          </Text>
        </View>
        <Pressable
          onPress={() => setAddingHabit(false)}
          style={[
            styles.mainButton,
            {
              width: mainButtonSize,
              height: mainButtonSize,
              borderRadius: mainButtonSize / 2,
            },
          ]}
        >
          <BackIcon width={mainButtonSize} height={mainButtonSize} />
        </Pressable>
        <View style={styles.addHabitBodyContainer}>
          <Text> body </Text>
          <Text> body </Text>
          <Text> body </Text>
          <Text> body </Text>
          <Text> body </Text>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}> Habits </Text>
      </View>
      <View style={styles.body}>{render()}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.primary },
  buttonContainer: {
    justifyContent: "space-between",
    justifyContent: "center",
    alignItems: "center",
  },
  headerContainer: {
    flex: 0.1,
    paddingTop: 15,
    alignItems: "center",
    borderBottomWidth: 2,
  },
  headerText: {
    fontFamily: Fonts.bold,
    fontSize: 30,
  },
  mainButton: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 10,
    right: 10,
  },
  habitsContainer: {
    flex: 1,
  },
  body: {
    flex: 1,
    padding: 15,
  },
  addHabitHeaderContainer: {
    flex: 0.2,
    justifyContent: "center",
  },
  addHabitBodyContainer: {
    flex: 1,
    backgroundColor: "gray",
  },
});
