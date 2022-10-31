import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, Header } from '@react-navigation/stack';
import DetailPage from './src/screens/detailPage/DetailPage';
import { Text, View } from 'react-native';
import ReduxBasic from './src/redux/ReduxBasic';
import ComA from './src/hooks/useContext/ComA';
import Reducer from './src/hooks/useReducer/Reducer';
import HomeScreen from './src/screens/homeScreen/home';
import { jsonConstant } from './src/constants/iTuneStore/json';
import HeaderComponent from './src/ReduxApp/container/Header';
const Stack = createStackNavigator();

const App = () => {
  return (
    <View>
      <HeaderComponent />
    </View>
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen options={{headerShown: false}} name={jsonConstant.Home} component={HomeScreen} />
    //     <Stack.Screen  options={{headerStyle: {backgroundColor: jsonConstant.detailPageHeaderColor}}} name={jsonConstant.detailPage} component={DetailPage} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    // <NavigationContainer>
    //  <Drawer.Navigator>
    //   <Drawer.Screen name="Home" component={HomeScreen} />
    //   <Drawer.Screen name="about" component={AboutScreen} />
    // </Drawer.Navigator>
    // </NavigationContainer>
    // <NavigationContainer>
    //  <Tab.Navigator screenOptions={{headerStyle: {backgroundColor: 'grey'}}}>
    //      <Tab.Screen name="Home" component={HomeScreen} options={{tabBarIcon:() => <MaterialCommunityIcons name="home" />, tabBarBadge: 10
    //      }}/>
    //      <Tab.Screen name="About" component={AboutScreen} />
    //      <Tab.Screen name='Contact' component={ContactScreen}/>
    // </Tab.Navigator>
    // </NavigationContainer>
  );
};
export default App;
