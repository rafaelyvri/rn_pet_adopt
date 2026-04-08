import { View, Text, Pressable, StyleSheet, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Redirect, useRouter } from 'expo-router';
import { useSession } from '../src/contexts/SessionContext';

export default function SplashScreen() {
  const router = useRouter();
  const { completeSplash, hasSeenSplash, isAuthenticated } = useSession();

  if (isAuthenticated) return <Redirect href="/(tabs)" />;
  if (hasSeenSplash) return <Redirect href="/login" />;

  const handleNavigate = (target: '/login' | '/signup') => {
    completeSplash();
    router.replace(target);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="light" />
      <View style={styles.container}>
        <ImageBackground 
          source={{ uri: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b' }} 
          style={styles.hero} 
          imageStyle={styles.heroImage}
        >
          <View style={styles.heroOverlay} />
          <Text style={styles.heroTitle}>Find your new best friend 🐾</Text>
        </ImageBackground>

        <View style={styles.sheet}>
          <View style={styles.handle} />
          <Text style={styles.sheetTitle}>Ready to adopt?</Text>
          
          <Pressable onPress={() => handleNavigate('/login')} style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>Get Started</Text>
          </Pressable>
          
          <Pressable onPress={() => handleNavigate('/signup')} style={styles.secondaryButton}>
            <Text style={styles.secondaryButtonText}>Create Account</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#140B04' },
  container: { flex: 1 },
  hero: { flex: 0.64, justifyContent: 'flex-end', padding: 24 },
  heroImage: { borderBottomLeftRadius: 36, borderBottomRightRadius: 36 },
  heroOverlay: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(20, 11, 4, 0.28)' },
  heroTitle: { fontSize: 38, fontWeight: '800', color: '#FFFFFF', lineHeight: 44 },
  sheet: { flex: 0.44, marginTop: -28, borderTopLeftRadius: 32, borderTopRightRadius: 32, backgroundColor: '#FFF8F3', padding: 24 },
  sheetTitle: { fontSize: 24, fontWeight: '700', color: '#1B1716', marginBottom: 20, textAlign: 'center' },
  handle: { alignSelf: 'center', width: 72, height: 6, borderRadius: 999, backgroundColor: '#DFD5CF', marginBottom: 20 },
  primaryButton: { backgroundColor: '#1B1716', padding: 16, borderRadius: 16, alignItems: 'center', marginBottom: 12 },
  primaryButtonText: { color: '#FFF', fontWeight: '700', fontSize: 16 },
  secondaryButton: { padding: 16, borderRadius: 16, alignItems: 'center', borderWidth: 1, borderColor: '#DFD5CF' },
  secondaryButtonText: { color: '#1B1716', fontWeight: '700', fontSize: 16 }
});