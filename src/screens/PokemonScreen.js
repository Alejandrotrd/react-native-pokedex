import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, Button } from 'react-native'
import { getPokemonDetailApi } from '../api/pokemonApi'
import Header from '../components/pokemon/Header'
import Type from '../components/pokemon/Type';
import { ScrollView } from 'react-native-gesture-handler';

export default function PokemonScreen(props) {
    const { navigation, route: { params } } = props
    const id = params.id

    const [pokemon, setPokemon] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

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
        </ScrollView>
    )
}