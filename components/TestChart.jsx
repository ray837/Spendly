import React, { Component } from 'react'
import { StyleSheet, ScrollView, Text, View } from 'react-native'
import PieChart from 'react-native-pie-chart'
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { IconSymbol } from '@/components/ui/IconSymbol';
export default class TestChart extends Component {
  render() {
    const widthAndHeight = 250

    const series = [
      { value: 430, color: '#fbd203' },
      { value: 321, color: '#ffb300' },
      { value: 185, color: '#ff9100' },
      { value: 123, color: '#ff6c00' },
    ]

    return (
      <ScrollView style={{ flex: 1 }}>
        <ThemedView style={styles.container}>
     
  <ThemedView style={styles.topcard}>
          <ThemedText style={styles.title}>Alloted Budget : <ThemedText style={{fontWeight:'bold'}}>₹10</ThemedText></ThemedText>
          <PieChart widthAndHeight={widthAndHeight} series={series} cover={0.65} />
          {/* <View style={{flexDirection:'row',alignItems:'center',margin:'20px',justifyContent:'space-between'}}>
             <View><IconSymbol size={28} name="circle" color={series[0]['color']} /><Text>Expense</Text></View>
            <View> <IconSymbol size={28} name="circle" color={series[1]['color']} /><Text>Savings</Text></View>
            <View> <IconSymbol size={28} name="circle" color={series[2]['color']} /><Text>Investments</Text></View>
             <View><IconSymbol size={28} name="circle" color={series[3]['color']} /><Text>Expense</Text></View>
          </View> */}
          </ThemedView>
        </ThemedView>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  topcard:{
marginTop:10,
// backgroundColor:'#FFF',
padding:60,
borderRadius:15,
elevation:1
  },
  title: {
    fontSize: 20,
    margin: 25,
    textAlign: 'center'
  },
  space:{
    marginLeft:'50px',
    marginRight:'50px'
  }
})