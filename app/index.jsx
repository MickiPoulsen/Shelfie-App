import { StyleSheet, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { Colors } from '../constants/Colors'

// Themed components import
import ThemedView from '../components/ThemedView'
import ThemedLogo from '../components/ThemedLogo'
import Spacer from '../components/Spacer'
import ThemedText from '../components/ThemedTet'


const home = () => {
  return (
    <ThemedView style={styles.container}>

        <ThemedLogo style={styles.img} />
        <Spacer height={20} />

        <ThemedText style={styles.title} title={true} >
            The Number 1
        </ThemedText>

         <Spacer height={10} />
         <ThemedText> Reading List App </ThemedText>
         <Spacer />

    <Link href="/about" style={styles.link}>
    <ThemedText>About Page</ThemedText>
    </Link>
    
    <Link href="/contact" style={styles.link}> 
    <ThemedText>Contact Page</ThemedText>
    </Link>

    </ThemedView>
  )
}

export default home

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

    img: {
        height: 100,
        width: 100,
    },

     link: {
        marginVertical: 10,
        borderBottomWidth: 1
    }
    
})