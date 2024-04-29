import React , {useEffect,useState} from 'react'; 
import { SafeAreaView,Text, Button } from 'react-native' 
import { getPokemonDetailApi } from '../api/pokemonApi'

export default function PokemonScreen(props) {
    const { navigation , route: { params } } = props
    const id = params.id

    const [pokemon,setPokemon] = useState(null)
    const [isLoading,setIsLoading] = useState(false)

    useEffect ( () => {
        (async () => {
            await getPokemon();
        })();
    }, [params] ); //cada que params se actualice se volvera a ejecutar el useeffect

    const getPokemon = async() => {
        try{
            const response  = await getPokemonDetailApi(id)
            setIsLoading(true)
            setPokemon(response)
            setIsLoading(false)

        }catch(error){
            navigation.goBack()//regresa de donde a venido
            console.log(error)
        }
    }

    if(!pokemon) return null

    return (
       <SafeAreaView>
            <Text>{pokemon.name}</Text>
       </SafeAreaView>
    )
}