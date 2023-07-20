import React from 'react';
import {
  Text,
  View,
} from 'react-native';

const RowText = (props) => {
  const {
    textOne,
    textTwo,
    containerStyle,
    textOneStyle,
    textTwoStyle,
  } = props;
  return (
    <View style={containerStyle}>
      <Text style={textOneStyle}>{textOne}</Text>
      <Text style={textTwoStyle}>{textTwo}</Text>
    </View>
  );
};

export default RowText;
