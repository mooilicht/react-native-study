import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  const name = "Mooi";
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {/* My name is {name} */}
        {/* {(() => {
          if (name === "Mooi") return `My name is ${name}`;
          else if (name === "mooilicht") return `My name is mooilicht`;
          else return "My name is React Native";
        })()} */}
        My name is {name === "Mooi" ? "Mooi" : "React Native"}
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 30,
  },
});
