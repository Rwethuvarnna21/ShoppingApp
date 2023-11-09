import { FlatList, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Foto from '../assets/images/Foto.png'
import {Context} from '../components/Context/ContextApi'
import { useContext } from 'react'


const Winner = () => {
    const{data}=useContext(Context)
    // const [product, setProduct] = useState([])
    // const getproduct = () => {
    //     axios.get('https://fakestoreapi.com/products').then((res) => {
    //         console.log('proc=>', res)
    //         setProduct(res.data)
    //     })
    // }
    // useEffect(() => {
    //     getproduct()
    // }, [])
    const renderProductItem = ({ item }) => {
        return (

            <View style={styles.productItem}>
                <Image source={{ uri: item.image }} style={styles.productImage} />

                <Text style={{ color: 'blue', fontFamily: 'RobotoMono-Italic-VariableFont_wght', }}>Congratulation</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Image source={Foto} style={{ height: 20, width: 30, borderRadius: 10 }} />
                    <Text style={{ color: 'black' }}>Dileep</Text>
                </View>
            </View>


        )
    }
    return (
        <><View style={{ height: 50, width: '100%', backgroundColor: 'white' }}>

            <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 19, marginLeft: 6 }}>Customers Who Won Prize in Lucky Draw Contests</Text>
        </View>

            <FlatList
                data={data}
                renderItem={renderProductItem}
                numColumns={2} />
        </>
    )
}



const styles = StyleSheet.create({
    productItem: {
        flexDirection: 'column',
        alignItems: 'center',
        // margin: 8,
        marginVertical:8,
        marginHorizontal:8,

        borderRadius: 10,
        height: 185,
        width: 182,
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
        height: 100,
        borderRadius: 10,
        margin: 8,
        top: 2,
        resizeMode: 'stretch'
    },
})
export default Winner