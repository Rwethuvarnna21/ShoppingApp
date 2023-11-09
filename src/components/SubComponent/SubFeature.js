import { StyleSheet, Text, View ,FlatList,Image} from 'react-native'
import React,{useEffect,useState} from 'react'
import {Context} from '../Context/ContextApi'
import axios from 'axios'
import * as Progress from 'react-native-progress';
import { useContext } from 'react';

const SubFeature = () => {
    
  const {data,error,loading}=useContext(Context)
  // const [product, setProduct] = useState([])
  // const getproduct = () => {
  //   axios.get('https://fakestoreapi.com/products').then((res) => {
  //     console.log('pro=>', res)
  //     setProduct(res.data)
  //   })
  // }
  // useEffect(() => {
  //   getproduct();
  // }, [])
  
   
const renderProductItem = ({ item }) => (
    
      <View style={styles.productItem}>
        <Image source={{ uri: item.image }} style={styles.productImage} />
        <View style={styles.productDetails}>
          <Text style={styles.productTitle} numberOfLines={1}>
            {item.title}
          </Text>
          
          <Text style={{color:'black',alignSelf:'center'}}>${item.price}</Text>
          <Progress.Bar progress={0.6} width={160} marginTop={2} color='orange'/>
          
           
        </View>
      </View>
    
            
           

)

  return(
    <><View style={{ height: 30, width: '100%', backgroundColor: 'white' ,flexDirection:'row'}}>
 <Text style={{ color: 'black', fontSize: 16, fontWeight: 'bold', marginHorizontal: 8 }}>Featured</Text>


<Text style={{ color: 'black', fontSize: 9, marginLeft: 250, marginTop: 5 }}>View all</Text>
      </View>
      <View style={{ height: '4%', width: '100%', flexDirection: 'row', flexWrap: 'wrap', backgroundColor: 'white' }}>
              <FlatList

                  data={data}
                  renderItem={renderProductItem}
                  horizontal={true} />

          </View></>
      )
  }
export default SubFeature

const styles = StyleSheet.create({
    productItem: {
        flexDirection: 'column',
        alignItems: 'center',
        margin: 8,
        
        borderRadius: 10,
        height:185,
        width:180,
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: 'rgba(0, 0, 0, 0.2)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.10,
        shadowRadius: 2,
        elevation: 4,
        
      },
      productImage: {
        width: 80,
        height: 90,
        borderRadius: 10,
        margin: 8,
        top:2,
        resizeMode:'stretch'
      },
      productDetails: {
        numberOfLines:1,
        paddingVertical: 8,
        paddingRight: 8,
      },
      productTitle: {
        fontSize: 16,
        
        color:'black'
      },
})