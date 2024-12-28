import { Image, StyleSheet, Platform ,Text} from 'react-native';
import React, { useState } from 'react';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Piecharts from '../../components/TestChart'
import ProgressBar from '../../components/ProgressContainer'
import { useSelector, useDispatch } from 'react-redux';
import { setUserData } from '../../State/store'; 

export default function HomeScreen() {

  const [childData, setChildData] = useState<string>('');

  const strategy = useSelector((state) => state.user.userData); 
// console.log(strategy)
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome to Spend!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        {/* <ThemedText type="subtitle">Step 1: Try it</ThemedText>
        <ThemedText>
          Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
          Press{' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
              web: 'F12'
            })}
          </ThemedText>{' '}
          to open developer tools.
        </ThemedText> */}
       <Piecharts></Piecharts>
      </ThemedView>

      
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Status</ThemedText>
        <ThemedText>
         Your Expenses
        </ThemedText>
      </ThemedView>

       

        {strategy && 
  Object.keys(strategy['strategy']).map(topKey => (
    <>
     <ThemedText> {topKey}</ThemedText>
    
       
        <ProgressBar progress={50} goal={strategy['strategy'][topKey]['Total']} />
     
      <ThemedView style={styles.status}>
        <Text style={styles.range}> ₹10</Text>
        <Text style={styles.range}> ₹{strategy['strategy'][topKey]['Total']}</Text>
      </ThemedView>
    </>
  ))
}
      {/* <ThemedText> Needs</ThemedText>
      <ProgressBar progress={4} goal={10}></ProgressBar>
      <ThemedView style={styles.status}> <Text style={styles.range}> ₹10</Text><Text style={styles.range}> ₹110</Text></ThemedView>
      <ThemedText> Wants</ThemedText>
      <ProgressBar progress={9} goal={10}></ProgressBar>
      <ThemedView style={styles.status}> <Text style={styles.range}> ₹10</Text><Text style={styles.range}> ₹110</Text></ThemedView> */}

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
        <ThemedText>
          When you're ready, run{' '}
          <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  range:{
color:'#626262cf',
fontSize:10,
// marginBottsm:-30
  },
  status:{
    justifyContent:'space-between',
    flexDirection:'row',
    fontSize:6,
    color:'#fff'
  }
});
