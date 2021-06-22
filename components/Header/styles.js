import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    container:{
        position: 'absolute',
        top:50,
        zIndex: 1,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20
    },
    logo:{
        width: 100,
        height: 20,
        resizeMode: 'contain'
    },
    menu:{
        width: 25,
        height: 25
    }
})