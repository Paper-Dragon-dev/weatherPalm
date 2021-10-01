import React from 'react';
import {StyleSheet, TextInput, SafeAreaView} from 'react-native';

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
