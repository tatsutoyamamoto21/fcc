import React from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  ImageBackground,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import ListItem from '../components/ListItem';

const UpcomingWeather = ({ weatherData }) => {
  const itemToShow = ({item}) => (
    <ListItem condition={item.weather[0].main} dt_txt={item.dt_txt}
      min={item.main.temp_min} max={item.main.temp_max}/>
  );
  const { container, image } = styles;
  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require('../../assets/upcoming-background.jpg')}
        style = {image}>
        <FlatList
          data={weatherData}
          renderItem={itemToShow}
          keyExtractor={(item) => item.dt_txt}
        />
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: 'royalblue',
  },
  image: {
    flex: 1,
  },
});

export default UpcomingWeather;
