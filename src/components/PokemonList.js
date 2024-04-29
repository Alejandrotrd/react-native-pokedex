import React from 'react'
import {StyleSheet,FlatList,ActivityIndicator,Platform} from 'react-native'
import PokemonCard from './PokemomCard';
import PokemonCardTest from './PokemonCardTest';

export default function PokemonList(props){
    const { pokemons , loadPokemons, isNext, isLoading } = props;

    const loadMore = () => {
        loadPokemons();
        console.log("Cargando mas pokemon")
    }
//VALIDACIONES DE V IF
    return (
        <FlatList
            data={pokemons}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            keyExtractor={(pokemon) => String(pokemon.id)}
            renderItem={ ({item}) => <PokemonCard pokemon={item}></PokemonCard>}
            contentContainerStyle={styles.flatListContentContainer}
            onEndReached={!isLoading && isNext && loadMore}
            onEndReachedThreshold={0.1}
            ListFooterComponent={isLoading && isNext && (<ActivityIndicator size='large' styles={styles.spinner} color="#AEAEAE"></ActivityIndicator>)}
        >
            
        </FlatList>
    )
}
const styles = StyleSheet.create({
    flatListContentContainer:{
        paddingHorizontal:5,
        marginTop: Platform.OS === 'android' ? 30 : 0
    },
    spinner:{
        marginTop:20,
        marginBottom:  Platform.OS === 'android' ? 140 : 120
    }
})