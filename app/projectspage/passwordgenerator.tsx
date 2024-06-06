import { View, Text, StyleSheet, Image, Button } from 'react-native';
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";

export default function ProjectPage() {
    const [image, setImage] = useState(null);

    const pickImage = async () => {

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    return (
        <View style={styles.container}>
            <Text><b>Password Generator</b></Text>
            {image && <Image source={{uri : image}} style={styles.img}/>}
            <Button title="Pick an image from camera roll" onPress={pickImage}/>
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
        width: 200,
        height: 200,
    },
})