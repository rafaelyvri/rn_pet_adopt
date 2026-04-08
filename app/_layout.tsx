import { Stack } from 'expo-router';
import { SessionProvider } from '../src/contexts/SessionContext';

export const unstable_settings = { initialRouteName: 'splash' };

export default function RootLayout() {
  return (
    <SessionProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="splash" />
        <Stack.Screen name="login" />
        <Stack.Screen name="(tabs)" />
      </Stack>
    </SessionProvider>
  );
}