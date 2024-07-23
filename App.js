import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import Cart from './Cart';
import Details_Product from './Details_Product';
import Favorite from './Favorite';
import History from './History';
import Home from './Home';
import Login from './Login';
import MainActivity from './MainActivity';
import Payment from './Payment';
import Setting from './Setting';
import SignUp from './SignUp';

const Stack = createStackNavigator();

const WelcomeScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      // Chuyển sang màn hình Login sau 3 giây
      navigation.replace('Login');
    }, 3000);

    // Hủy bỏ hàm setTimeout nếu component unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('./assets/logo1.jpg')} />
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
        <Stack.Screen name="MainActivity" component={MainActivity} options={{ headerShown: false }}/>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
        <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }}/>
        <Stack.Screen name="Details_Product" component={Details_Product} options={{ headerShown: false }}/>
        <Stack.Screen name="Cart" component={Cart} options={{ headerShown: false }}/>
        <Stack.Screen name="Payment" component={Payment} options={{ headerShown: false }}/>
        <Stack.Screen name="Favorite" component={Favorite} options={{ headerShown: false }}/>
        <Stack.Screen name="Setting" component={Setting} options={{ headerShown: false }}/>
        <Stack.Screen name="History" component={History} options={{ headerShown: false }}/>
        <Stack.Screen name="demo" component={demo} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },

  logo:{
    width: 300,
    height: 240,
  }
});

export default App;
