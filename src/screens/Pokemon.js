import React, {useState,useEffect} from "react";
import {SafeAreaView,Text} from "react-native"
import { getPokemonsApi,getPokemonsDetailApi } from "../api/pokemonApi";
import PokemonList from '../components/PokemonList'

export default function Pokemon(){
    const [pokemons,setPokemons] = useState([]);

    // Para gatillar la fase de Mountingmcon useEffect, debemos simplemente entregar como segundo parámetro a useEffectun arreglo de dependencias vacío [].
    useEffect ( () => {
        (async () => {
            await loadPokemon();
        })();
    }, [] );

    const loadPokemon =  async() => {
        try{
            const response  = await getPokemonsApi()
            let pokemonArray = []

            for await (let pokemon of response.results){
                const pokemonDetails = await getPokemonsDetailApi(pokemon.url)
                const object = {
                    id: pokemonDetails.id,
                    name:pokemonDetails.name,
                    type:pokemonDetails.types[0].type.name,
                    order: pokemonDetails.order,
                    image: pokemonDetails.sprites.other['official-artwork'].front_default
                }
                pokemonArray.push(object)                
            }

            setPokemons([...pokemons,...pokemonArray])

        }catch(error){
            console.log(error)
        }
    }

    return (
        <SafeAreaView>
            <PokemonList pokemons={pokemons}></PokemonList>
        </SafeAreaView>
    )
}