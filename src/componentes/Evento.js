import React, { Component } from 'react'
import { View, Text, TextInput } from 'react-native'
import Padrão from '../estilo/Padrao'

export default class Evento extends Component {

    state = {
        texto: ''
    }

    alterarTexto = texto => {
        this.setState({ texto })
    }

    render() {
        return(
            <View>
                <Text style={Padrão.fonte40}>{this.state.texto}</Text>
                <TextInput value={this.state.texto} style={Padrão.input}
                    onChangeText={this.alterarTexto} />
            </View>
        )
    }

}