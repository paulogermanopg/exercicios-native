import React from 'react'
import { ScrollView, View, FlatList, Text } from 'react-native'

const alunos = [
    { id: 1, nome: 'Chronos', nota: 9.5 },
    { id: 2, nome: 'Kairós', nota: 7.5 },
    { id: 3, nome: 'Sofia', nota: 10 },
    { id: 4, nome: 'Neyana', nota: 8.3 },
    { id: 5, nome: 'Connor', nota: 5.5 },
    { id: 6, nome: 'Júlia', nota: 9.7 },
    { id: 7, nome: 'Vitor', nota: 8.0 },
    { id: 8, nome: 'Merkan', nota: 9.5 },
    { id: 9, nome: 'Lisa', nota: 10 },
    { id: 10, nome: 'Chronos', nota: 9.5 },
    { id: 11, nome: 'Kairós', nota: 7.5 },
    { id: 12, nome: 'Sofia', nota: 10 },
    { id: 13, nome: 'Neyana', nota: 8.3 },
    { id: 14, nome: 'Connor', nota: 5.5 },
    { id: 15, nome: 'Júlia', nota: 9.7 },
    { id: 16, nome: 'Vitor', nota: 8.0 },
    { id: 17, nome: 'Merkan', nota: 9.5 },
    { id: 18, nome: 'Lisa', nota: 10 },
]

const itemEstilo = {
    paddingHorizontal: 15,
    height: 50,
    backgroundColor: '#DDD',
    borderWidth: 0.5,
    borderColor: '#222',

    //flex
    alignItems: 'center',
    justifyContent: 'center',
}

export const Aluno = props =>
    <View style={itemEstilo}>
        <Text>Nome: {props.nome}</Text>
        <Text style={{fontWeight: 'bold'}}>Nota: {props.nota}</Text>
    </View>

export default props => {
    const renderItem = ({item}) => {
        return <Aluno {...item} />
    }

    return (
        <ScrollView>
            <FlatList data={alunos} renderItem={renderItem}
                keyExtractor={(_, index) => index.toString()} />
        </ScrollView>
    )
}