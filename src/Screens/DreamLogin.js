import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Cloud from '../assets/images/Cloud.svg'
import Arrow from '../assets/images/Arrow.svg'
import { useNavigation } from '@react-navigation/native'

const DreamLogin = () => {
  const navigation=useNavigation()
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ height: 100, width: '70%', alignItems: 'center', marginTop: 150, justifyContent: 'center', alignSelf: 'center' }}>
        <Cloud width={200} height={200} />
      </View>
      <TouchableOpacity style={{ height: 50, width: '90%', backgroundColor: 'black', alignSelf: 'center', justifyContent: 'center', alignItems: 'center', borderRadius: 10, marginTop: 200 }}>
        <Text style={{ color: 'white', }}>OTP Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ height: 50, width: '90%', alignSelf: 'center', justifyContent: 'center', alignItems: 'center', borderRadius: 10,borderWidth:1,borderColor:'blue',marginVertical:40  }}>
        <Text style={{ color: 'blue', }}>New User</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ height: 50, width: '50%', alignSelf: 'center', alignItems: 'center', borderRadius: 20,backgroundColor:'blue',marginVertical:40,flexDirection:'row'  }}
      onPress={()=>navigation.navigate('Home')}
      >
        <Text style={{ color: 'white',marginLeft:80 }}>Skip</Text>
        <Arrow width={20} height={20} marginLeft={60}></Arrow>
      </TouchableOpacity>
    </View>
  )
}

export default DreamLogin

const styles = StyleSheet.create({})