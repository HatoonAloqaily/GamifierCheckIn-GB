import React from 'react'
import { Text, View, StyleSheet,Image, Button, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

export default function About() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
        <View style={styles.box}>
       <Image
       source={require('../assets/logo.png')}
       style={styles.img}
       ></Image>
     <View style={{width:290, backgroundColor:'#ccc',opacity:0.3,height:3}}></View>

       <Text style={styles.heading2}>
       Golden Brown is a reward system web-app where you can easily sign up through phone number and easily track your point, rewards and redeems.
        </Text> 
        <View style={{top:150}}>
         <TouchableOpacity onPress={()=>{navigation.navigate('Setting')}}>
        <Ionicons name='arrow-back-outline' size={30} color={'#FBBD0A'} ></Ionicons> 
        </TouchableOpacity>
        </View>
       </View>

    </View>
  )
}
 const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#342802',   //changed the color
       
        alignItems:'center',
        justifyContent:'center'
    },
    box: {
      backgroundColor: '#fff',
      height:480,
      width:370,
      borderRadius:15,
      alignItems:'center',
    },
    img: {
      width: 110,
      height:110,
      marginTop: 20  
    },
      
      heading2: {
        textAlign: 'left',
        color:'#342802',
        fontSize: 22,
        top: 50,
        width: 280
      }
 })

