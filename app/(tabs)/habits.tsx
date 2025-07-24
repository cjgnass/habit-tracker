import {
  Keyboard,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
  TouchableWithoutFeedback,
  Text,
  Pressable,
} from "react-native";
import { useState, useEfffect } from "react";
import PlusCircleIcon from "@/components/PlusCircleIcon";
import colors from "@/constants/colors";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Fonts from "@/constants/fonts";
import BackIcon from "@/components/BackIcon";

export default function Habits() {
  const [addingHabit, setAddingHabit] = useState(false);
  const mainButtonSize = 50;
  const [loading, setLoading] = useState(false);
  const [habit, setHabit] = useState("");
  const [number, setNumber] = useState(0);
  const [schedule, setSchedule] = useState("");

  const handleBack = () => {
    setAddingHabit(false);
    setHabit("");
    setNumber(0);
    setSchedule("");
  };

  const handleAddHabit = () => {
    console.log(`Adding Habit: ${habit}, ${number}, ${schedule}`);
  };

  const render = () => {
    return !addingHabit ? (
      <View>
        <Pressable
          onPress={() => setAddingHabit(true)}
          style={[
            styles.switchButton,
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
          <Text style={styles.addHabitHeader}>Add Habit </Text>
        </View>
        <Pressable
          onPress={handleBack}
          style={[
            styles.switchButton,
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
          <View style={styles.addHabitContainer}>
            <Text style={styles.addHabitText}>Habit : </Text>
            <TextInput
              value={habit}
              onChangeText={setHabit}
              style={styles.addHabitTextInput}
            />
          </View>

          <View style={styles.addHabitContainer}>
            <Text style={styles.addHabitText}>Number : </Text>
            <TextInput
              value={number}
              onChangeText={setNumber}
              style={styles.addHabitTextInput}
              keyboardType="number-pad"
            />
          </View>
          <View style={styles.addHabitContainer}>
            <Text style={styles.addHabitText}>Schedule : </Text>
            <TextInput
              value={schedule}
              onChangeText={setSchedule}
              style={styles.addHabitTextInput}
            />
          </View>
          <Pressable style={styles.confirmAddHabit} onPress={handleAddHabit}>
            <Text style={styles.addHabitText}>Confirm</Text>
          </Pressable>
        </View>
      </View>
    );
  };
  return (
    <TouchableWithoutFeedback
      onPress={Keyboard.dismiss}
      accessable={false}
      style={styles.container}
    >
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}> Habits </Text>
        </View>
        <View style={styles.body}>{render()}</View>
      </View>
    </TouchableWithoutFeedback>
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
  switchButton: {
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
    padding: 15,
  },
  addHabitHeader: {
    fontFamily: Fonts.bold,
    fontSize: 40,
  },
  addHabitBodyContainer: {
    margin: 40,
    height: "85%",
  },
  addHabitText: {
    fontFamily: Fonts.regular,
    fontSize: 30,
  },
  addHabitContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 30,
  },
  addHabitTextInput: {
    height: "100%",
    width: "50%",
    borderColor: "black",
    borderWidth: 2,
    paddingHorizontal: 10,
    borderRadius: 8,
    marginBottom: 20,
  },
  confirmAddHabit: {
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    marginTop: 50,
    borderRadius: 20,
  },
});
