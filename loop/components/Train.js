import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";

export default function Profile({ navigation }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text>train</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    margin: '10%',
    backgroundColor: 'red',
  },
});
