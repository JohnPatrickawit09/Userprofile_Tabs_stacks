import React, { useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput, Text, Button, useTheme } from 'react-native-paper';
import { useRouter } from 'expo-router';

const Login = () => {
  const theme = useTheme();
  const router = useRouter();
  const [form, setForm] = useState({ email: '', password: '', showPassword: false });

  const handleInputChange = (name, value) => {
    setForm({ ...form, [name]: value });
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <View style={styles.logoContainer}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
        <Text variant="headlineLarge" style={styles.title}>
          PTRCK CORP.
        </Text>
      </View>

      <View style={styles.formContainer}>
        <TextInput
          label="Email Address"
          placeholder="Enter your email"
          value={form.email}
          onChangeText={(text) => handleInputChange('email', text)}
          style={styles.input}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          label="Password"
          placeholder="Enter your password"
          value={form.password}
          onChangeText={(text) => handleInputChange('password', text)}
          secureTextEntry={!form.showPassword}
          style={styles.input}
          right={
            <TextInput.Icon
              icon={form.showPassword ? 'eye' : 'eye-off'}
              onPress={() => handleInputChange('showPassword', !form.showPassword)}
            />
          }
        />
        <Button
          mode="text"
          onPress={() => router.push('recover')}
          style={styles.forgotPassword}
        >
          Forgot Password?
        </Button>
      </View>

      <View style={styles.actionContainer}>
        <Button
          mode="contained"
          onPress={() => router.replace('dashboard')}
          style={styles.actionButton}
        >
          Login
        </Button>
        <Button
          mode="outlined"
          onPress={() => router.push('register')}
          style={styles.actionButton}
        >
          Create Account
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  logoContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 16,
  },
  title: {
    marginTop: 10,
    textAlign: 'center',
    color: '#6200ea',
  },
  formContainer: {
    flex: 2,
    paddingHorizontal: 20,
  },
  input: {
    marginBottom: 16,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginTop: 8,
  },
  actionContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
  },
  actionButton: {
    marginVertical: 8,
  },
});
