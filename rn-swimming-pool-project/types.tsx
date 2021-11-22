/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Modal: undefined;
  NotFound: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

export type RootTabParamList = {
  ExoOne: undefined;
  ExoTwo: undefined;
  ExoThree: undefined;
  ExoFour: undefined;
  ExoFive: undefined;
  ExoSix: undefined;
  ExoSeven: undefined;
  ExoEigth: undefined;
  ExoNine: undefined;
  ExoTen: undefined;
  ExoEleven: undefined;
  ExoTwelve: undefined;
  ExoThirteen: undefined;
  ExoFourteen: undefined;
  ExoFifteen: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;
