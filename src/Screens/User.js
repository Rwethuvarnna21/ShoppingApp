import { TouchableOpacity, Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import Foto from '../assets/images/Foto.png'

const User = () => {
  return (
    <><LinearGradient colors={['#b92b27', '#1565C0']} style={{ height: '40%', width: '100%' }}>
      <View style={{ flexDirection: 'row', }}>
        <Image source={Foto} style={{ height: 80, width: 80, borderRadius: 80, margin:'20%' }} />

        <Text style={{ color: 'white', fontWeight: 'bold', marginTop:110 ,right:"25%"}}>AFAR </Text>
      </View>
    </LinearGradient>
    <View style={{height:'80%',width:'100%',backgroundColor:'white'}}>
      <TextInput
      style={{
        
          fontSize: 16, 
          color: 'black', 
         
        marginLeft:18,
          borderColor: 'gray'
      }}
      placeholder='Mobile'
      placeholderTextColor='black'

      

      />
      <View style={{height:1,width:'90%',backgroundColor:'grey',justifyContent:'center',alignSelf:'center'}}></View>
      <TextInput
      style={{
        
          fontSize: 16, 
          color: 'black', 
         marginTop:20,
        marginLeft:18,
          borderColor: 'gray'
      }}
      placeholder='Email'
      placeholderTextColor='black'

      

      />
      <View style={{height:1,width:'90%',backgroundColor:'grey',justifyContent:'center',alignSelf:'center',}}></View>
      <TextInput
      style={{
        
          fontSize: 16, 
          color: 'black', 
         marginTop:20,
        marginLeft:18,
          borderColor: 'gray'
      }}
      placeholder='Location'
      placeholderTextColor='black'

      

      />
       <View style={{height:1,width:'90%',backgroundColor:'grey',justifyContent:'center',alignSelf:'center',}}></View>
       <TouchableOpacity
              style={{height:50,width:'50%',backgroundColor:'blue',marginLeft:90,borderRadius:10,alignItems:'center',justifyContent:'center',marginTop:30}}>
                
              <Text style={{color:'white',fontSize:13}}>update Profile</Text>
              </TouchableOpacity>

      </View></>
  )
}

export default User

const styles = StyleSheet.create({})