import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Delete from '../../assets/images/Delete.svg'

const SubOrder = () => {
  const [product, setProduct] = useState([])

  const getProducts = () => {
    axios.get('https://fakestoreapi.com/products').then((res) => {
      console.log('pro=>', res)
      setProduct(res.data)
    })
  }

  useEffect(() => {
    getProducts();
  }, [])

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <FlatList
        data={product}
        renderItem={({ item }) => (
          <View style={{
            height: 150, width: '98%', backgroundColor: 'white', borderRadius: 10, marginVertical: 1, marginLeft: 2,
            shadowColor: 'rgba(0, 0, 0, 0.4',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.4,
            shadowRadius: 4,
            elevation: 4,
          }}>
            <View style={{ flexDirection: 'row', height: 100 }}>
              <Image source={{ uri: item.image }} style={{ height: '100%', width: '35%', resizeMode: 'stretch', marginTop: 18 }} />
              <View style={{ height: 150, width: '80%', backgroundColor: 'white' }}>
                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                  <Text style={{ color: 'black', marginLeft: 6 }}>KOOK N KEECH</Text>
                  <Delete height={20} width={20} marginLeft={100} />
                </View>
                <Text style={{ color: 'green', marginLeft: 7 }}>${item.price}</Text>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  )
}

export default SubOrder

const styles = StyleSheet.create({})
