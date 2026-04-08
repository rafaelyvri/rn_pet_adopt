import { Redirect, Tabs } from 'expo-router';
import { useSession } from '../../src/contexts/SessionContext';

export default function TabLayout() {
  const { hasSeenSplash, isAuthenticated } = useSession();

  if (!hasSeenSplash) return <Redirect href="/splash" />;
  if (!isAuthenticated) return <Redirect href="/login" />;

  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="index" options={{ title: 'Home' }} />
    </Tabs>
  );
}