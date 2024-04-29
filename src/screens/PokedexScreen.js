import React, {useState,useEffect} from "react";
import {SafeAreaView,Text} from "react-native"
import { getPokemonsApi,getPokemonsDetailApi } from "../api/pokemonApi";
import PokemonList from '../components/PokemonList'

export default function Pokedex(){
    const [pokemons,setPokemons] = useState([]);
    const [nextUrl , setNextUrl]  = useState(null);
    const [isLoading , setIsLoading]  = useState(false);

    // Para gatillar la fase de Mountingmcon useEffect, debemos simplemente entregar como segundo parámetro a useEffectun arreglo de dependencias vacío [].
    useEffect ( () => {
        (async () => {
            await loadPokemons();
        })();
    }, [] );

    const loadPokemons = async() => {
        try{
            const response  = await getPokemonsApi(nextUrl)
            setIsLoading(true)
            setNextUrl(response.next)
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
            setIsLoading(false)

        }catch(error){
            console.log(error)
        }
    }

    return (
        <SafeAreaView>
            <PokemonList pokemons={pokemons} loadPokemons={loadPokemons} isNext={nextUrl} isLoading={isLoading}></PokemonList>
        </SafeAreaView>
    )
}