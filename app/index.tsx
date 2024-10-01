import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { useNavigation } from '@react-navigation/native'; 

const OnboardingScreen = () => {
  const router = useRouter();
  const navigation = useNavigation();  
  navigation.setOptions({
    headerShown: false,
  });
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'image-url-here' }}
        style={styles.image}
      />
      <Text style={styles.title}>Gets things done with to do</Text>
      <Text style={styles.subtitle}>Lorem ipsum dolor sit amet consectetur. Enim.</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('/register')}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F0F8FA' },
  image: { width: 200, height: 200, marginBottom: 30 },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center' },
  subtitle: { fontSize: 16, textAlign: 'center', marginBottom: 50 },
  button: { backgroundColor: '#0AA1DD', padding: 15, borderRadius: 8 },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});
