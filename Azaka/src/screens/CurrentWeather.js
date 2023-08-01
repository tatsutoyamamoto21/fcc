import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import RowText from '../components/RowText';
import { WeatherType } from '../utilities/WeatherType';

const CurrentWeather = ({ weatherData }) => {
  const {
    wrapper,
    container,
    tempStyle,
    feels,
    highLowWrapper,
    highLow,
    bodyWrapper,
    description,
    message,
  } = styles;
  const { main: { temp, feels_like, temp_max, temp_min }, weather } = weatherData
  const weatherCondition = weather[0].main
  return (
    <SafeAreaView style = {[wrapper, { backgroundColor: WeatherType[weatherCondition].backgroundColor }]}>
      <View style = {container}>
        <Feather name={WeatherType[weatherCondition].icon} size={100} color="white" />
        <Text style={tempStyle}>{temp}</Text>
        <Text style={feels}>{`Feels like ${feels_like}`}</Text>
        <RowText
          textOne={`High: ${temp_max} `}
          textTwo={`Low: ${temp_min}`}
          containerStyle={highLowWrapper}
          textOneStyle={highLow}
          textTwoStyle={highLow}
        />
      </View>
      <RowText
        textOne={weather[0].description}
        textTwo={WeatherType[weatherCondition].message}
        containerStyle={bodyWrapper}
        textOneStyle={description}
        textTwoStyle={message}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    backgroundColor: 'pink',
    flex: 1,
  },
  tempStyle: {
    color: 'black',
    fontSize: 48,
  },
  feels: {
    color: 'black',
    fontSize: 30,
  },
  highLow: {
    color: 'black',
    fontSize: 20,
  },
  highLowWrapper: {
    flexDirection: 'row',
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40,
  },
  description: {
    fontSize: 46,
  },
  message: {
    fontSize: 30,
  },
});

export default CurrentWeather;
