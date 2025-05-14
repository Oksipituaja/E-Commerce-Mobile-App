import React from 'react';
import { StatusBar } from 'expo-status-bar';
import "@/global.css"; // Abaikan ini jika tidak pakai Tailwind CSS + Expo Router
import { StyleSheet, View } from "react-native";
import { GluestackUIProvider, Text } from '@gluestack-ui/themed'; // ✅ Import dari package, bukan lokal
import config from './gluestack-ui.config'; // ✅ pastikan file ini ada di root proyek

export default function App() {
  return (
    <GluestackUIProvider config={config}>
        <Text>
          Hello World
        </Text>
        <StatusBar style="auto" />
    </GluestackUIProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
