import React, { Component } from 'react';
import { View, Pressable, Text, Linking, Image, TextInput, Button, TouchableOpacity, StyleSheet, AsyncStorage, ScrollView } from 'react-native';
import { SocialIcon, SocialIconProps, Input, Icon } from '@rneui/themed'; 


export default class Signup extends Component {

  render() {
    return (
      <>
      <View style={styles.viewStyle}>
      <ScrollView>

        {/* LOGO */}
          <Image  
              style={{ height: '5%', width: '50%', marginHorizontal: '26%', marginTop: '10%', resizeMode:'contain'}}
              source={{uri:'https://i.postimg.cc/65XBkHNg/logo.png'}}>  
          </Image> 

            <Image  
              style={{ height: '20%', width: '100%' , resizeMode:'contain'}}
              source={{uri:'https://www.linkpicture.com/q/Food-for-thanksgiving.png'}}>  
            </Image> 


          <View style={{ backgroundColor: 'white', borderRadius: '25 0 0 25', padding: '5%'}}>
            <View style={styles.action}>
              <TextInput
                placeholder="Enter Email"
                placeholderTextColor="#969696"
                style={styles.textInput}
                onChangeText={email=>this.setState({email})}
                />
            </View>

            <View style={styles.action}>
              <TextInput
                placeholder="Enter Username"
                placeholderTextColor="#969696"
                style={styles.textInput}
                onChangeText={username=>this.setState({username})}
                />
            </View>

            <View style={styles.action}>
              <TextInput
                placeholder="Enter Password"
                placeholderTextColor="#969696"
                style={styles.textInput}
                />
            </View>

            <View style={styles.action}>
              <TextInput
                placeholder="Confirm Password"
                placeholderTextColor="#969696"
                style={styles.textInput}
                />
            </View>

            {/* Button */}
            <View style={styles.buttonsection}>    
                <Pressable
                  style={styles.button} 
                  onPress={()=>{this.UserInfo()}}>
                  <Text style={styles.text}>SIGN UP</Text>
                </Pressable>
              </View>

            <View style={{alignItems:'center',marginVertical: 20, width:'100%'}}>
              <Text>- or Log In With -</Text>
              <View style={[styles.userInfo, {flex:1, flexDirection: 'row'},]}>
                <TouchableOpacity>
                  <SocialIcon type="instagram" onPress={() => Linking.openURL('http://instagram.com')}></SocialIcon>
                </TouchableOpacity>
                <TouchableOpacity>
                  <SocialIcon type="facebook" onPress={() => Linking.openURL('http://facebook.com')}></SocialIcon>
                </TouchableOpacity>
                <TouchableOpacity>
                  <SocialIcon type="google" onPress={() => Linking.openURL('http://google.com')}></SocialIcon>
                </TouchableOpacity>
              </View>
              
            </View>

            {/* REDIRECT TO SIGNUP */}
              <View style={{ flexDirection: 'row', marginBottom: '20%', marginLeft: '20%'}}>
                <Text> Already have an account? </Text>
                <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Login')}}>
                    <Text style={{ fontWeight: 'bold', color: '#9492EF'}}>Log In!</Text>
                </TouchableOpacity>
              </View>
        </View>
      </ScrollView>

      </View>
      </>
    );
  }
}


const styles = StyleSheet.create({
  viewStyle:{
    flex: 1,
    padding: 20,
    backgroundColor: '#9492EF'
  },
  textInput:{
      borderBottomColor: '#9492EF',
      borderBottomWidth: 1,
      marginBottom: 50,
      height: 40,
      fontSize: 20,
      flex: 1,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
 
    width: '100%'
  },
  text: {
    fontSize: 18,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
    textTransform: 'uppercase'
  },
  buttonsection: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    backgroundColor: '#FFC42D',
    color: 'white',
    height: 35,
    justifyContent: 'center', //up dwn
    alignItems: 'center',  //r & l
    width: '70%',
    borderRadius: 10,
  }
})