import React  from 'react';
import{ StyleSheet,
        Text,
        View,
        FlatList,
      } from 'react-native';
const DATA =  [
    {
      id: "1",
      title: "Food & Dining"
    },
    {
      id: "2",
      title: "Travel"
    },
    {
      id: "3",
      title: "Groceries"
    },
    {
      id: "4",
      title: "Entertainment"
    },
    {
      id: "5",
      title: "Health & Fitness"
    },
    {
      id: "6",
      title: "Utilities"
    },
    {
      id: "7",
      title: "Rent"
    },
    {
      id: "8",
      title: "Shopping"
    },
    {
      id: "9",
      title: "Transportation"
    },
    {
      id: "10",
      title: "Insurance"
    },
    {
      id: "11",
      title: "Education"
    },
    {
      id: "12",
      title: "Savings & Investments"
    }
  ];
  

const Item = ({title}) => {
  return( 
    <View style={styles.item} >
      <Text style={{color:'white'}}>{title}</Text>
      <Text style={{color:'green'}}>+300</Text>
    </View>
  );
}

export default function HistoryList() {
  

const renderItem = ({item})=>( 
  <Item title={item.title}/>
);
return (
  <View style={styles.container}>
    <FlatList
       data={DATA}
       renderItem={renderItem}
       keyExtractor={item => item.id}
    />
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:30,
    color:'white',
    padding:2,
  },
  item: {
    flexDirection:'row',
    justifyContent:'space-between',
    display:'flex',
    backgroundColor: 'transparent',
    padding: 20,
    color:'white',
    marginVertical: 8,
    borderBottomWidth: 2, // Only bottom border
    borderBottomColor: '#333', // Border color
    marginHorizontal: 16,
  },
});