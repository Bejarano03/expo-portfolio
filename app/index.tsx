import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";


export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Marco Bejarano Oseguera</Text>
      <Text
        style={{
          marginTop: 20,
        }}
      >
        Welcome to my portfolio! Please take the time to look
        at my projects and personal achievements.
      </Text>
      <Link style={styles.links} href="/projectspage">Projects Page</Link>
      <Link style={styles.links} href="/skillspage">Skills Page</Link>
      <Link style={styles.links} href="/contactpage">Contact Page</Link>
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
    fontSize: 38,
  },
  links: {
    fontWeight: "bold",
    fontSize: 20,
    textDecorationLine: "underline",
    color: "blue",
    marginTop: 20,
  }
})

