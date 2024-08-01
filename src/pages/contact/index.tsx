import BPage from '@/baseUI/BPage';
import {observer} from 'mobx-react-lite';
import {Box, Button} from 'native-base';
import * as React from 'react';
import {Text, View} from 'react-native';

import {RootStackParamList} from '@/navigator';
import {MainTabParamList} from '@/navigator/MainTab';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {CompositeScreenProps, useNavigation} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';

type IContactNavigateProps = CompositeScreenProps<
  BottomTabScreenProps<MainTabParamList, 'Contact'>,
  StackScreenProps<RootStackParamList>
>;

export const ContactScreen = observer(() => {
  const navigation = useNavigation<IContactNavigateProps['navigation']>();

  return (
    <BPage showNavBar={false} topInsertBgColor="#f5f5f5">
      <Box
        style={{
          flex: 1,
          backgroundColor: '#f5f5f5',
          paddingHorizontal: 16,
        }}>
        {/* <View style={{marginTop: 30}}>
          <Button onPress={() => navigation.navigate('Camera')}>
            <Text style={{color: '#fff'}}>Camera</Text>
          </Button>
        </View> */}
        <View style={{marginTop: 30}}>
          <Button onPress={() => navigation.navigate('Blutooth')}>
            <Text style={{color: '#fff'}}>蓝牙</Text>
          </Button>
        </View>
      </Box>
    </BPage>
  );
});
