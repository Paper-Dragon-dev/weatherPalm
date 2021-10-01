import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, SafeAreaView} from 'react-native';

import {WEATHER_API_KEY} from '@env';
import api from '../../api';

export default function WeatherDisplay({latitude, longitude}) {
  const [weather, setWeather] = useState({});

  useEffect(() => {
    const getData = async () => {
      try {
        const weather = await api.get(
          `${WEATHER_API_KEY}/${latitude},${longitude}`,
        );

        if (weather.data) {
          const {
            summary,
            precipIntensity,
            precipProbability,
            precipType,
            temperature,
            apparentTemperature,
            dewPoint,
            humidity,
            pressure,
            windSpeed,
            windGust,
            windBearing,
            cloudCover,
            uvIndex,
            visibility,
            ozone,
          } = weather.data.currently;

          setWeather({
            summary,
            precipIntensity,
            precipProbability,
            precipType,
            temperature,
            apparentTemperature,
            dewPoint,
            humidity,
            pressure,
            windSpeed,
            windGust,
            windBearing,
            cloudCover,
            uvIndex,
            visibility,
            ozone,
          });
        }
      } catch (catchError) {
        console.log({catchError});
      }
    };

    if (latitude && longitude && WEATHER_API_KEY) {
      getData();
    }
  }, [latitude, longitude]);

  return (
    <SafeAreaView>
      <Text>summary: {weather?.summary}</Text>
      <Text>temperature: {weather?.temperature}</Text>
      <Text>dewPoint: {weather?.dewPoint}</Text>
      <Text>humidity: {weather?.humidity}</Text>
      <Text>pressure: {weather?.pressure}</Text>
      <Text>windSpeed: {weather?.windSpeed}</Text>
      <Text>windGust: {weather?.windGust}</Text>
      <Text>cloudCover: {weather?.cloudCover}</Text>
      <Text>uvIndex: {weather?.uvIndex}</Text>
      <Text>visibility: {weather?.visibility}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
