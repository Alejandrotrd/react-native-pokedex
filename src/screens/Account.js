import React from 'react'; 
import { View,Text } from 'react-native' 

export default function Account() {

    const auth = null;

    return (
       <View>
            {
                auth ? <Text>Panel de usuario</Text> : <Text>Formulario de login</Text>
            }
       </View>
    )
}