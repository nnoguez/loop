import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export default function SelectTran({ handleOptionSelect }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.h1}>Choose your ride.</Text>
        <Text style={[styles.p, { marginBottom: RFValue(30) }]}>Enjoy the flexibility of personalizing your journey as you go by changing your ride to your needs.</Text>
       
        {/* button 1 */}
          <TouchableOpacity onPress={() => handleOptionSelect('Bus')} style={styles.button1} >
            <Text style={styles.buttonText}> Bus </Text>
          </TouchableOpacity>
        {/* button 2 */}
          <TouchableOpacity 
            onPress={() => handleOptionSelect('Car')} 
            style={styles.button2} 
          >
            <Text style={styles.buttonText}> Car </Text>
          </TouchableOpacity>

        {/* button 3 */}
          <TouchableOpacity 
            title="Bus" 
            onPress={() => handleOptionSelect('Cycle')} 
            style={styles.button3} 
          >
            <Text style={styles.buttonText}> Cycle </Text>
          </TouchableOpacity>

        {/* button 4 */}
          <TouchableOpacity 
            title="Car" 
            onPress={() => handleOptionSelect('Train')} 
            style={styles.button4} 
          >
            <Text style={styles.buttonText}> Train </Text>
          </TouchableOpacity>
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
    },  
    h1: {
      fontSize: RFValue(24),
      marginBottom: RFValue(10),
      fontWeight: '600'
    },
    p: {
      fontSize: RFValue(14),
      marginBottom: 20,
      color: 'rgba(0, 0, 0, 0.7)',
    },
    button1: {
      padding: 40,
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#A157FF',
      marginBottom: RFValue(15),
    },
    button2: {
      padding: 40,
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#2D9AFF',
      marginBottom: RFValue(15),
    },
    button3: {
      padding: 40,
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#00CC66',
      marginBottom: RFValue(15),
    },
    button4: {
      padding: 40,
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#FFAB2D',
      marginBottom: RFValue(15),
    },
    buttonText: {
      fontSize: RFValue(16),
      fontWeight: '600',
      color: 'white'
    }
});
