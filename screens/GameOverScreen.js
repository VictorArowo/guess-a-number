import React from 'react';
import { View, Text, StyleSheet, Button, Alert, Image } from 'react-native';
import defaultStyles from '../constants/default-styles';

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <Text style={defaultStyles.titleText}>Game is over!!</Text>
      <View style={styles.imageContainer}>
        <Image source={require('../assets/success.png')} style={styles.image} />
      </View>
      <Text style={defaultStyles.bodyText}>
        Number of rounds: {props.roundsNumber}
      </Text>
      <Text style={defaultStyles.bodyText}>Number was: {props.userNumber}</Text>
      <Button title="NEW GAME" onPress={props.newGameHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: '100%',
    height: '100%'
  },
  imageContainer: {
    width: '80%',
    height: 300,
    borderRadius: 200,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden'
  }
});

export default GameOverScreen;
