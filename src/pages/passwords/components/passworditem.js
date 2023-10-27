import React from 'react'
import {View, Text, StyleSheet, Pressable } from 'react-native'

export function PasswordItem({data, removePassword}){
    return(
        <Pressable onLongPress={removePassword} style={Styles.container}>
            <Text style={Styles.text}>{data}</Text>
        </Pressable>
    )
    
}
const Styles = StyleSheet.create({
    container:{
        backgroundColor: "#0e0e0e",
        padding: 14,
        width: "100%",
        marginBottom: 14,
        borderRadius:8,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-between'
    },
    text:{
        color: "#FFF"
    }
})