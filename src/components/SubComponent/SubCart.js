import { StyleSheet, Text, View ,Image,FlatList,TouchableOpacity,} from 'react-native'
import React,{useState,useContext} from 'react'
import axios from 'axios'
import Delete from '../../assets/images/Delete.svg'
import { Context } from '../Context/ContextApi'





const SubCart = () => {
  const{cart,dispatch}=useContext(Context)
  const[count,setCount]=useState({})
  console.log('Cart Data:', cart);

  
   const deleteItem=(ProductId)=>{
    dispatch({type:'DELETE',payload:ProductId})
   }
    const increaseCount = (productId) => {
      setCount(prevCounts => ({
        ...prevCounts,
        [productId]: (prevCounts[productId] || 0) + 1
      }))
    }
    const decreaseCount = (productId) => {
      if (count[productId] > 0) {
        setCount(prevCounts => ({
          ...prevCounts,
          [productId]: prevCounts[productId] - 1
        }))
      }
    }
   
   
  return (
    <View style={{flex:1,backgroundColor:'white'}}>
        
         <FlatList
        data={cart}
        renderItem={({ item }) =>
          <><View style={{
            height: 150, width: '98%', backgroundColor: 'white', borderRadius: 10, marginVertical: 1, marginLeft: 2,
            shadowColor: 'rgba(0, 0, 0, 0.4',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.4,
            shadowRadius: 4,
            elevation: 4,
          }}>
            <View style={{ flexDirection: 'row', height: 100 }}>
              <Image source={{ uri: item.image }} style={{ height: '100%', width: '35%', resizeMode: 'stretch', marginTop: 18, }} />
              <View style={{ height: 150, width: '80%', backgroundColor: 'white' }}>
                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                  <Text style={{ color: 'black', marginLeft: 6 }}>KOOK N KEECH</Text>
                  <TouchableOpacity onPress={()=>deleteItem(item.id)}>
                  <Delete height={20} width={20} marginLeft={100} />
                  </TouchableOpacity>
                </View>
                <Text style={{ color: 'green', marginLeft: 7 }}>${item.price}</Text>
                <View style={{ height: 50, width: '100%', backgroundColor: 'white' }}>

                </View>
                <View style={{ height: 40, width: '83%', backgroundColor: 'white',flexDirection:'row' }}>
               
               
 <View style={{ height: 34, width: 30,justifyContent:'center',alignSelf:'center',marginLeft:9}}>
            <TouchableOpacity style={styles.button} onPress={() => decreaseCount (item.id)}
              // if (count > 1) {
              //   setCount(count - 1);
              // }
            // }}
            >
              <Text style={{ color: 'black', fontSize: 16,alignSelf:'center',alignItems:'center' }}>-</Text>
            </TouchableOpacity>
          </View>
        
          <View style={{ alignSelf: 'center', justifyContent: 'center' ,alignSelf:'center',height:34,width:25}}>

            <Text style={{ color: 'black', fontSize: 13,left:7 }}>{count[item.id]|| 0}</Text>
          </View>
          <View style={{ height: 34, width: 30,justifyContent:'center',alignSelf:'center'}}>
 <TouchableOpacity style={styles.button} onPress={() => increaseCount(item.id)}>
 <Text style={{ color: 'black', fontSize: 10, }}>+</Text>
           </TouchableOpacity>
           </View>
           <View style={{height:35,width:'58%',justifyContent:'flex-end',alignItems:'flex-end',}}>
           <TouchableOpacity
           onPress={()=>orderItem(item.id)}
   style={{height:27,width:'40%',backgroundColor:'red',borderRadius:10,alignItems:'center',justifyContent:'center',}}>
<Text style={{color:'white',fontSize:12}}>Order</Text>
   </TouchableOpacity>
   </View>

              </View>
              </View>
              
             
            </View>
          </View></>
        }


      />
    </View>
      
    // </View>
  )
}

export default SubCart

const styles = StyleSheet.create({
  button: {
    width: 25,
    height: 25,
    // backgroundColor: '#dddddd',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    // padding: 10,
    // borderRadius: 10,
    margin: 5,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.10,
    shadowRadius: 2,
    elevation: 4,
  },
})