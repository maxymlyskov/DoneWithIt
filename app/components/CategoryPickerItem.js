import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import colors from '../config/colors';
import AppText from './AppText';

import Icon from './Icon'

function CategoryPickerItem({item, onPress}) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress}>
            <Icon backgroundColor={item.backgroundColor} name={item.icon} size={80}/>
            </TouchableOpacity>
            <AppText style={styles.text}>{item.label}</AppText>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 15,
        alignItems: 'center',
        width:'33%'
    },
    text:{
        textAlign:'center',
        marginTop:5,
   
    }
})

export default CategoryPickerItem;