import React from "react";
import {StyleSheet,View,Text,Image,Button, Alert} from "react-native"

export default function PokemonCardTest(props){
  
  getCardColor = (type) => {
    let color = ''
    switch(type){
      case 'grass': color =  '#4c9141'; break
      case 'water': color =  '#16D4E7'; break
      case 'fire': color =  '#E72616'; break
      case 'bug': color =  '#A1FF90'; break
      default: color = '#4b4b4b'
    }
    return color
  }
    const {pokemon} = props
    // const [pokemons,setPokemons] = useState([]);

    return(
        <View style={[styles.card,{backgroundColor:getCardColor(pokemon.type)}]}>
            <Text>{pokemon.name} - {pokemon.type}</Text>
            <Image
                style={styles.tinyLogo}
                source={{
                uri: pokemon.image,
                }}
            />
            <Button title="atrapame!" onPress={() =>{ Alert.alert("Atrapado:)")} }></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      paddingTop: 200,
    },
    tinyLogo: {
      width: 100,
      height: 100,
      
    },
    logo: {
      width: 132,
      height: 116,
    },
    card: {
      flex:1,
      margin:5,
      padding:10,
      borderRadius: 10,
      alignContent:'space-around',
      // flexDirection: 'row',
  
    }
});