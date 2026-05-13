import { StyleSheet, Text, View } from 'react-native'
import {Link} from 'expo-router'
import React from 'react'
import { Colors } from '../constants/Colors'


const Contact = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Page</Text>

      <Link href="/" style={styles.link}>Home</Link>
    </View>
  )
}

export default Contact

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    title: {
        fontWeight: 'bold',
        fontSize: 18
    },

    card: {
        backgroundColor: '#eee',
        padding: 20,
        borderRadius: 5,
        boxShadow: "4px 4px rgba(0,0,0,0.1)"

    },

    link: {
        marginVertical: 10,
        borderBottomWidth: 1
    }
    
})