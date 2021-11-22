import * as React from 'react';
import { Button, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function ExoTwoScreen() {
  return (
    <View style={styles.container}>
      <Button
      onPress={nothing}
      title="Button"
      color="rgb(33,150,243)"
    />
    </View>
  );
}

function nothing(){

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(128,128,128,0.1)',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
