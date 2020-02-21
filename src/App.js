import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Simples from './componentes/Simples'

export default class App extends Component{
    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.f20}>App</Text>
                <Simples texto='Componente Simples com propriedade!'/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    f20: {
        fontSize: 50
    }
})






// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Exercícios</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
