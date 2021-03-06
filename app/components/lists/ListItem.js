import React from 'react';
import { View, StyleSheet,  Image, Text, TouchableHighlight } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'

import Swipeable from 'react-native-gesture-handler/Swipeable';
import colors from '../../config/colors';
import AppText from '../AppText';

function ListItem({image,title, subTitle, onPress, renderRightActions, IconComponent}) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight onPress={onPress} underlayColor={colors.light}>
        <View style={styles.container}>
            {IconComponent}
            {image && <Image style={styles.image} source={image}/>}
            <View style ={styles.textContainer}>
                <AppText style={styles.title} numberOfLines={1}>{title}</AppText>
                {subTitle && <AppText style={styles.subTitle} numberOfLines={1}>{subTitle}</AppText>}
            </View>
            <MaterialCommunityIcons color={colors.medium} name='chevron-right' size={25}/>
        </View>
        </TouchableHighlight>
        </Swipeable>

    );
}

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        flexDirection: 'row',
        padding: 15,
        backgroundColor: colors.white
    },
    textContainer:{
        flex: 1,
        marginLeft: 20,
        justifyContent: 'center'
    },
    image: {
        height: 70,
        width: 70,
        borderRadius: 35
    },
    title:{
        fontSize: 20,
    },
    subTitle:{
        fontSize: 15,
        color: colors.whiteGrey
    }
})

export default ListItem;