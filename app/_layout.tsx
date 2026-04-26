import { Stack } from "expo-router";
import Head from "expo-router/head";


export default function RootLayout() {
  return (
    <>
      <Head>
        <meta name="google-site-verification" content="xgzSNrOnjSCbbRWyLw8K3qaQUwCSN2ZUnEXqwP1qej8" />
      </Head>
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
      <Stack.Screen
        name="privacy"
        options={{
          title: 'Privacy Policy | QuickChat WA'
        }}
      />
      </Stack>
    </>
  );
}
