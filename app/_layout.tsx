import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="projectpage" />
      <Stack.Screen name="skillspage" />
      <Stack.Screen name="contactpage" />
    </Stack>
  );
}
