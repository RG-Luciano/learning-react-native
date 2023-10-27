import { useState, useEffect} from 'react'
import{View, Text, StyleSheet, FlatList} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useIsFocused } from '@react-navigation/native'
import useStorage from '../../hooks/useStorage'
import {PasswordItem} from './components/passworditem'

export function Passwords(){
    const [lisPasswords, setListPasswords] = useState([])
    const focused = useIsFocused()
    const {getItem, removeItem} = useStorage()

    useEffect(()=> {
        async function loadPasswords(){
            const passwords = await getItem("@pass")
            setListPasswords(passwords)
        }

        loadPasswords()
    }, [focused])

    async function handleDeletePassword(item){
        const passwords = await removeItem("@pass", item)
        setListPasswords(passwords)
    }

    return(
        <SafeAreaView style={{flex:1,}}>
            <View style={style.header}>
                <View style={style.teste}>
                    <Text style={style.title}>Minhas senhas</Text>
                    <Text style={style.title}>Data de criação</Text>
                </View>
            </View>

            <View  style={style.content}>
                <FlatList 
                style = {{flex:1, paddingTop: 14,}}
                data={lisPasswords}
                keyExtractor={(item)=> String(item)}
                renderItem={({item})=> <PasswordItem data={item} removePassword={() => handleDeletePassword(item, alert("Senha apagada"))}/>}
                />
            </View>
        </SafeAreaView>
    )
}
const style = StyleSheet.create({
    header:{
        backgroundColor: "#392de9",
        paddingTop: 30,
        paddingBottom: 14,
        paddingLeft: 14,
        paddingRight: 14
    },
    teste:{
        flexDirection:"row",
        justifyContent:"space-between"
    },
    title:{
        fontSize: 17,
        color: "#FFF",
        fontWeight: 'bold'
        
    },
    content:{
        flex:1,
        paddingLeft: 14,
        paddingRight: 14
    }
}) 