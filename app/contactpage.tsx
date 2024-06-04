import { Link } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native'

export default function ContactPage() {
    return (
        <View style={styles.container}>
            <Text>Email: marco.bejarano03@gmail.com</Text>
            <Link style={styles.link} push href="/">return home</Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    link: {
        color: "blue",
        marginTop: 20,
        textDecorationLine: "underline",
    },
})