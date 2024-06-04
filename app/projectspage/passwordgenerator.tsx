import { View, Text, StyleSheet, Image } from 'react-native'

export default function ProjectPage() {
    return (
        <View style={styles.container}>
            <Text><b>Password Generator</b></Text>
            <Image style={styles.img} source={require("../../assets/images/passwordgenerator.png")}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    img: {
        width: 800,
        height: 600,
    },
})