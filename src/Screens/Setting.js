/* eslint-disable prettier/prettier */

import * as React from 'react';
import { Text, View } from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Logo from  '../assets/images/Logo.svg';
import Logo2 from '../assets/images/logo2.svg';
import Addbutton from '../assets/images/Addbutton.svg'
import Win from '../assets/images/Win.svg'
import HomePage from './HomePage';
import Winner from './Winner';
import Profile from '../assets/images/Profile.svg'
import Cart from '../assets/images/Cart.svg'
import CartPage from './CartPage';
import User from './User';
function HomeScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{color:'black'}}>Home</Text>
        </View>
    );
}
function SettingScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{color:'black'}}>Setting</Text>
        </View>
    );
}
function AddScreen(){
  return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text style={{color:'black'}}>Add</Text>
    </View>
  )
}

const Tab = createBottomTabNavigator();
const Setting = () => {
    return (
        <Tab.Navigator>
          
            <Tab.Screen name="Home" component={HomePage} options={{headerShown:false,
          tabBarIcon:()=>{
            return(
              <Logo height={20} width={20}/>
            )
          }
        } }
        />
        
            <Tab.Screen name="Winner" component={Winner} options={{headerShown:true,
          tabBarIcon:()=>{
            return(
              <Win height={20} width={20}/>
            )
          }
        } }
        />
        <Tab.Screen name="Cart" component={CartPage} options={{headerShown:false,
          tabBarIcon:()=>{
            return(
              <Cart height={20} width={20}/>
            )
          }
        } }
        />
         <Tab.Screen name="User" component={User} options={{headerShown:false,
          tabBarIcon:()=>{
            return(
              <Profile height={20} width={20}/>
            )
          }
        } }
        />
        {/* < Tab.Screen name="Addbutton" component={AddScreen} options={{headerShown:false,
          tabBarIcon:()=>{
            return(
              <Addbutton height={20} width={20}/>
            )
          }
        }}/> */}


         {/* < Tab.Screen name="Settings" component={SettingScreen} options={{headerShown:false,
          tabBarIcon:()=>{
            return(
              <Logo2 height={20} width={20}/>
            )
          }
        }}/>
             */}

            
            
        </Tab.Navigator>




    );
}
export default Setting;