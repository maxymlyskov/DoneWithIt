import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import colors from '../config/colors';
import AppButton from '../components/AppButton'
import routes from '../navigation/routes';


function WelcomeScreen({navigation}) {
    const loadScene = ()=>{
        navigation.navigate('ViewImageScreen')
    }
    return (     
        <ImageBackground blurRadius={10} style={styles.background} source={require('../assets/background.jpg')}>
            <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require('../assets/logo-red.png')}></Image>
            <Text style={styles.tagline}>Sell What You Don't Need</Text>
            </View>
            <View style={styles.buttonContainer} onPress={loadScene}>
            <AppButton title='Login' onPress = {()=> navigation.navigate(routes.LOGIN)}/>
            <AppButton title='Register' color='secondary' onPress={()=> navigation.navigate(routes.REGISTER)}/>
            </View>
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    logoContainer:{
        position: 'absolute',
       top: 70,
       alignItems:'center'
    },
   logo:{
       width:100,
       height: 100,
       
   }, 
   tagline:{
       fontSize: 25,
       fontWeight:'bold',
       marginVertical: 20
   },

    buttonContainer:{
        padding: 20,
        width: '100%'
    }
})

export default WelcomeScreen;