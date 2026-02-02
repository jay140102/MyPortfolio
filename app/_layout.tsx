import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: '#FFFFFF' },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: 'Jay Pratap Singh | Mobile Developer'
        }}
      />
      <Stack.Screen
        name="project/[id]"
        options={{
          title: 'Project Details'
        }}
      />
    </Stack>
  );
}
