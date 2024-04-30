import React from "react";
import { createStackNavigator } from "@react-navigation/stack"
import PokemonScreen from "../screens/PokemonScreen";
import PokedexScreen from "../screens/PokedexScreen";

const Stack = createStackNavigator();

export default function PokedexNavigation(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Pokedex" component={PokedexScreen} options={{title:"",headerTransparent:true}}></Stack.Screen>
            <Stack.Screen name="Pokemon" component={PokemonScreen} options={{title:"",headerTransparent:true}}></Stack.Screen>
        </Stack.Navigator>
    )
}