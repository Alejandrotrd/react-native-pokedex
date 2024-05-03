import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, Button } from 'react-native'
import { getPokemonDetailApi } from '../api/pokemonApi'
import Header from '../components/pokemon/Header'
import Type from '../components/pokemon/Type';
import Stats from '../components/pokemon/Stats';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { head } from 'lodash';

export default function PokemonScreen(props) {
    const { navigation, route: { params } } = props
    const id = params.id

    const [pokemon, setPokemon] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => null,
            headerLeft: () => <Icon name='arrow-left' color="#fff" size={20} style={{marginLeft:20}} onPress={()=>navigation.goBack()}></Icon>
        })
    }, [navigation]); //cada que params se actualice se volvera a ejecutar el useeffect

    useEffect(() => {
        (async () => {
            await getPokemon();
        })();
    }, [params]); //cada que params se actualice se volvera a ejecutar el useeffect

    const getPokemon = async () => {
        try {
            const response = await getPokemonDetailApi(id)
            setIsLoading(true)
            setPokemon(response)
            setIsLoading(false)

        } catch (error) {
            navigation.goBack()//regresa de donde a venido
            console.log(error)
        }
    }

    if (!pokemon) return null

    return (
        <ScrollView>
            <Header 
                name={pokemon.name} 
                order={pokemon.order} 
                image={pokemon.sprites.other['official-artwork'].front_default}
                type={pokemon.types[0].type.name}
            >
            </Header>
            <Type 
                types={pokemon.types}
            >    
            </Type>
            <Stats
                stats={pokemon.stats}
            >
            </Stats>
        </ScrollView>
    )
}