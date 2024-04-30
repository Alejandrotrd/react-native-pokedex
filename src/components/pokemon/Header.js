import React from "react";
import { View, SafeAreaView, StyleSheet, Image, Text } from "react-native"
import { capitalize } from "lodash";
import getColorByPokemonType from "../../utils/getColorByPokeminType";

export default function Header(props) {

    const { name, type, image, order } = props
    const color = getColorByPokemonType(type)
    
    const bgStyle = [{ backgroundColor:color, ...styles.bg}]

    return (
        <>
            <View style={bgStyle}></View>
            <SafeAreaView style={styles.content}>
                <View style={styles.header}>
                    <Text style={styles.name}>{capitalize(name)}</Text>
                    <Text style={styles.order}>#{`${order}`.padStart(3,0)}</Text>
                </View>
                <View style={styles.contentImg}>
                    <Image source={{uri:image}} style={styles.image}/>
                </View>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    bg:{
        width:"100%",
        height:400,
        position:"absolute",
        borderBottomEndRadius:300,
        borderBottomLeftRadius:300,
        transform: [{scaleX:2}]
    }, 
    content:{
        marginHorizontal:20,
        marginTop: 30
    },  
    header:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        paddingTop:40
    }, 
    name:{
        color:"#fff",
        fontWeight:"bold",
        fontSize:27
    },
    order:{
        color:"#fff",
        fontWeight:"bold",
        fontSize:27
    },
    contentImg:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        top: 30
    },  
    image:{
        width:250,
        height:250,
        resizeMode: "contain"
    },
})