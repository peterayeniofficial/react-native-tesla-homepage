import React from 'react'
import { View, FlatList, Dimensions} from 'react-native'
import cars from './cars'
import CartItem from '../CartItem/';
import {styles} from './styles'


export default function CarsList() {
    return (
        <View style={styles.container}>
           <FlatList
               data={cars}
               renderItem={({item}) => <CartItem car={item}/>}
               showsVerticalScrollIndicator={false}
               snapToAlignment={'start'}
               decelerationRate={'fast'}
               snapToInterval={Dimensions.get('window').height}
           />
        </View>
    )
}
