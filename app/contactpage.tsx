import { View, Text, StyleSheet } from 'react-native'

export default function ContactPage() {
    return (
        <View style={styles.container}>
            <Text>Edit /app/contactpage.tsx to make changes to the page</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    }
})