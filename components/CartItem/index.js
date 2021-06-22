import React from 'react'
import { View, Text, ImageBackground} from 'react-native'
import StyledButton from '../StyledButton'
import {styles} from './styles'

export default function CartItem({car}) {
    return (
      <View style={styles.carContainer}>
      <ImageBackground source={car.image} style={styles.image}/>
      <View style={styles.titles}>
        <Text style={styles.title}>{car.name}</Text>
        <Text style={styles.subtitle}>
        {car.tagline}&nbsp; 
        <Text style={styles.subtitleCTA}>{car.taglineCTA}</Text>
        </Text>
      </View>
        <View style={styles.buttonsContainer}>
          <StyledButton type="primary" content={"Custom Order"} onPress={() =>{console.log("custom order")}}/>
        <StyledButton type="secondary" content={"Existing Inventory"} onPress={() =>{console.log("custom order")}}/>
        </View>

      </View>
    )
}

