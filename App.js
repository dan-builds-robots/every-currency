import { setStatusBarStyle, StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, FlatList, ScrollView, Keyboard, TouchableWithoutFeedback } from 'react-native';
import CurrencyBox from './CurrencyBox.js'
import currencies from './currencies.js'

export default function App() {

  const [cost, setCost] = useState(0)

  const [conversion, setConversion] = useState(null)

  const [changingChosen, setChangingChosen] = useState(false)

  const [chosenIndex, setChosenIndex] = useState(0)


  // 'fa125902ebf9a127eca7'
  // const API_KEY = '118749fc0f5accd347f7'


  // exchangeratesapi.io
  const ACCESS_KEY = '58ae6655d2139826b3d68efca956a7e6'

  let url = 'http://api.exchangeratesapi.io/v1/latest?access_key=' + ACCESS_KEY

  useEffect(() => {

    fetchConversion();

    async function fetchConversion() {
      
      const response = await fetch(url);

      const conversion = await response.json();
      
      console.log('helloooo')
      console.log(conversion)

      setConversion(conversion)
  
    }

  }, [setConversion]);

  const chooseCurrency = (index) => {
    // alert('asdf')
    if (changingChosen) {
      setChosenIndex(index)
      setChangingChosen(false)
    }
  }

  var currenciesSorted = currencies.sort(SortCurrencies);

  function SortCurrencies(a, b) {
    if (a.starred && !b.starred) {return -1;}
    if (!a.starred && b.starred) {return 1;}
    if (a.abbr < b.abbr) {return -1;}
    if (a.abbr > b.abbr) {return 1;}
    return 0;

  }

  return (
    
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={styles.container}>
      
      <View style={styles.container}>

        <View style={{margin: 20}}/>

        <View style={{flexDirection: 'row', margin: 20, marginBottom: 0}}>

          <TouchableOpacity 
            
            style={{margin: 0}}
          
            onPress={() => setChangingChosen(true)}

          >

            <Image
                source={{uri: currencies[chosenIndex].flagUri}}
                style={{width:50, height: 50, margin: 0, padding: 0}}
              />

          </TouchableOpacity>

          <View style={{marginLeft: 10}} />
          
          <TextInput
            style={styles.textInput}
            keyboardType="numeric"
            onChangeText={cost => setCost(cost)}
          />
          
        </View>

        <View style={{marginLeft: 20}}>
          { changingChosen ? <Text style={{fontSize: 12, color: 'gray'}}>Select a currency</Text> : null}
        </View>


      <View style={{margin: 15}}/>


      <ScrollView
        bounces = {false}
        // alwaysBounceVertical={false}
        contentContainerStyle={{flexDirection: 'row', flexWrap: "wrap",
        alignItems: 'center', justifyContent: 'center'}}
        style={{marginBottom: 15}}
      >

        { conversion ?  
            currenciesSorted.map (({abbr, flag, flagUri, symbol}, index) =>
              <CurrencyBox    
                currencyAbbr = {abbr}
                flag = {flag}
                flagUri= {flagUri}
                symbol = {symbol}
                
                pressFunction = {() => chooseCurrency(index)}
                // pressFunction = {setChosenIndex}

                conversion = {(parseFloat(JSON.stringify(conversion.rates[abbr]) / parseFloat(JSON.stringify(conversion.rates[currencies[chosenIndex].abbr]))) * cost).toFixed(2)}
              />
            )
          : null 
        }
      </ScrollView>

      </View>

    </TouchableWithoutFeedback>
    
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  textInput: {
    height: 33,
    backgroundColor: '#ededed',
    padding: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    flex: 1,
    borderRadius: 5
  }
});
