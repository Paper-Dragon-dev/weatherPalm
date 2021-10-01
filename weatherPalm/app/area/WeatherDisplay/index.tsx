import React, {useEffect} from 'react';
import {StyleSheet, Text} from 'react-native';
import SafeAreaView from 'react-native/Libraries/Components/SafeAreaView/SafeAreaView';

export default function WeatherDisplay({latitude, longitude}) {
  useEffect(() => {
    console.log({latitude, longitude});
  }, []);

  return (
    <SafeAreaView>
      <Text>WeatherDisplay</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
