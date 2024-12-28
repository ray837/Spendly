import React, { useState } from 'react';
import { StyleSheet, Text, View ,Linking,Alert,TextInput} from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { ExternalLink } from '@/components/ExternalLink';
 
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import AntDesign from '@expo/vector-icons/AntDesign';
import {dataprovider} from '../Data/strategy'
import { Collapsible } from '@/components/Collapsible';
import { useSelector, useDispatch } from 'react-redux';
import { setUserData } from '../State/store'; 
 const strategies= dataprovider();
const data = [
  { label: 'Zero-Based Budgeting', value: '1', description: 'Allocate every dollar to a category until the balance is zero.', author: 'Peter Pyhrr' },
  { label: '50/30/20 Rule', value: '2', description: 'Divide income into needs (50%), wants (30%), and savings (20%).', author: 'Elizabeth Warren' },
  { label: 'Envelope System', value: '3', description: 'Use cash in envelopes for specific spending categories.', author: 'Will Rogers' },
  { label: 'Pay Yourself First', value: '4', description: 'Save a portion of income before budgeting for expenses.', author: 'George S. Clason' },
  { label: 'The 80/20 Rule (Pareto Principle)', value: '5', description: 'Focus on the 20% of spending that impacts 80% of results.', author: 'Vilfredo Pareto' },
  { label: 'Line-Item Budgeting', value: '6', description: 'Track income and expenses in detail for each category.', author:"Budget Expert" },
  { label: 'Incremental Budgeting', value: '7', description: 'Adjust last year’s budget based on current needs.', author: "Finance Analyst" },
  { label: 'Priority-Based Budgeting', value: '8', description: 'Allocate funds based on priority levels of needs and goals.', author: "Financial Planner" },
  { label: 'Activity-Based Budgeting', value: '9', description: 'Budget based on specific activities and their costs.', author:  "Cost Analyst" },
  { label: 'Cash Flow Budgeting', value: '10', description: 'Track cash inflows and outflows to manage liquidity.', author: "Finance Expert" },
  { label: 'Rolling Budgeting', value: '11', description: 'Continuously update the budget as new data becomes available.', author: "Budget Planner" },
  { label: 'Proportional Budgeting', value: '12', description: 'Divide income into fixed percentages for savings, spending, and debt.', author: "Finance Expert" },
  { label: 'Reverse Budgeting', value: '13', description: 'Save first, then spend what’s left on expenses.', author: "Financial Planner" },
  { label: 'The Kakeibo Method', value: '14', description: 'A Japanese approach emphasizing mindful spending and savings.', author: 'Hani Motoko' },
  { label: 'Reverse Engineering (Goal-Based Budgeting)', value: '15', description: 'Start with goals and work backward to plan spending.', author: "Financial Strategist" },
  { label: 'The Debt Snowball Method', value: '16', description: 'Pay off smallest debts first for quick wins.', author: 'Dave Ramsey' },
  { label: 'The Debt Avalanche Method', value: '17', description: 'Pay off highest-interest debts first to save money over time.', author: "Financial Expert" },
  { label: 'The 30-Day Rule', value: '18', description: 'Wait 30 days before making non-essential purchases.', author: "Finance Guru" },
  { label: 'Sinking Fund Method', value: '19', description: 'Save gradually for future expenses or large purchases.', author: "Financial Advisor" },
  { label: 'Digital Envelope System', value: '20', description: 'A digital version of the traditional envelope budgeting system.', author: "Finance Expert" },
  { label: 'Fifty/Fifty Savings', value: '21', description: 'Split extra income evenly between savings and spending.', author: "Finance Expert" },
  { label: 'The "No Budget" Budget', value: '22', description: 'Set broad spending limits without tracking every expense.', author: "Finance Expert" },
  { label: 'The Parkinson’s Law Budget', value: '23', description: 'Limit spending by reducing available funds.', author: 'C. Northcote Parkinson' },
  { label: 'The Freedom Budget', value: '24', description: 'Focus on financial freedom and future goals.', author: "Finance Expert" },
  { label: 'Personalized Goal-Based Budgeting', value: '25', description: 'Tailor your budget to specific life and financial goals.', author: "Financial Planner" },
  { label: 'Bacon & Eggs Budgeting', value: '26', description: 'Separate recurring expenses (bacon) from discretionary spending (eggs).', author: "Financial Coach" },
  { label: 'Zero-Sum Budgeting', value: '27', description: 'Assign all income to expenses, savings, or debt until zero remains.', author: "Budgeting Expert" },
  { label: 'The “Jar System” (Five Jars Method)', value: '28', description: 'Divide money into five jars for spending, saving, and investing.', author: 'T. Harv Eker' },
  { label: 'Triage Budgeting', value: '29', description: 'Prioritize essential expenses during financial hardship.', author: "Finance Expert" },
];

