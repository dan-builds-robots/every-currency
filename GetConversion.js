import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';

ACCESS_KEY = '0e54bad669c75bf6463ca7f900374be4'

var from = "USD"
var to = "EUR"
var amount = 25

// const getConversion = async ({from, to, amount}) => {
const getConversion = async () => {
    const [data, setData] = useState([]);
     try {
      const response = await fetch('http://api.exchangeratesapi.io/v1/latest?access_key=' + ACCESS_KEY + "&from=" + from + "&to=" + to + "&amount=" + amount);
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
    //   setLoading(false);
    }

    return data;
  }