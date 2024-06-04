import { Link } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native'

export default function SkillsPage() {
    return (
        <View style={styles.container}>
            <Text>
                Skills:
                <ul>
                    <li>HTML/CSS</li>
                    <li>Node</li>
                    <li>React Native</li>
                    <li>Expo</li>
                    <li>Python</li>
                </ul>
            </Text>
            <Link style={styles.link}replace href="/">return home</Link>
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
        marginTop: 20,
        color: "blue",
        textDecorationLine: "underline",
    },
})