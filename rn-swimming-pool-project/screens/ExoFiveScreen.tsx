import * as React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';


function Red(){
  return (
    <View style={styles.scrollViewRed}>
          <Text></Text>
        </View>
  );
}

function Pink(){
  return (
    <View style={styles.scrollViewPink}>
          <Text></Text>
        </View>
  );
}

const ExoFiveScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>

        <Pink/>

        <View style={styles.align}>
          <Red/>
          <Red/>
          <Red/>
        </View>

        <Pink/>

        <Red/>

        <Pink/>

        <Pink/>

      </ScrollView>
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(128,128,128,0.1)',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  scrollViewRed:{
    backgroundColor:'rgb(254,1,0)',
    marginRight:10,
    marginTop:10,
    padding:40,
    width:100,
  },
  scrollViewPink:{
    padding:40,
    paddingLeft:160,
    marginTop:10,
    width:100,
    flex: 1,
    backgroundColor:'rgb(255,0,254)',
  },
  align:{
    alignContent:'flex-start',
    flexDirection:'row',
    backgroundColor: 'rgba(128,128,128,0.01)',
  }
});

export default ExoFiveScreen;