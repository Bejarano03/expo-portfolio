import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{title: "Projects Page"}}/>
      <Stack.Screen name="passwordgenerator" options={{title: "Password Generator"}}/>
    </Stack>
  );
}