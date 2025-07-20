import { Tabs } from "expo-router";
import { StyleSheet } from "react-native";
import colors from "@/constants/colors";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarActiveTintColor: colors.button,
        tabBarInactiveTintColor: colors.primary,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{ headerShown: false, tabBarLabel: "Home" }}
      />
      <Tabs.Screen
        name="habits"
        options={{ headerShown: false, tabBarLabel: "Habits" }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: colors.secondary,
    borderColor: colors.secondary,
    height: "8%",
  },
});
