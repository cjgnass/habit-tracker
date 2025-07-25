import { StyleSheet, View, Text } from "react-native";
import Fonts from "@/constants/fonts";

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}></View>
      <View style={styles.upcomingContainer}></View>
      <View style={styles.mainContainer}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    flex: 1,
    backgroundColor: "gray",
  },
  upcomingContainer: {
    flex: 2,
    backgroundColor: "black",
  },
  mainContainer: {
    flex: 10,
  },
});
