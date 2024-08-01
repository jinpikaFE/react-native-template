import BPage from '@/baseUI/BPage';
import React, {useEffect, useState} from 'react';
import {View, Dimensions} from 'react-native';
import Svg, {Polyline} from 'react-native-svg';

const {width} = Dimensions.get('window');

/** 密度 */
const md = 50;

export const HomeScreen = () => {
  const [data, setData] = useState<any[]>([]);
  const [data2, setData2] = useState<any[]>([]);
  const [data3, setData3] = useState<any[]>([]);
  const [data4, setData4] = useState<any[]>([]);
  const [data5, setData5] = useState<any[]>([]);

  // 模拟接收实时数据
  useEffect(() => {
    const interval = setInterval(() => {
      setData((prevData: any) => {
        const newData = [...prevData, Math.random() * 100];
        /** 大于md条去除 */
        return newData.length > md ? newData.slice(-md) : newData;
      });
      setData2((prevData: any) => {
        const newData = [...prevData, Math.random() * 100];
        /** 大于md条去除 */
        return newData.length > md ? newData.slice(-md) : newData;
      });
      setData3((prevData: any) => {
        const newData = [...prevData, Math.random() * 100];
        /** 大于md条去除 */
        return newData.length > md ? newData.slice(-md) : newData;
      });
      setData4((prevData: any) => {
        const newData = [...prevData, Math.random() * 100];
        /** 大于md条去除 */
        return newData.length > md ? newData.slice(-md) : newData;
      });
      setData5((prevData: any) => {
        const newData = [...prevData, Math.random() * 100];
        /** 大于md条去除 */
        return newData.length > md ? newData.slice(-md) : newData;
      });
    }, 100); // 每100ms接收一次新数据

    return () => {
      clearInterval(interval);
    };
  }, []);

  const points = data
    .map((point, index) => `${index * (width / md)},${100 - point}`)
    .join(' ');

  const points2 = data2
    .map((point, index) => `${index * (width / md)},${100 - point}`)
    .join(' ');
  const points3 = data3
    .map((point, index) => `${index * (width / md)},${100 - point}`)
    .join(' ');
  const points4 = data4
    .map((point, index) => `${index * (width / md)},${100 - point}`)
    .join(' ');
  const points5 = data5
    .map((point, index) => `${index * (width / md)},${100 - point}`)
    .join(' ');

  return (
    <BPage showNavBar={false}>
      <View
        style={{
          paddingHorizontal: 12,
          marginTop: 20,
          backgroundColor: '#f3f3f3',
        }}>
        <View>
          <Svg height="100" width={width}>
            <Polyline
              points={points}
              fill="none"
              stroke="blue"
              strokeWidth="2"
            />
          </Svg>
        </View>
      </View>
      <View
        style={{
          paddingHorizontal: 12,
          marginTop: 20,
          backgroundColor: '#f3f3f3',
        }}>
        <View>
          <Svg height="100" width={width}>
            <Polyline
              points={points2}
              fill="none"
              stroke="blue"
              strokeWidth="2"
            />
          </Svg>
        </View>
      </View>
      <View
        style={{
          paddingHorizontal: 12,
          marginTop: 20,
          backgroundColor: '#f3f3f3',
        }}>
        <View>
          <Svg height="100" width={width}>
            <Polyline
              points={points3}
              fill="none"
              stroke="blue"
              strokeWidth="2"
            />
          </Svg>
        </View>
      </View>
      <View
        style={{
          paddingHorizontal: 12,
          marginTop: 20,
          backgroundColor: '#f3f3f3',
        }}>
        <View>
          <Svg height="100" width={width}>
            <Polyline
              points={points4}
              fill="none"
              stroke="blue"
              strokeWidth="2"
            />
          </Svg>
        </View>
      </View>
      <View
        style={{
          paddingHorizontal: 12,
          marginTop: 20,
          backgroundColor: '#f3f3f3',
        }}>
        <View>
          <Svg height="100" width={width}>
            <Polyline
              points={points5}
              fill="none"
              stroke="blue"
              strokeWidth="2"
            />
          </Svg>
        </View>
      </View>
    </BPage>
  );
};
