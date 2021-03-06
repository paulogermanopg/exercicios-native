import React from 'react'
import { createDrawerNavigator } from 'react-navigation'

import Simples from './componentes/Simples'
import ParImpar from './componentes/ParImpar'
import { Inverter, MegaSena } from './componentes/Multi'
import Contador from './componentes/Contador'
import Plataformas from './componentes/Plataformas'
import ValidarProps from './componentes/ValidarProps'
import Evento from './componentes/Evento'
import { Avo } from './componentes/ComunicacaoDireta'
import { TextoSincronizado } from './componentes/ComunicacaoIndireta'
import ListaFlex from './componentes/ListaFlex'
import Flex from './componentes/Flex'

export default createDrawerNavigator({
    Flex: {
        screen: () => <Flex />
    },
    ListaFlex: {
        screen: ListaFlex,
        navigationOptions: { title: 'Lista Flex' }
    },
    TextoSincronizado: {
        screen: () => <TextoSincronizado />,
        navigationOptions: { title: 'Texto Sincronizado Indireto' }
    },
    Avo: {
        screen: () => <Avo nome='Anakin' sobrenome='SkyWalker' />
    },
    Evento: {
        screen: () => <Evento />
    },
    ValidarProps: {
        screen: () => <ValidarProps label='Viajar para o tempo: 'ano={20}/>,
        navigationOptions: { title: 'Validar Props' }
    },
    Plataformas: {
        screen: () => <Plataformas />
    },
    Contador: {
        screen: () => <Contador numeroInicial={100}/>
    },
    MegaSena: {
        screen: () => <MegaSena numeros={6} />,
        navigationOptions: { title: 'Mega Sena' }
    },
    Inverter: {
        screen: () => <Inverter texto='Ojuara Subi no onibus' />
    },
    ParImpar: {
        screen: () => <ParImpar numero={30} />,
        navigationOptions: { title: 'Par ou Impar'}
    },
    Simples: {
        screen: () => <Simples texto='APP em React-Native' />
    }
}, { drawerWidth: 300 })