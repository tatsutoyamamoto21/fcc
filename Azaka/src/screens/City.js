import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  ImageBackground,
  StatusBar,
  View,
} from 'react-native';
import IconText from '../components/IconText';

const City = () => {
  const { container,
    image,
    cityName,
    countryName,
    cityText,
    populationWrapper,
    populationText,
    riseSetWrapper,
    riseSetText,
    rowLayout 
  } = styles;
  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require('../../assets/tokyo-background.jpg')}
        style={image}>
        <Text style={[cityName, cityText]}>Tokyo</Text>
        <Text style={[countryName, cityText]}>Japan</Text>
        <View style={[populationWrapper, rowLayout]}>
          <IconText
            iconName={'user'}
            iconColor={'red'}
            bodyText={'8000'}
            bodyTextStyles={populationText}
          />
        </View>
        <View style={[riseSetWrapper, rowLayout]}>
          <IconText
            iconName={'sunrise'}
            iconColor={'white'}
            bodyText={'6:46:52am'}
            bodyTextStyles={riseSetText}
          />
          <IconText
            iconName={'sunset'}
            iconColor={'white'}
            bodyText={'21:11:31pm'}
            bodyTextStyles={riseSetText}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  image: {
    flex: 1,
  },
  cityName: {
    fontSize: 40,
  },
  countryName: {
    fontSize: 30,
  },
  cityText: {
    justifyContent: 'center',
    alignSelf: 'center',
    color: 'white',
  },
  populationWrapper: {
    justifyContent: 'center',
    marginTop: 30,
  },
  populationText: {
    fontSize: 25,
    marginLeft: 7.5,
    color: 'red',
  },
  riseSetText: {
    fontSize: 20,
    color: 'white',

  },
  riseSetWrapper: {
    justifyContent: 'space-around',
    marginTop: 30,
  },
  rowLayout: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default City;
