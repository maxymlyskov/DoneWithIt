import React from 'react';
import { StyleSheet, View,Text, Platform, KeyboardAvoidingView,  ScrollView  } from 'react-native';
import ListItem from '../components/lists/ListItem';
import colors from '../config/colors'
import {Image} from 'react-native-expo-image-cache'
import ContactSellerForm from '../components/forms/ContactSellerForm'



function ListingDetailsScreen({ route }) {
    const listing = route.params
    const subListings = () =>{
        if(listing.id !== 1) return listing.id + ' Listings'
        return listing.id + ' Listing'
    }
    

    return (
        <ScrollView>
        <KeyboardAvoidingView 
           behavior='position'
            keyboardVerticalOffset={-150} 
            >
        
            <Image style={styles.image} preview={{uri: listing.images[0].thumbnailUrl}} tint='light' uri={listing.images[0].url}/>
            <View style={styles.detailsContainer}>
            <Text style={styles.title}>{listing.title}</Text>
            <Text style={styles.price}>${listing.price}</Text>
            <View style={styles.userContainer}>
            <ListItem
                image={require('../assets/mosh.jpg')}
                title = {'Seller of '+listing.title}
                subTitle = {subListings()}
                  
            />
            </View>
            <ContactSellerForm listing={listing}/>
            </View>
            
                
        </KeyboardAvoidingView> 
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    
    image: {
        width : '100%',
        height: 200
    }, 
    detailsContainer:{
        padding: 20
    },
    userContainer:{
        marginVertical: 25
    },
    title:{
        marginBottom: 7, 
        fontSize: 24
    }, 
    price:{
        color: colors.secondary,
        fontWeight: 'bold',
        fontSize: 20,
    }
})
export default ListingDetailsScreen;