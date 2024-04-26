import React from 'react'
import {StyleSheet,FlatList,Text} from 'react-native'
import PokemonCard from './PokemomCard';
import PokemonCardTest from './PokemonCardTest';

export default function PokemonList(props){
    const { pokemons } = props;
    return (
        <FlatList
            data={pokemons}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            keyExtractor={(pokemon) => String(pokemon.id)}
            renderItem={ ({item}) => <PokemonCard pokemon={item}></PokemonCard>}
            contentContainerStyle={styles.flatListContentContainer}
        >
            
        </FlatList>
    )
}
const styles = StyleSheet.create({
    flatListContentContainer:{
        paddingHorizontal:5
    }
})