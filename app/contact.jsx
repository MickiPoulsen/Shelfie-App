import { StyleSheet} from 'react-native'
import {Link} from 'expo-router'
import { Colors } from '../constants/Colors'

// Themed components import
import ThemedView from '../components/ThemedView'
import Spacer from '../components/Spacer'
import ThemedText from '../components/ThemedTet'



const Contact = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>Contact Page</ThemedText>

      <Link href="/" style={styles.link}>
      <ThemedText>Home</ThemedText>
      </Link>
    </ThemedView>
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