import { setStatusBarStyle, StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, FlatList, ScrollView, Keyboard, TouchableWithoutFeedback } from 'react-native';
import CurrencyBox from './CurrencyBox.js'

export default function App() {

  const [cost, setCost] = useState(0)

  const [conversion, setConversion] = useState(null)


  // 'fa125902ebf9a127eca7'
  // const API_KEY = '118749fc0f5accd347f7'


  // exchangeratesapi.io
  const ACCESS_KEY = '58ae6655d2139826b3d68efca956a7e6'

  let url = 'http://api.exchangeratesapi.io/v1/latest?access_key=' + ACCESS_KEY
  

  const currencies = [
    {
      abbr: 'USD', 
      flag: 'USA', 
      flagUri: 'https://cdn-icons-png.flaticon.com/512/206/206626.png'
    },

    {
      abbr: 'JPY',
      flag: "Japan",
      flagUri: 'https://cdn-icons-png.flaticon.com/512/330/330622.png'
    },

    {
      abbr: 'GBP',
      country: 'UK',
      currency: 'Pound sterling',
      flagUri: 'https://cdn-icons-png.flaticon.com/512/206/206592.png'
    },

    {
      abbr: 'AUD',
      flag: "Australia",
      flagUri: 'https://cdn-icons-png.flaticon.com/512/206/206618.png'

    },

    {
      abbr: 'CHF',
      flag: "Switzerland",
      flagUri: 'https://cdn-icons-png.flaticon.com/512/206/206647.png'
    },

    {
      abbr: 'TRY',
      flag: "Turkey",
      flagUri: 'https://cdn-icons-png.flaticon.com/512/206/206634.png'
    },

    {
      abbr: 'CAD',
      flag: "Canada",
      flagUri: 'https://cdn-icons-png.flaticon.com/512/206/206609.png'
    },

    {
      abbr: 'CNY',
      flag: "China",
      flagUri: 'https://cdn-icons-png.flaticon.com/512/206/206818.png'
    },

    {
      abbr: 'INR',
      flag: "India",
      flagUri: 'https://cdn-icons-png.flaticon.com/512/206/206606.png'
    },

    {
      abbr: 'NGN',
      flag: "Nigeria",
      flagUri: 'https://cdn-icons-png.flaticon.com/512/940/940286.png'
    },

    {
      abbr: 'MXN',
      country: "Mexico",
      currency: 'Mexican peso',
      flagUri: 'https://cdn-icons-png.flaticon.com/512/206/206600.png'
    },

    {
      abbr: 'ZAR',
      country: "South Africa",
      currency: 'South African rand',
      flagUri: 'https://cdn-icons-png.flaticon.com/512/206/206652.png'
    },

    {
      abbr: 'KRW',
      flag: "South Korea",
      flagUri: 'https://cdn-icons-png.flaticon.com/512/206/206758.png'
    },

    {
      abbr: 'RUB',
      flag: "Russia",
      flagUri: 'https://cdn-icons-png.flaticon.com/512/206/206604.png'
    },

    {
      abbr: 'MYR',
      country: 'Malaysia',
      flagUri: 'https://cdn-icons-png.flaticon.com/512/555/555623.png'
    },

    {
      abbr: 'HKD',
      country: 'Hong Kong',
      flagUri: 'https://cdn-icons-png.flaticon.com/512/206/206669.png'
    },

    {
      abbr: 'SEK',
      country: "Sweden",
      flagUri: 'https://cdn-icons-png.flaticon.com/512/206/206668.png'
    },

    {
      abbr: 'KWD',
      country: 'Kuwait',
      currency: 'Kuwaiti Dinar',
      flagUri: 'https://cdn-icons-png.flaticon.com/512/940/940270.png'
    },

    {
      abbr: 'AED',
      country: 'UAE dirham',
      flagUri: 'https://cdn-icons-png.flaticon.com/512/206/206701.png'
    },

    {
      abbr: 'NZD',
      country: 'New Zealand dollar',
      flagUri: 'https://cdn-icons-png.flaticon.com/512/206/206731.png'
    },

    {
      abbr: 'DKK',
      country: 'Danish krone',
      flagUri: 'https://cdn-icons-png.flaticon.com/512/206/206678.png'
    },

    {
      abbr: 'THB',
      country: 'Thai baht',
      flagUri: 'https://cdn-icons.flaticon.com/png/512/3373/premium/3373310.png?token=exp=1640611663~hmac=ad9e2e1b482a41c5d5a0031164b42bab'
    },

    {
      abbr: 'IQD',
      country: 'Iraq',
      currency: 'Iraqi dinar',
      flagUri: 'https://cdn-icons-png.flaticon.com/512/206/206832.png'
    },

    {
      abbr: 'RON',
      country: 'Romania',
      currency: 'Romanian Leu',
      flagUri: 'https://cdn-icons-png.flaticon.com/512/206/206743.png'
    }
  ]

  chosenIndex = 0

  useEffect(() => {

    fetchConversion();

    async function fetchConversion() {
      
      const response = await fetch(url);

      const conversion = await response.json();
      
      console.log('helloooo')
      console.log(conversion)

      setConversion(conversion)
  
    }

      //   // async function fetchConversion() {

  //   //   // const response = await fetch('http://api.exchangeratesapi.io/v1/latest?access_key=0e54bad669c75bf6463ca7f900374be4&from=USD&to=EUR&amount=300');
      
  //   //   // const response = await fetch('https://random-data-api.com/api/stripe/random_stripe')

  //   //   let from = 'USD'

  //   //   let to = 'CAD'

  //   //   let url = 'https://free.currconv.com/api/v7/convert?q=' + from + '_' + to + '&compact=ultra&apiKey=' + API_KEY

  //   //   const response = await fetch(url)

  //   //   const conversion = await response.json();
      
  //   //   console.log(conversion)

  //   //   setConversion(conversion)
  
  //   // }

  }, [setConversion]);



  // aser
  // const conversionItems = currencies.map((currency) =>
  //     <CurrencyBox
  //       currencyAbbr = {currency.abbr}
  //       flag = {currency.flag}
  //       flagUri= {currency.flagUri}
  //       conversion = {(parseFloat(JSON.stringify(conversion.rates.currency.abbr)) / parseFloat(JSON.stringify(conversion.rates.currencies[chosenIndex] * cost))).toFixed(2)}
  //       // conversion = {(parseFloat(JSON.stringify(conversion.USD_CAD)) * cost).toFixed(2)}
  //     />
  // );

  return (
    
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={styles.container}>
      
      <View style={styles.container}>

        <View style={{margin: 20}}/>

        <View style={{flexDirection: 'row', margin: 20, marginBottom: 0}}>

          <TouchableOpacity style={{margin: 0}}>

            <Image
                source={{uri: 'https://cdn-icons-png.flaticon.com/512/206/206626.png'}}
                style={{width:50, height: 50, margin: 0, padding: 0}}
              />

          </TouchableOpacity>

          <View style={{marginLeft: 10}}></View>
          
          <TextInput
            style={{
              height: 33,
              // borderWidth: 1,
              // backgroundColor: 'lightgray',
              backgroundColor: '#ededed',
              padding: 10,
              justifyContent: 'center',
              alignSelf: 'center',
              flex: 1,
              borderRadius: 5
            }}
            keyboardType="numeric"
            onChangeText={cost => setCost(cost) }
            // value={text}
          />
          
        </View>

        <View style={{marginLeft: 20}}>
          {/* <Text style={{fontSize: 12, color: 'gray'}}>Updated</Text> */}
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
            currencies.map (({abbr, flag, flagUri}) =>
              <CurrencyBox    
                currencyAbbr = {abbr}
                flag = {flag}
                flagUri= {flagUri}
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
});
