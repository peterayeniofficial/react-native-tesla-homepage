import React from 'react'
import { View, Text, Pressable } from 'react-native'
import {styles} from './styles'
export default function StyledButton({type, content, onPress}) {
    const backgroundColor = type === 'primary' ?'black' : 'white'
    const textColor = type === 'primary' ?'white' : 'black'
    return (
        <View style={styles.container}>
            <Pressable style={[styles.button, {backgroundColor: backgroundColor}]} onPress={onPress}>
                <Text style={[styles.text, {color: textColor}]}>{content}</Text>
            </Pressable>
        </View>
    )
}
