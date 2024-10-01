import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, SectionList, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useNavigation } from '@react-navigation/native'; 

const LoginScreen = () => {
  const router = useRouter();
  const sections = [
    { title: 'Email', data: ['Enter your email'] },
    { title: 'Password', data: ['Enter your password'] }
  ];

  const navigation = useNavigation();  
  navigation.setOptions({
    headerShown: false,
  });

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome back!</Text>
      <Text style={styles.subtitle}>Let's help you meet up your tasks.</Text>

      <SectionList
        sections={sections}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <TextInput
            style={styles.input}
            placeholder={item}
            secureTextEntry={item.toLowerCase().includes('password')}
          />
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.sectionHeader}>{title}</Text>
        )}
      />

      <TouchableOpacity style={styles.button} onPress={() => router.push('/dashboard')}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('/register')}>
        <Text style={styles.signupText}>Don't have an account? Sign up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', paddingHorizontal: 20, backgroundColor: '#F0F8FA' },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 10, textAlign: 'center' },
  subtitle: { fontSize: 16, marginBottom: 20, textAlign: 'center' },
  sectionHeader: { fontSize: 16, fontWeight: 'bold', marginBottom: 5 },
  input: { backgroundColor: '#FFF', padding: 15, borderRadius: 8, marginBottom: 15, borderWidth: 1, borderColor: '#DDD' },
  button: { backgroundColor: '#0AA1DD', padding: 15, borderRadius: 8, alignItems: 'center' },
  buttonText: { color: '#FFF', fontSize: 16 },
  signupText: { marginTop: 15, color: '#0AA1DD', textAlign: 'center' },
});
