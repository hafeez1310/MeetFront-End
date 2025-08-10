/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, useColorScheme, View, Text } from 'react-native';
import LoginPage from './screens/Login'
import RegisterPage from '././screens/Login&Register/smeRegister.jsx'
import AdminRegisterPage from '././screens/Login&Register/AdminRegistration.jsx'
import initialHome from './screens/home.jsx'
import { create } from 'react-native/types_generated/Libraries/ReactNative/ReactFabricPublicInstance/ReactNativeAttributePayload';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import HomeScreen from './screens/home';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const Stack = createNativeStackNavigator()
  return (
   <NavigationContainer>
    <Stack.Navigator initialRouteName='home'  screenOptions={{
      headerShown:false
    }}>
      <Stack.Screen name='home' component={initialHome}/>
      {/* <Stack.Screen name='Login' component={LoginPage}/> */}
      <Stack.Screen name='smeRegister' component={RegisterPage}/>
      <Stack.Screen name='adminRegister' component={AdminRegisterPage}/>
    </Stack.Navigator>

   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
