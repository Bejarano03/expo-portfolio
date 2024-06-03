import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";


export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Marco Bejarano Oseguera</Text>
      <Text>
        Welcome to my portfolio! Please take the time to look
        at my project and personal achievements.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  title: {
    fontWeight: "bold",
    fontSize: 44,
  }
})

