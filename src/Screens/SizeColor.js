// import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

// import React,{ useState } from 'react' 


// const SizeColor = () => {
//     const [size,setSize]=useState('small')
//     const[color,setColor]=useState('blue')
//     const sizes=['S','M','L']
//     const colors=['Black','yellow','red']
//     const handleSize=(selectedSize)=>{
//         setSize(selectedSize);
//     }
//         const handleColor=(selectedColor)=>{

//             setSize(selectedColor);

//     }
//   return (
//     <View style={{flex:1,backgroundColor:'white'}}>
//         <View style={{height:'60%',width:'100%',backgroundColor:'white'}}>
//       <Text style={{alignSelf:'center',color:'black'}}>Select Size & color</Text>
      

      
//       <View style={{flexDirection:'row'}}>
//         {sizes.map((size)=>(
//             <TouchableOpacity
//             key={size}
//                 onPress={() => handleSize(size)}
//                 style={{
//                     backgroundColor: size === size? 'blue' : 'white',
//                     padding: 10,
//                     margin: 5,
//                     height:30,width:20,borderRadius:6
//                   }}
//             >
//                  <Text style={{ color: size === size ? 'white' : 'black' }}>
//                   {size}
//                 </Text>

//             </TouchableOpacity>
//         )
        
//         )}
//         </View>

//         <View style={{flexDirection:'row'}}>
//             {colors.map(()=>(
//                 <TouchableOpacity
//                 key={color}
//                 onPress={()=>handleColor(color)}
//                 style={{
//                     backgroundColor: size === size? 'blue' : 'white',
//                     padding: 10,
//                     margin: 5,
//                     height:50,width:90,borderRadius:6
//                   }}
//                 >
                    
//                 </TouchableOpacity>
//             )
//             )}
//         </View>
//       </View>
//       </View>
    
//   )
// }

// export default SizeColor

// const styles = StyleSheet.create({})

import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const SizeColor = () => {
  const [selectedSize, setSelectedSize] = useState('Small');
  const [selectedColor, setSelectedColor] = useState('blue');

  const sizes = ['S', 'M', 'L','XL','XXL'];
  const colors = ['Red', 'Blue', 'Green'];

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{height:'60%',width:'100%',backgroundColor:'white'}}>
        <Text style={{ alignSelf: 'center', color: 'black', fontSize: 15,marginTop:6,fontWeight:'bold' }}>
          Select Size & Color
        </Text>
        <View style={{  justifyContent: 'space-between', padding: 20 }}>
          <View style={{flexDirection:'row',alignSelf:'center',}}>
            
            {sizes.map((size) => (
              <TouchableOpacity
                key={size}
                onPress={() => handleSizeSelect(size)}
                style={{
                  backgroundColor: size === selectedSize ? 'blue' : 'white',
                  padding: 10,
                  margin: 5,
                  borderRadius:10,shadowColor: 'rgba(0, 0, 0, 0.2)',
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.10,
                  shadowRadius: 2,
                  elevation: 4,

                }}
              >
                <Text style={{ color: size === selectedSize ? 'white' : 'black' }}>
                  {size}
                </Text>
              </TouchableOpacity>
            )
            )}
          </View>
          <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',marginTop:6}}>
            
            {colors.map((color) => (
              <TouchableOpacity
                key={color}
                onPress={() => handleColorSelect(color)}
                style={{
                  backgroundColor: color === selectedColor ? 'blue' : 'white',
                  padding: 10,
                  margin: 5,
                  borderRadius:10,
                  height:50,
                  width:100,
                //   alignSelf:'center',
                justifyContent:'center',
                  alignItems:'center',
                  shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.10,
    shadowRadius: 2,
    elevation: 4,
                }}
              >
                <Text style={{ color: color === selectedColor ? 'white' : 'black' }}>
                  {color}
                </Text>
              </TouchableOpacity>
            )
            )}
          </View>
        </View>
      </View>
      <View style={{height:50,width:'100%',flexDirection:'row',marginTop:4,justifyContent:'center',alignItems:'center'}}>
              {/* <TouchableOpacity
              style={{height:50,width:'40%',backgroundColor:'grey',marginHorizontal:6,borderRadius:10,alignItems:'center',justifyContent:'center'}}>
                
              <Text style={{color:'blue',fontSize:13}}>Add to Cart</Text>
              </TouchableOpacity>

   <TouchableOpacity
   style={{height:50,width:'40%',backgroundColor:'red',borderRadius:10,alignItems:'center',justifyContent:'center'}}>
<Text style={{color:'white',fontSize:12}}>BUY NOW</Text>
   </TouchableOpacity> */}
            </View>
      
      
    </View>

  );
};

export default SizeColor;

const styles = StyleSheet.create({
  
});
