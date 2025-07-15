import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
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
