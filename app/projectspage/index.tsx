import { View, Text, StyleSheet } from 'react-native'
import { Link, Stack, useLocalSearchParams, useRouter } from 'expo-router';

export default function ProjectPage() {
    const router = useRouter();
    const params = useLocalSearchParams();

    return (
        <View style={styles.container}>
           <Stack.Screen
            options={{
                title: params.name,
            }}
           />
           <Text
            onPress={() =>{
                router.setParams({ name: "passwordgenerator"})
            }}
           >
            Update URL 
           </Text>
           <Link style={ styles.link } href={{ pathname: "/projectspage/[id]", params: { id: "passwordgenerator"} }}>Password Generator</Link>
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
        textDecorationLine: "underline",
    }
})