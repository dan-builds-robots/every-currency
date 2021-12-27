import { setStatusBarStyle, StatusBar } from 'expo-status-bar';
import { render } from 'react-dom';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView, Keyboard, TouchableWithoutFeedback } from 'react-native';
import GetConversion from './GetConversion.js'

const ACCESS_KEY = '0e54bad669c75bf6463ca7f900374be4'

var from = "USD"
var to = "EUR"
var amount = 25

const url = 'http://api.exchangeratesapi.io/v1/latest?access_key=' + ACCESS_KEY + "&from=" + from + "&to=" + to + "&amount=" + amount;

// 'fa125902ebf9a127eca7'
const API_KEY = '118749fc0f5accd347f7'

let ready = false



// let conversion = fetchConversion()

const CurrencyBox = ({ currencyAbbr, flag, flagUri, conversion }) => (

    
    <View style={{alignItems: 'center', margin: 10}}>

        <Text style={{fontWeight: 'bold'}}>{currencyAbbr}</Text>

        {/* <Text>${fetchConversion()}</Text> */}
        {/* <Text>${(parseFloat(JSON.stringify(fetchConversion())) * cost).toFixed(2)}</Text> */}
{/* 
        {
        
        ready && 
        <Text>{JSON.stringify(fetchConversion())}</Text>

        } */}
        
        <Text>${conversion}</Text>
        

        <Image

            source={{uri: flagUri}}

            style={{width:70, height: 70, margin: 0, padding: 0}}

        />

    </View>
    
)

export default CurrencyBox;