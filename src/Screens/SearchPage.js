// import React, { useState, useEffect } from 'react';
// import { View, Text, TextInput ,Button} from 'react-native';
// import { Context } from '../components/Context/ContextApi';
// import { useContext } from 'react';

// const SearchPage = () => {
//   const { SearchQuery,searchResult,dispatch } = useContext(Context);
//   const [searchText, setSearchText] = useState('');

//   const handleSearch = () => {
//     dispatch({type:'SEARCH',payload:searchText})
   
//   };

  

//   return (
//     <View>
      
//       <TextInput
//         placeholder="Search products..."
//         value={searchText}
//         onChangeText={(text) => setSearchText(text)}
//       />
//       <Button title="Search" onPress={handleSearch} />

//       {SearchQuery && (
//         <View>
//           <Text>Search Results for "{SearchQuery}":</Text>
//           {SearchQuery.length === 0 ? (
//             <Text>Please enter a search query.</Text>
//           ) : (
//             <FlatList
//               data={searchResult}
//               keyExtractor={(item) => item.id.toString()}
//               renderItem={({ item }) => <Text>{item.title}</Text>}
//             />
//           )}
//         </View>
//       )}
//     </View>
//   );
// };
// export default SearchPage;
import React, {useState, useEffect, useMemo} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';

const SearchPage = () => {

  const [data, setData] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSelected, setSelection] = useState([]);

  const filteredData = useMemo(() => {
    if (!searchQuery) {
      return data;
    }
    const normalizedQuery = searchQuery.toLowerCase();
    return data.filter(item =>
      item.title.toLowerCase().includes(normalizedQuery),
    );
  }, [data, searchQuery]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, []);

  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => setSelection(item)}
      style={{
        flexDirection: 'row',
        margin: 10,
        width: '90%',
        height: 60,
        alignItems:'center',
        borderWidth: 1,
        marginLeft:18,
        borderColor: isSelected === item ? 'grey' :'white',
      }}>
      <Image source={{uri: item.image}} style={styles.imgbox} />
      <View style={{height: 20, width: '70%'}}>
        <Text style={{marginHorizontal: 10,color:'black'}}> {item.title}</Text>
      </View>
    </TouchableOpacity>
  );
  return (
    <View>
      <TextInput
        placeholder="Search"
        placeholderTextColor='black'
        onChangeText={setSearchQuery}
        value={searchQuery}
        style={styles.searchbox}
      />
      <View>
        <FlatList
          data={filteredData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchbox: {
    height: 50,
    margin: 10,
    width: '95%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'grey',
    color:'black'

  },
  imgbox: {
    height: 45,
    width: 45,
    margin: 5,
    resizeMode:'stretch'
    
  },
  checkbox: {
    alignSelf: 'center',
  },
});

export default SearchPage;