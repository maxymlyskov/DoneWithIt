import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'

import colors from '../config/colors';

function NewListingButton({onPress}) {
    return (
        <TouchableOpacity onPress={onPress}>
        <View style={styles.container}>
            <MaterialCommunityIcons size={40} name='plus-circle' color={colors.white}/>
        </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.primary,
        height: 80,
        width: 80,
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 25,
        borderWidth: 10,
        borderColor: colors.white
    }
})

export default NewListingButton;