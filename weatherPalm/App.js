import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import CitySelect from './app/area/CitySelect';
import WeatherDisplay from './app/area/WeatherDisplay';

const App = () => {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  const objectHelper = {
    latitude: setLatitude,
    longitude: setLongitude,
  };

  const handleLatLong = spot => value => {
    objectHelper[spot](value);
  };

  return (
    <View style={styles.container}>
      <CitySelect
        latitude={latitude}
        longitude={longitude}
        handleLatLong={handleLatLong}
      />
      <WeatherDisplay latitude={latitude} longitude={longitude} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});

export default App;
