import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AccountScreen from "../screens/AccountScreen";
import MessagesScreen from '../screens/MessagesScreen'


const Stack = createStackNavigator();

const FeedNavigator = () => (
    <Stack.Navigator mode='card' screenOptions={{ gestureEnabled: true}} >
      <Stack.Screen name='Account' component={AccountScreen} options={{headerShown:false}}/>
      <Stack.Screen name='Messages' component={MessagesScreen}/>
    </Stack.Navigator>
  );
  
  export default FeedNavigator;