import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, SafeAreaViewBase, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navBar}>
        <Text>Hello, world!</Text>
      </View>
      <View></View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: "column",
  },
  navBar: {
    justifyContent: "space-around",
    flexDirection: "row",
    backgroundColor: '#030303',
    height: 60,
  }
});
