import {
  IconHome,
  IconHomeO,
  IconManage,
  IconManageO,
  IconPeople,
  IconPeopleO,
} from '@/assets/iconfont';
import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import * as React from 'react';

import {ContactScreen} from '@/pages/contact';
import {HomeScreen} from '@/pages/home';
import {MeScreen} from '@/pages/me';
import {RouteProp} from '@react-navigation/native';
import {RootStackNavigation, RootStackParamList} from '.';
import {MainTabBar} from './MainTabBar';

export type MainTabParamList = {
  Home: undefined;
  Contact: undefined;
  Me: undefined;
};

export type MainTabNavigation = BottomTabNavigationProp<MainTabParamList>;

export interface MainTabProps {
  navigation: RootStackNavigation;
  route: RouteProp<RootStackParamList, 'MainTab'>;
}

const Tab = createBottomTabNavigator();

const RootStack: React.FC<MainTabProps> = () => {
  return (
    <Tab.Navigator
      tabBar={props => <MainTabBar {...props} />}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#0025ff',
      }}>
      <Tab.Screen
        name="Home"
        options={{
          title: '首页',
          tabBarIcon: ({focused, color}: {focused: boolean; color: string}) => {
            return focused ? (
              <IconHome color={color} />
            ) : (
              <IconHomeO color={color} />
            );
          },
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="Contact"
        options={{
          title: '功能',
          tabBarIcon: ({focused, color}: {focused: boolean; color: string}) => {
            return focused ? (
              <IconManage color={color} />
            ) : (
              <IconManageO color={color} />
            );
          },
        }}
        component={ContactScreen}
      />
      <Tab.Screen
        name="Me"
        options={{
          title: '我的',
          tabBarIcon: ({focused, color}: {focused: boolean; color: string}) => {
            return focused ? (
              <IconPeople color={color} />
            ) : (
              <IconPeopleO color={color} />
            );
          },
        }}
        component={MeScreen}
      />
    </Tab.Navigator>
  );
};

export default RootStack;
