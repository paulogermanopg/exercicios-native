import React from 'react'
import { Text } from 'react-native'
import Padrao from '../estilo/Padrao'

export default props => 
    <Text style={Padrao.ex}>Com Arrow: {props.texto}</Text>
        
        


// export default function(props) {
// return <Text>{props.texto}</Text>
// }