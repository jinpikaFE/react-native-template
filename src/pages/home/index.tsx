import BPage from '@/baseUI/BPage';
import {RootStackParamList} from '@/navigator';
import {MainTabParamList} from '@/navigator/MainTab';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {CompositeScreenProps, useNavigation} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';
import {useReactive} from 'ahooks';
import {observer} from 'mobx-react-lite';
import {Button} from 'native-base';
import * as React from 'react';
import {useEffect, useState} from 'react';
import {Text, View} from 'react-native';

type IHomeNavigateProps = CompositeScreenProps<
  BottomTabScreenProps<MainTabParamList, 'Home'>,
  StackScreenProps<RootStackParamList>
>;

export const HomeScreen = observer(() => {
  const navigation = useNavigation<IHomeNavigateProps['navigation']>();
  const [timer, setTimer] = useState();
  const canvasState = useReactive<{
    width: number;
    height: number;
    //处理过后的数据
    beatArray: any[];
    //根据走纸速度选择我们应该要显示的数据，这里先写死
    sampling: number;
    //x轴的坐标
    pointX: number;
    //开始的y轴坐标
    startPointY: number;
    //画到哪里了的y轴坐标
    endPointY: number;
    //拿到的数据源
    dataSource: string;
    pointLog: any;
  }>({
    width: 751,
    height: 126,
    //处理过后的数据
    beatArray: [],
    //根据走纸速度选择我们应该要显示的数据，这里先写死
    sampling: 2,
    //x轴的坐标
    pointX: 0,
    //开始的y轴坐标
    startPointY: 0,
    //画到哪里了的y轴坐标
    endPointY: 0,
    pointLog: null,
    //拿到的数据源
    dataSource:
      '-12 -13 -14 -17 -17 -15 -12 -12 -13 -14 -12 -12 -10 -10 -12 -13 -15 -17 -16 -16 -14 -13 -14 -16 -18 -16 -17 -18 -17 -16 -15 -14 -14 -13 -12 -15 -14 -15 -17 -20 -21 -18 -16 -16 -11 -9 -10 -10 -12 -13 -15 -16 -14 -15 -17 -16 -17 -15 -15 -14 -13 -15 -12 -10 -14 -14 -14 -14 -12 -13 -15 -15 -16 -16 -17 -16 -13 -13 -14 -13 -14 -14 -14 -15 -15 -15 -17 -18 -17 -15 -12 -13 -15 -17 -16 -17 -16 -13 -17 -17 -15 -18 -16 -17 -20 -17 -18 -19 -15 -13 -14 -16 -17 -16 -16 -15 -14 -16 -15 -16 -19 -18 -17 -15 -15 -19 -20 -17 -17 -18 -17 -16 -17 -14 -10 -14 -15 -11 -12 -12 -12 -14 -13 -13 -13 -11 -11 -10 -9 -9 -8 -10 -11 -13 -13 -9 -10 -10 -5 -5 -7 -6 -5 -4 -4 -4 1 1 -3 -6 -10 -14 -14 -14 -12 -15 -17 -18 -20 -22 -21 -19 -18 -20 -20 -19 -22 -22 -23 -25 -24 -22 -22 -23 -27 -25 -26 -24 -23 -25 -24 -21 -18 -18 -19 -21 -22 -24 -25 -24 -24 -23 -23 -23 -21 -17 -15 -16 -16 -11 -9 -1 10 21 29 40 51 66 85 99 99 99 102 90 71 52 28 9 -17 -46 -60 -60 -58 -55 -48 -42 -38 -35 -31 -31 -28 -26 -24 -22 -22 -22 -17 -17 -21 -21 -21 -20 -19 -20 -19 -18 -16 -16 -16 -17 -17 -17 -14 -14 -15 -15 -15 -14 -14 -16 -17 -15 -11 -9 -11 -11 -11 -13 -10 -13 -12 -10 -12 -13 -10 -8 -5 -4 -4 -8 -9 -8 -7 -9 -9 -10 -8 -4 -2 -2 -1 -2 -4 -4 -5 -5 -5 -4 -1 -2 0 -3 -4 -3 -1 2 1 -1 1 4 6 5 5 6 4 4 6 7 6 9 8 10 11 11 13 14 13 15 15 18 20 23 23 22 22 24 23 23 24 28 34 36 36 36 36 39 38 38 41 43 43 43 44 46 47 51 50 47 49 49 50 50 47 49 53 51 50 48 49 48 43 40 37 33 31 27 23 21 19 18 13 7 6 3 0 1 5 4 -1 -5 -6 -6 -6 -6 -7 -10 -11 -12 -12 -14 -12 -9 -10 -11 -11 -11 -11 -13 -14 -15 -18 -14 -10 -11 -12 -15 -16 -16 -18 -18 -19 -19 -14 -13 -13 -11 -11 -14 -14 -13 -12 -12 -13 -13 -13 -15 -15 -15 -14 -14 -14 -15 -17 -16 -16 -17 -15 -15 -15 -15 -15 -15 -16 -18 -13 -11 -13 -13 -14 -13 -11 -9 -10 -14 -14 -14 -14 -13 -12 -12 -9 -12 -11 -9 -10 -12 -13 -13 -12 -12 -14 -14 -16 -14 -11 -12 -12 -14 -14 -16 -17 -16 -16 -17 -16 -15 -13 -10 -10 -11 -11 -11 -13 -16 -15 -16 -16 -14 -12 -10 -12 -15 -12 -12 -16 -17 -18 -16 -16 -17 -19 -21 -19 -16 -13 -11 -12 -15 -14 -14 -15 -15 -16 -17 -19 -20 -17 -16',
  });

  useEffect(() => {
    // //设置定时器
    // const myCanvas = document.getElementById('ecg');
    // if (myCanvas.getContext) {
    //   var ctx = myCanvas.getContext('2d');
    //   const timerTemp = setInterval(() => {
    //     drawLine(ctx);
    //     //如果没有数据了，就自动停掉定时器，不清楚定时器就可以出现文章开头的效果，没有数据一直是一条线
    //     if (canvasState.beatArray.length === 0) {
    //       clearInterval(timer);
    //     }
    //   }, 100);
    //   setTimer(timerTemp);
    // }
  }, [canvasState.beatArray]);

  const getData = () => {
    let {dataSource, beatArray, sampling} = canvasState;
    //转换成数组
    const arr: any = dataSource.split(' ');
    //根据走纸速度我们选择性的处理数据
    for (let i = 0; i < arr.length; i += sampling) {
      beatArray.push(arr[i]);
    }
    canvasState.beatArray = beatArray;
  };

  const drawLine = (ctx: any) => {
    let {width, height, beatArray, startPointY, endPointY, pointX, pointLog} =
      canvasState;
    //以画布的中点开始画
    startPointY = height / 2;
    //如果x轴走完了整个画布，就从头开始画
    if (pointX >= width) {
      pointX = -5;
    }
    //删除上一次画的，并且添加一个断点背景
    ctx.beginPath();
    ctx.strokeStyle = '#FFF';
    ctx.lineWidth = 2;
    ctx.clearRect(pointX + 4, 0, 25, height);
    ctx.moveTo(pointX + 10, 0);
    ctx.lineTo(pointX + 10, height);
    ctx.stroke();
    ctx.closePath();
    //补充背景
    //先补充小的
    ctx.beginPath();
    ctx.strokeStyle = '#f1dedf';
    ctx.lineWidth = 1;
    for (let y = 0; y < height; y += 5) {
      ctx.moveTo(pointX, y);
      ctx.lineTo(pointX + 5, y);
      ctx.stroke();
    }
    ctx.moveTo(pointX, 0);
    ctx.lineTo(pointX, height);
    ctx.stroke();
    ctx.closePath();
    //再补充大的
    ctx.beginPath();
    ctx.strokeStyle = '#663333';
    ctx.lineWidth = 1;
    for (let y = 0; y < height; y += 25) {
      ctx.moveTo(pointX, y);
      ctx.lineTo(pointX + 5, y);
      ctx.stroke();
    }
    if (pointX % 25 === 0) {
      ctx.moveTo(pointX, 0);
      ctx.lineTo(pointX, height);
      ctx.stroke();
    }
    ctx.closePath();
    //画心电波
    ctx.beginPath();
    ctx.strokeStyle = 'green';
    ctx.lineWidth = 2;
    ctx.lineCap = 'square';
    ctx.lineJoin = 'round';
    //如果x轴坐标到0的位置证明从头开始画，直接定位到开始的坐标，这样就不会从结尾到开始画一条线
    if (pointX === 0) {
      ctx.moveTo(0, startPointY);
    } else {
      //写一个画的日志是为了让他中间不存在两条线之间好像没有连接上的问题
      if (pointLog.length === 3) {
        ctx.moveTo(pointLog[1].x, pointLog[1].y);
      } else {
        ctx.moveTo(pointX, endPointY);
      }
    }
    //每次走五个像素也就是走一格
    pointX += 5;
    //拿到数据以后算一下应该在y轴的那个位置，如果没有就直接给成中线的位置，真实情况应该是等待接收数据，
    endPointY = startPointY - beatArray[0] || startPointY;
    //重复一下上次画的路径防止中间断点
    if (pointLog[2] && pointX !== 0) {
      ctx.lineTo(pointLog[2].x, pointLog[2].y);
    }
    //再写一遍是为了重复上一次画的时候到最后，这样之前定义的就白费了
    if (pointX === 0) {
      ctx.moveTo(0, startPointY);
    }
    ctx.lineTo(pointX, endPointY);
    //把每次画的位置都存起来
    pointLog.push({x: pointX, y: endPointY});
    //只存3次的数据，多余的从头开始删掉
    if (pointLog.length > 3) {
      pointLog.shift();
    }
    //画一个点，从数据里面删除一个点
    beatArray.shift();
    ctx.stroke();
    ctx.closePath();
    //画完一次更新一次结果

    canvasState.beatArray = beatArray;
    canvasState.pointX = pointX;
    canvasState.endPointY = endPointY;
    canvasState.pointLog = pointLog;
  };

  return (
    <BPage showNavBar={false}>
      <View style={{flex: 1}}>
        <View style={{marginTop: 20, paddingHorizontal: 12}}>
          <Button onPress={() => navigation.navigate('Login')}>
            <Text style={{color: '#fff'}}>Go Login</Text>
          </Button>
        </View>
      </View>
    </BPage>
  );
});
