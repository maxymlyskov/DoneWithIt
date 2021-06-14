import React, { useState, useEffect } from 'react';
import ImageInput from './app/components/ImageInput';
import ImageInputList from './app/components/ImageInputList';
import ListItem from './app/components/lists/ListItem';
import AccountScreen from './app/screens/AccountScreen';

import ListingsEditScreen from './app/screens/LisitngsEditScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import {NavigationContainer,DefaultTheme} from '@react-navigation/native';
import AuthNavigator from './app/navigation/AuthNavigation';
import navigationTheme from './app/navigation/navigationTheme';
import AppNavigator from './app/navigation/AppNavigator';
import colors from './app/config/colors'
import OfflineNotice from './app/components/OfflineNotice'
import AuthContext from './app/auth/context';
import authStorage from './app/auth/storage';
import AppLoading from 'expo-app-loading';
import {navigationRef} from './app/navigation/rootNavigation'




const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    background: colors.white,
  },
};
export default function App() {

  const [user, setUser] = useState()
  const [isReady,setIsReady] = useState(false)

  const restoreToken = async()=>{
    const user = await authStorage.getUser();
    if (user) setUser(user)
  }
  if(!isReady)
    return <AppLoading startAsync={restoreToken} onFinish={()=> setIsReady(true)} onError={console.warn}/>
  
  return (
  <AuthContext.Provider value={{user, setUser}}>
    <OfflineNotice/>
    <NavigationContainer ref={navigationRef} theme={MyTheme}>
      {user?<AppNavigator/> : <AuthNavigator/>}
    </NavigationContainer>
    </AuthContext.Provider>
    
);
}


