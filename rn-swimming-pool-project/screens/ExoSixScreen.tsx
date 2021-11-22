import * as React from 'react';
import { Button, FlatList, ScrollView, StyleSheet, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';


const styles = StyleSheet.create({ //adding style
  container: {
    flex: 1,
    alignItems: 'center',
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
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  align:{
    alignContent:'flex-start',
    flexDirection:'row',
    backgroundColor: 'rgba(128,128,128,0.01)',
  }
});



class List extends React.Component { //creating class


  addToList = () => this.setState(
    prevState => ({ ...prevState, list:this.state.list.push({}), text:"Adding"})
  )

  change = () => this.setState(
    prevState => ({...prevState, text:this.state.text+"Add"})
  )
  
  state = { 
    list: [{key:"Test"},{key:"Oui"}],
    text:""
  };

  render() {
    const { list } = this.state;
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.align}>
          <TextInput
            onChange={this.change}
            />
          <Button
            onPress={this.addToList}
            title="Add"
            color="rgb(33,150,243)"/>
        </SafeAreaView>
        <View>
        <FlatList
        data={list}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
      </View>
      </View>
    );
  }
}

const ExoSixScreen = () => ( //putting class into tag
  <List />
);

export default ExoSixScreen; //exporting the newly created tag
