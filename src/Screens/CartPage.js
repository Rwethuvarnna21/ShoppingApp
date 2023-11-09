import {  StyleSheet, Text, View, TouchableOpacity,color } from 'react-native'
import React, { useState, } from 'react'

import SubCart from '../components/SubComponent/SubCart'
import SubOrder from '../components/SubComponent/SubOrder'


const CartPage = () => {
  const [enable, setenable] = useState(1)




  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ height: 50, width: '100%', backgroundColor: 'white', flexDirection: 'row' }}>
        <TouchableOpacity style={{ backgroundColor: enable == 1 ?color: 'white', borderBottomWidth: enable === 1 ? 2 : 0,width:90,height:'100%'}} onPress={() => setenable(1)}>
          <Text style={{ color:enable==1? 'red':'black', marginLeft: 8, fontSize: 16, marginTop: 10, textAlign:'center'}}>Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ backgroundColor: enable == 1 ? color:'white',borderBottomWidth: enable === 1 ? 0 : 2,width:90,height:'100%'}} onPress={() => setenable(2)}>
          <Text style={{ color:enable==2?'red':'black', marginLeft: 15, fontSize: 16, marginTop: 10 }}>My Order</Text>
        </TouchableOpacity>

      </View>
      {
        enable == 1 &&
        <SubCart />
      }
      {
        enable ==2 &&
        <SubOrder />
      }
    </View>
  )
}

export default CartPage

const styles = StyleSheet.create({})