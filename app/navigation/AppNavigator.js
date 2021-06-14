import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ListingsEditScreen from '../screens/LisitngsEditScreen';
import FeedNavigator from './FeedNavigator';
import AccountNavigator from './AccountNavigator'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import NewListingButton from './NewListingButton';
import routes from './routes';
import useNotifications from '../hooks/useNotifications';
import navigation from '../navigation/rootNavigation'



const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  useNotifications()

    return (
        <Tab.Navigator>
          <Tab.Screen 
            name="Feed" 
            component={FeedNavigator} 
            options={{tabBarIcon:({color, size})=>(<MaterialCommunityIcons 
              size={size} 
              color={color} 
              name ='home'/>)}} />
          <Tab.Screen 
            name="ListingsEdit" 
            component={ListingsEditScreen}
            options={({navigation})=>({tabBarButton:()=><NewListingButton onPress={()=>navigation.navigate(routes.LISTINGS_EDIT)}/>,
            tabBarIcon:({color, size})=>(<MaterialCommunityIcons 
              size={size} 
              color={color}   
              name ='plus-circle'/>)})} />
          <Tab.Screen 
            name="Account" 
            component={AccountNavigator}
            options={{tabBarIcon:({color, size})=>(<MaterialCommunityIcons 
              size={size} 
              color={color} 
              name ='account'/>)}} />
        </Tab.Navigator>
    );
  }
  