const DropdownComponent = () => {
  const dispatch = useDispatch(); 
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [strategy,setstrat]=useState( {
    'strategy': {
      'Needs(50%)': {
        'Essentials': '',
        'Housing': '',
        'Utilities': '',
        'Groceries': '',
        'Transportation': '',
        'Health Insurance': '',
      },
      'Wants(30%)': {
        'Entertainment': '',
        'Dining Out': '',
        'Vacations': '',
        'Hobbies': '',
      },
      'Savings(20%)': {
        'Retirement Savings': '',
        'Investments': '',
        'Emergency Fund': '',
        'Short-Term Savings': '',
      }
    }
  } );

  const [description,setdesc]=useState('Choose budget strategy suitable to you.');
  const [author,setauthor]=useState('/Finance')
  const openWebsite = async (url) => {
    try {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert(`Don't know how to open this URL: ${url}`);
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to open URL');
    }
  };
  
  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: 'white' }]}>
          Strategy
        </Text>
      );
    }
    return null;
  };
// console.log(strategy)
  return (
    <View style={styles.container}>
      {renderLabel()}
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: '#333' }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? 'Select Strategy' : '...'}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item.value);
          setdesc(item.description);
          setstrat(strategies[item.label]);
          dispatch(setUserData(strategies[item.label]));
          setauthor('/author/'+item.author+'/'+item.value);
          setIsFocus(false);
        }}
        renderLeftIcon={() => (
          <AntDesign
            style={styles.icon}
            color={isFocus ? 'grey' : 'white'}
            name="Safety"
            size={20}
          />
        )}
      />

      {/* <Text style={styles.describe} > {description}  <Text onPress={()=>openWebsite('https://thinktanktribe.netlify.app/Finance')} style={{textDecorationLine:'underline'}}>Know more</Text></Text> */}
      <Text style={styles.describe} > {description} 
        <ExternalLink href={"https://thinktanktribe.netlify.app"+author}>
          <ThemedText type="link" style={{fontSize:11}}>
            &nbsp;Learn more
            </ThemedText>
        </ExternalLink> 
        </Text>
        
        <View style={{marginTop:'10'}}>
      
      {strategy &&
        Object.keys(strategy['strategy']).map(topKey => (
          <View style={{marginTop:'40'}}>
          <Collapsible key={topKey} title={topKey}  >
            
            {Object.keys(strategy['strategy'][topKey]).map(subKey => (
               subKey !== 'Total' && (
                <View style={styles.subinput} key={subKey}>
                  <Text style={{color:'#fff'}}>{subKey}</Text>
                  <TextInput style={styles.inputstyle} />
                </View>
              )
            ))}
          </Collapsible>
          </View>
        ))}
    </View>
    </View>
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    color:'white',
    padding: 16
  },
  inputstyle: {
    width: '40%',
    fontSize: 16,
    paddingVertical: 10,
    color:'#fff',
    minWidth:20,
    
    borderBottomWidth: 2, // Only bottom border
    borderBottomColor: '#333', // Border color
  }, 
   subinput:{display:'flex',
    justifyContent:'space-between',
    flexDirection:'row',
    alignItems:'center',
    // alignSelf:'center'
    // borderBottomWidth: 2, // Only bottom border
    // borderBottomColor: '#333',
    // padding:'20px',
    // margin:'20'
  }, 
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
     color:'white',
    // backgroundColor: '#333',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 12,
  },
  placeholderStyle: {
    fontSize: 16,
    color:'white'
  },
  selectedTextStyle: {
    fontSize: 16,
     color:'white'
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  describe:{
    fontSize:12,
    color:'#fff',
     
    marginTop:'10',
  }
});
