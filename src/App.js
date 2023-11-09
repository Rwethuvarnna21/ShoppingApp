import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Postcodeapi from './Screens/Postcodeapi';
// import loginapi from './assets/loginapi';
import Loginapi from './assets/loginapi';
import detailapi from './Screens/detailapi';
import homeapi from './Screens/homeapi';
import Login from './Screens/Login';
import Mynavigation from './components/Navigation/Mynavigation';
import mydetail from './Screens/mydetail';
import Setting from './Screens/Setting';
import Productapi from './components/Product/Productapi';
import Details from './Screens/Details';
import Productlogin from './Screens/Productlogin';
import Signup from './Screens/Signup';
import Phoneauth from './Screens/Phoneauth';
import HomePage from './Screens/HomePage';
import DreamLogin from './Screens/DreamLogin';
import ProductDetail from './Screens/ProductDetail';
import CartPage from './Screens/CartPage';
import SubCart from './components/SubComponent/SubCart';
import { ProductProvider } from './components/Context/ContextApi';
import SearchPage from './Screens/SearchPage';


// import Home from './Screens/Home';
// import Setting from './Screens/Setting';








const Stack = createNativeStackNavigator();
const MyApp = () => {
  return (
    <ProductProvider>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="DreamLogin" component={DreamLogin} />
      <Stack.Screen name="Home" component={Setting}/>
        <Stack.Screen name="ProductDetail" component={ProductDetail} options={{headerShown:true}}/>
        <Stack.Screen name='Cart'  component={CartPage}/>
        <Stack.Screen name='Search' component={SearchPage} options={{headerShown:true}}/>
        
        {/* <Stack.Screen name='Phoneauth' component={Phoneauth}/> */}
        {/* <Stack.Screen name="Productlogin" component={Productlogin} />
        <Stack.Screen name="signup" component={Signup} />
        <Stack.Screen name="Productapi" component={Productapi} />
        <Stack.Screen name="Details" component={Details} options={{ headerShown: true }} /> */}

        {/* <Stack.Screen name="post" component={Postcodeapi}/>
         <Stack.Screen name="loginapi" component={Loginapi}/>   */}
        {/* <Stack.Screen name="details"  component={detailapi}/> */}
        {/* <Stack.Screen name="homepage" component={homeapi}/>
        {/* <Stack.Screen name="Login"component={Login}/> */}
        {/* <Stack.Screen name="Home" component={Setting}/> */}
        {/* <Stack.Screen name="Mynavigation" component={Mynavigation} />
      <Stack.Screen name="mydetail" component={Setting}/> */}


        {/* <Stack.Screen name="Setting" component={Home}/> */}
      </Stack.Navigator>
    </NavigationContainer>
     </ProductProvider>
  );
};
export default MyApp;