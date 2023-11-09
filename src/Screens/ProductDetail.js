import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'
import * as Progress from 'react-native-progress';
import SizeColor from './SizeColor';

const ProductDetail = ({route}) => {
    const {item}=route.params
  return (
    <View style={{flex:1,backgroundColor:'white'}}>
      <View style={{height:'auto',width:'100%',justifyContent:'flex-end',flexDirection:'row'}}>
        <Progress.Circle size={70}
          
          indeterminate={false}
          progress={0.6}
          showsText={true}
          formatText={() => (

            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ color: 'grey', fontSize: 10, alignSelf: 'center' }}>Sold</Text>

              <Text style={{ color: 'orange', fontSize: 13 }}>400</Text>
              <View style={{ backgroundColor: 'grey', height: 1, width: 50, marginVertical: 0 }} />
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ color: 'grey', fontSize: 10 }}> out of </Text>
                <Text style={{ color: 'black', fontSize: 13 }}>1000</Text>
              </View>

            </View>

          )}


          textStyle={{ fontSize: 12, color: 'black' }}
          marginTop={30}
          color='orange'
          unfilledColor='grey'
          borderWidth={0}
          fill='white' /> 
          </View>
      <Image source={{ uri: item.image }} style={{ height: '30%', width: '75%',resizeMode:'stretch',alignSelf:'center'}} />
      <View style={{height:'50%',width:'100%',backgroundColor:'white',position:'absolute',borderRadius:20,marginTop:420,borderColor:'grey',borderWidth:1}}>
      <View style={{flexDirection:'row',marginHorizontal:20}}>
            <Text style={{ color: 'black',}}>KOOK N KEECH</Text>
            <Text style={{ color: 'green',alignSelf:'center',marginLeft:200 }} >${item.price}</Text>
            </View>
            <View style={{height:1,backgroundColor:'black',width:'96%',alignSelf:'center',justifyContent:'center',marginTop:4}}></View>
            <Text style={{ color: 'black',marginLeft:12,fontWeight:'bold',marginTop:10}}>Product Details</Text>
            <Text style={{ color: 'black',alignSelf:'center' }} numberOfLines={1}> {item.description}</Text>
            <SizeColor/>
            
            
    </View>
    </View>
  )
}

export default ProductDetail

const styles = StyleSheet.create({})
