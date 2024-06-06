import { Text, View, StyleSheet, Button, Image } from "react-native";
import { Link } from "expo-router";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";


export default function Index() {
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
      {image && <Image source={{uri : image}} style={styles.image}/>}
      <Button title="Pick an image from camera roll" onPress={pickImage}/>
      
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
  },
  image: {
    width: 200,
    height: 200
  },

})

