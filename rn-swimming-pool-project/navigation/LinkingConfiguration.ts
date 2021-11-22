/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../types';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          ExoOne: {
            screens: {
              ExoOneScreen: 'one',
            },
          },
          ExoTwo: {
            screens: {
              ExoTwoScreen: 'two',
            },
          },
          ExoThree: {
            screens: {
              ExoThreeScreen: 'three',
            },
          },
          ExoFour: {
            screens: {
              ExoFourScreen: 'four',
            },
          },
          ExoFive: {
            screens: {
              ExoFiveScreen: 'five',
            },
          },
          ExoSix: {
            screens: {
              ExoSixScreen: 'six',
            },
          },
          ExoSeven: {
            screens: {
              ExoSevenScreen: 'seven',
            },
          },
          ExoEigth: {
            screens: {
              ExoEightScreen: 'eight',
            },
          },
          ExoNine: {
            screens: {
              ExoNineScreen: 'nine',
            },
          },
          ExoTen: {
            screens: {
              ExoTenScreen: 'ten',
            },
          },
          ExoEleven: {
            screens: {
              ExoElevenScreen: 'eleven',
            },
          },
          ExoTwelve: {
            screens: {
              ExoTwelveScreen: 'twelve',
            },
          },
          ExoThirteen: {
            screens: {
              ExoThirteenScreen: 'thirteen',
            },
          },
          ExoFourteen: {
            screens: {
              ExoFourteenScreen: 'fourteen',
            },
          }, 
          ExoFifteen: {
            screens: {
              ExoFifteenScreen: 'fifteen',
            },
          },
        },
      },
      Modal: 'modal',
      NotFound: '*',
    },
  },
};

export default linking;
