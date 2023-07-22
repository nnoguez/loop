import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";

export default function Explore({ navigation }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text>explore</Text>
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
    backgroundColor: 'pink',
  },
});
