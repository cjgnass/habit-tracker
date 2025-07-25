import { StyleSheet, View, Text, Pressable } from "react-native";
import { useState } from "react";
import colors from "@/constants/colors";
import Fonts from "@/constants/fonts";
import TopBar from "@/components/TopBar";
import Bars3 from "@/components/icons/Bars3";
import Plus from "@/components/icons/Plus";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const iconSize = 60;

  const openMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <Pressable onPress={openMenu}>
          <Bars3 width={iconSize} height={iconSize} />
        </Pressable>
        <Pressable>
          <Plus width={iconSize} height={iconSize} />
        </Pressable>
      </View>

      <View style={styles.containerBody}>
        {menuOpen && (
          <View style={styles.navBarContainer}>
            <Pressable
              style={[styles.navPressable, { backgroundColor: colors.gray }]}
            >
              <Text style={styles.text}>Home</Text>
            </Pressable>
            <Pressable style={styles.navPressable}>
              <Text style={styles.text}>Plan</Text>
            </Pressable>
          </View>
        )}
        <View style={styles.containerUpcoming}>
          <Text style={styles.text}>Today</Text>
          <View style={styles.dayButtonContainer}>
            {Array.from({ length: 7 }).map((_, i) => {
              const date = new Date();
              date.setDate(date.getDate() + i);
              const day = date.toLocaleDateString("en-US", {
                weekday: "short",
              }); // e.g. "Mon"
              const dateNum = date.getDate(); // e.g. 25

              return (
                <Pressable key={i} style={styles.dayButton}>
                  <Text style={styles.dayText}>{day}</Text>
                  <Text style={styles.dateText}>{dateNum}</Text>
                </Pressable>
              );
            })}
          </View>
        </View>

        <View style={styles.containerMain}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerHeader: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
  },
  containerBody: {
    flex: 11,
  },
  navBarContainer: {
    zIndex: 1,
    position: "absolute",
    width: "60%",
    height: "100%",
    backgroundColor: "white",
  },
  navPressable: {
    padding: 20,
  },
  text: {
    fontFamily: Fonts.bold,
    fontSize: 30,
  },
  containerUpcoming: {
    flex: 1,
    padding: 20,
  },
  containerMain: {
    flex: 6,
  },
  dayButtonContainer: {
    flexDirection: "row",
    marginLeft: -10,
    marginTop: 10,
  },
  dayButton: {
    width: 50,
    height: 50,
    borderRadius: 30, // makes it a circle
    backgroundColor: colors.gray,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
  },
  dayText: {
    fontSize: 12,
    fontFamily: Fonts.regular,
    color: "white",
  },

  dateText: {
    fontSize: 16,
    fontFamily: Fonts.bold,
    color: "white",
  },
});
