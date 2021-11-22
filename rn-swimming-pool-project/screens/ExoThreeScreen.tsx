import * as React from 'react';
import { Button, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';


const styles = StyleSheet.create({ //adding style
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

class Counter extends React.Component { //creating class
  state = { count: 0 };

  setCount = () => this.setState(
    prevState => ({ ...prevState, count: this.state.count + 1 })
  )

  render() {
    const { count } = this.state;
    return (
      <View style={styles.container}>
        <Text>{count}</Text>
        <View>
          <Button
          onPress={this.setCount}
          title="Button"
          color="rgb(33,150,243)"/>
        </View>
      </View>
    );
  }
}

const ExoThreeScreen = () => ( //putting class into tag
  <Counter />
);

export default ExoThreeScreen; //exporting the newly created tag
