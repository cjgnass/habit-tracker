import SignalIcon from "./SignalIcon";
import SolidCircleIcon from "./SolidCircleIcon";
import { View, Pressable, StyleSheet } from "react-native";
import { useState } from "react";
import colors from "@/constants/colors";
export default function AssistantButton({ onPress, size = 100, active }) {
  const signalIconColor = active ? colors.primary : colors.button;
  const solidCircleIconColor = active ? colors.button : colors.primary;
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.button,
        { height: size, width: size, borderRadius: size / 2 },
      ]}
    >
      <View
        style={[
          styles.iconContainer,
          { width: size * 0.75, height: size * 0.75 },
        ]}
      >
        <SolidCircleIcon
          width={size * 0.9}
          height={size * 0.9}
          radius={(size * 0.9) / 2}
          fill={solidCircleIconColor}
          style={styles.solidCircleIcon}
        />
        <SignalIcon style={styles.signalIcon} fill={signalIconColor} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 10,
    borderColor: colors.primary,
  },
  iconContainer: {
    position: "relative", // Needed for absolute positioning inside
    alignItems: "center",
    justifyContent: "center",
  },
  solidCircleIcon: {
    position: "absolute",
  },
  signalIcon: {
    position: "absolute",
  },
});
