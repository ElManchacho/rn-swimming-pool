import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { Image } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

const Stack = createNativeStackNavigator();

function Img(){
  return (
    <View>
      <Image
      source={require('../assets/images/Exo4.png')}/>
    </View>
  );
}

function Footer(){
  return (
    <View style={{justifyContent:'flex-end', flex:2}}>
      <Text>Footer</Text>
    </View>
  );
}

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Hello</Text>
      <Img/>
      <Footer/>
    </View>
    
  );
}



function App() {

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen
          name="Header"
          component={HomeScreen}
          options={{ 
            title: 'Header', 
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: 'rgb(0,0,0)',
            },
            headerTintColor:'rgb(255,255,255)',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
