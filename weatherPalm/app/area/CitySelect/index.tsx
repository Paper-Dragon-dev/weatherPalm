import React, {useState} from 'react';
import {StyleSheet, TextInput} from 'react-native';
import SafeAreaView from 'react-native/Libraries/Components/SafeAreaView/SafeAreaView';

export default function CitySelect() {
  const [city, setCity] = useState('');
  return (
    <SafeAreaView>
      <TextInput
        onChangeText={setCity}
        value={city}
        placeholder="City For Weather"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
