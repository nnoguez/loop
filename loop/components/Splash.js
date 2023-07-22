import React, {useEffect} from "react";
import { View, Image, StyleSheet, SafeAreaView } from "react-native";
import { responsiveFontSize } from 'react-native-responsive-fontsize';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { useNavigation } from '@react-navigation/native';

export default function Splash({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Onboarding');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
      <Image
          source={{ uri: 'https://i.imgur.com/rnS12do.gif' }}
          resizeMode="contain"
          style={styles.gif}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#56CCF2',
  },
  container: {
    flex: 1,
    margin: '10%',
    alignItems: 'center',
    marginBottom: RFValue(100)
  },
  gif: {
    width: '100%',
    height: '100%',
  },
});
