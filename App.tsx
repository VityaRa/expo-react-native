import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, TextInput, View } from 'react-native';
import { AddButton } from './components/button';
import { List } from './components/list';

export default function App() {
  const [title, setTitle] = useState('ToDoList');

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TextInput value={title} style={styles.title} onChangeText={setTitle} >
        </TextInput>
      </View>
      <View style={styles.addButton}>
        <AddButton />
      </View>
      <View style={styles.listContainer}>
        {/* <List items={list.sort((a, b) => +a.isDone - +b.isDone)} /> */}
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#433F40',
    flexDirection: "column",
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    color: '#fff',

    marginLeft: 50,
    marginRight: 50,
    marginTop: 40,
    paddingTop: 10,
    paddingBottom: 10,

    backgroundColor: "#6fc2d1",
    borderRadius: 50,
  },
  addButton: {
    marginBottom: 20,
    marginTop: 20,
  },
  listContainer: {
  }
});
