import React from "react";
import {StyleSheet,View,Text,Image,Button, Pressable} from "react-native"
import getColorByPokemonType from "../utils/getColorByPokeminType";
import { useNavigation } from "@react-navigation/native"
import { capitalize } from "lodash"

export default function PokemonCard(props){
  
    const {pokemon} = props
    const navigation = useNavigation()

    const pokemonColor = getColorByPokemonType(pokemon.type)
    const bgStyles = { backgroundColor: pokemonColor,...styles.bgStyles}

    const goToPokemon = () => {
      console.log("hellow "+pokemon.name+" ")
      navigation.navigate("Pokemon", {id:pokemon.id})
    }

    return(
      <Pressable style={styles.backgroundCard} onPress={() => goToPokemon()}>
        <View style={styles.card}>
          <View style={styles.spacing}>
            <View style={bgStyles}>
              <Text style={styles.order}> #{`${pokemon.order}`.padStart(3,0)}</Text>
              <Text style={styles.name}>{capitalize(pokemon.name)}</Text>
              <Image style={styles.image} source={{uri:pokemon.image}}></Image>
            </View>
          </View>
        </View>
      </Pressable>
    )
}

const styles = StyleSheet.create({
    card: {
      flex:1,
      height:130
    },
    spacing:{
      flex:1,
      padding:5
    },
    bgStyles:{
      flex:1,
      borderRadius:15,
      padding:10
    },
    order:{
      position:"absolute",
      right:10,
      top:10,
      color:'white',
      fontSize:11
    },  
    image:{
      position:"absolute",
      bottom:2,
      right:2,
      width:90,
      height:90
    },
    backgroundCard:{
      flex:1,
    },
    name:{
      color:"white",
      fontWeight:"bold",
      fontSize:15,
      paddingTop:10
    }
});