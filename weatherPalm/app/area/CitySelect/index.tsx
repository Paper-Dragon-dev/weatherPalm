import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import SafeAreaView from 'react-native/Libraries/Components/SafeAreaView/SafeAreaView';

export default function CitySelect({latitude, longitude, handleLatLong}) {
  return (
    <SafeAreaView>
      <TextInput
        onChangeText={handleLatLong('latitude')}
        value={latitude}
        placeholder="latitude"
      />
      <TextInput
        onChangeText={handleLatLong('longitude')}
        value={longitude}
        placeholder="longitude"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
