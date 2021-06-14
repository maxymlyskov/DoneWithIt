import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'

import colors from '../config/colors'

function ViewImageScreen(props) {
    
    return (<View style={styles.background}>
        
    <Image style={styles.image} source={require('../assets/chair.jpg')}/>
    <View style={styles.closeIcon}>
        <MaterialCommunityIcons name='close' color='white' size ={35}/>
    </View>
    <View style={styles.deleteIcon}>
        <MaterialCommunityIcons name='trash-can-outline' color='white' size ={35}/>
    </View>
            </View>
    
    );
}
const styles = StyleSheet.create({
    
    image:{
        resizeMode: 'contain',
        width: '100%',
        height: '100%',
        position:'absolute',
        },
    background:{ 
        flex: 1,
        backgroundColor: colors.black},
    closeIcon:{
        position: 'absolute',
        top: 20,
        left: 20
    },
    deleteIcon:{
        top :20,
        right: 20,
        position: 'absolute'
        
    }
          
        
    }

)

export default ViewImageScreen;