import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import useAuth from '../auth/useAuth';
import Icon from '../components/Icon';

import ListItem from '../components/lists/ListItem';
import ListItemSeparator from '../components/lists/ListItemSeparator';
import Screen from '../components/Screen'
import colors from '../config/colors';


const menuItems=[
    {
        title: 'My Listings',
        icon:{
            name: 'format-list-bulleted',
            backgorundColor: colors.primary
        }},
    {   title: 'My Messages',
    icon:{
            name: 'email',
            backgorundColor: colors.secondary
        },
        targetScreen: 'Messages'
    }
]


function AccountScreen({navigation}) {

    const {user, logOut} = useAuth()
    

    return (
        <Screen style={styles.screen}>
            <View style={styles.conatiner}>
            <ListItem title={user.name} subTitle={user.email} image={require('../assets/mosh.jpg')} />
            </View>
            <View style={styles.conatiner}>
                <FlatList
                data={menuItems}
                keyExtractor={menuItem => menuItem.title}
                ItemSeparatorComponent={ListItemSeparator}
                renderItem={({item})=>(
                    <ListItem 
                    title={item.title}
                    IconComponent={<Icon
                        name={item.icon.name}
                        backgroundColor={item.icon.backgorundColor} />}
                    onPress={() => navigation.navigate(item.targetScreen)}
                    />
                )}
                />
            </View>
            <ListItem
            title='Log out'
            IconComponent={<Icon
                name='logout'
                backgroundColor='#ffe66d' />}
            onPress={()=> logOut()} />

        </Screen>
    );
}
const styles = StyleSheet.create({
    screen:{
        backgroundColor: colors.light
    },
    conatiner: {
        marginVertical: 20
    }
})

export default AccountScreen;