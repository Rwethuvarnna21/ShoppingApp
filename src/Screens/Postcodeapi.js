import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios'
import { postcodeUrl } from '../components/utils/Apilink'
import { useNavigation } from '@react-navigation/native'

const Postcodeapi = () => {
  const navigation=useNavigation();
  const [post, setPost] = useState('');
  const [pincode, setPincode] = useState([]);
  const getProduct = () => {
    axios.get(`${postcodeUrl}/${post}`).then((response) => {
      console.log('process=>', response)
      setPincode(response.data)
    })
  };
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      {/* <Text style={{ color: 'black' }}>Postcodeapi</Text> */}
      <TextInput
        style={{ color: 'black' }}
        placeholder='enter pin code'
        placeholderTextColor='black'
        value={post}
        onChangeText={setPost} />
      <Button
        title='submit'
        onPress={getProduct} />
      <View style={{ height: 300, color: 'blue' }}>
        <FlatList
          data={pincode}
          renderItem={({ item }) =>(
            <><Text style={{ color: 'blue', fontSize: 13,fontFamily:'Poppins-Black'}}>{item?.PostOffice[0].Name}</Text>
            <Text style={{ color: 'blue', fontsize: 14,fontFamily:'Poppins-Black' }}>{item?.PostOffice[0].District}</Text>
            <Text style={{ color: 'blue', fontsize: 14,fontFamily:'Poppins-Black' }}>{item?.PostOffice[0].Division}</Text>
            <Text style={{ color: 'blue', fontsize: 14,fontFamily:'Poppins-Black' }}>{item?.PostOffice[1].Circle}</Text>
            <Text style={{ color: 'blue', fontsize: 14,fontFamily:'Poppins-Black'}}>{item?.PostOffice[1].District}</Text>
            <Button title='press' onPress={() => navigation.navigate('loginapi',{item})} />
            </>
            
          )
          }
            />
      </View>
    </View>
  )
}
export default Postcodeapi;
const styles = StyleSheet.create({})












