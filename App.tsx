import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, Platform, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';

import { theme } from './src/theme';
import { Widget } from './src/components/Widget';
import React from 'react';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular, Inter_500Medium
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{
        flex: 1,
        backgroundColor: theme.colors.background
      }}
    >
      <View style={{
        padding: 24,
        flex: 1,
        justifyContent: "space-around"
      }}>
        <StatusBar
          style="auto"
          backgroundColor='transparent'
          translucent
        />

        <Widget />
      </View>
    </KeyboardAvoidingView>
  );
}

