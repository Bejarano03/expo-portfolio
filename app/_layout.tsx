import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{title: "Home"}}/>
      <Stack.Screen name="skillspage" options={{title: "Skills Page"}}/>
      <Stack.Screen name="contactpage" options={{title: "Contact Page"}}/>
    </Stack>
  );
}
