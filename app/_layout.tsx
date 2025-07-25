import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { View, StyleSheet } from "react-native";
import { Slot } from "expo-router";
import colors from "@/constants/colors";

export default function RootLayout() {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      {/* Top inset (status bar area) */}
      <View
        style={[styles.inset, { height: insets.top, backgroundColor: "black" }]}
      />

      {/* Main safe area content */}
      <SafeAreaView style={styles.safeArea} edges={["left", "right"]}>
        <Slot />
      </SafeAreaView>

      {/* Bottom inset (home indicator / gesture area) */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  inset: {
    width: "100%",
  },
});
