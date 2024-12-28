import { StyleSheet, Image, Platform, TextInput,Text ,View,TouchableOpacity} from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import ProgressBar from '../../components/ProgressContainer'
import { Colors } from '@/constants/Colors';
import DropdownComponent from '../../components/DropdownComponent'
// import { View } from 'react-native-reanimated/lib/typescript/Animated';
 
export default function Budget() {

  
  
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Budget</ThemedText>
      </ThemedView>
      <ThemedText>This app includes strategic templates to budget.</ThemedText>
      <TextInput placeholder='  ₹ Income' style={styles.budget}></TextInput>
 <DropdownComponent></DropdownComponent>

 
    {/* <Collapsible title="Savings">
       
        <View style={styles.subinput}> 
        <Text  style={{color:'#fff'}}>Emergency Savings</Text>
        <TextInput style={styles.inputstyle}></TextInput>
        </View>

        <View style={styles.subinput}> 
        <Text  style={{color:'#fff'}}>Retirement Savings</Text>
        <TextInput style={styles.inputstyle}></TextInput>
        </View>

        <View style={styles.subinput}> 
        <Text  style={{color:'#fff'}}>Fixed Deposits</Text>
        <TextInput style={styles.inputstyle}></TextInput>
        </View>
 
      </Collapsible>
      <Collapsible title="Android, iOS, and web support">
        <ThemedText>
          You can open this project on Android, iOS, and the web. To open the web version, press{' '}
          <ThemedText type="defaultSemiBold">w</ThemedText> in the terminal running this project.
        </ThemedText>
      </Collapsible>
      <Collapsible title="Images">
        <ThemedText>
          For static images, you can use the <ThemedText type="defaultSemiBold">@2x</ThemedText> and{' '}
          <ThemedText type="defaultSemiBold">@3x</ThemedText> suffixes to provide files for
          different screen densities
        </ThemedText>
        <Image source={require('@/assets/images/react-logo.png')} style={{ alignSelf: 'center' }} />
        <ExternalLink href="https://reactnative.dev/docs/images">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Custom fonts">
        <ThemedText>
          Open <ThemedText type="defaultSemiBold">app/_layout.tsx</ThemedText> to see how to load{' '}
          <ThemedText style={{ fontFamily: 'SpaceMono' }}>
            custom fonts such as this one.
          </ThemedText>
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/versions/latest/sdk/font">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Light and dark mode components">
        <ThemedText>
          This template has light and dark mode support. The{' '}
          <ThemedText type="defaultSemiBold">useColorScheme()</ThemedText> hook lets you inspect
          what the user's current color scheme is, and so you can adjust UI colors accordingly.
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Animations">
        <ThemedText>
          This template includes an example of an animated component. The{' '}
          <ThemedText type="defaultSemiBold">components/HelloWave.tsx</ThemedText> component uses
          the powerful <ThemedText type="defaultSemiBold">react-native-reanimated</ThemedText>{' '}
          library to create a waving hand animation.
        </ThemedText>
        {Platform.select({
          ios: (
            <ThemedText>
              The <ThemedText type="defaultSemiBold">components/ParallaxScrollView.tsx</ThemedText>{' '}
              component provides a parallax effect for the header image.
            </ThemedText>
          ),
        })}
      </Collapsible>  */}
      <TouchableOpacity style={styles.button} >
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
      <ProgressBar progress={3} goal={10}></ProgressBar>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  buttonText:{
color:'white'
  },
  button:{
    marginTop:'50',
    // bottom:16,
    // right:'8',
    width:'80%',
    padding:'10',
    alignItems:'center',
    alignSelf:'center',
    borderRadius:'0.4em',
    justifyContent:'center',
    backgroundColor:'indigo'
  },

  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  subinput:{display:'flex',
    justifyContent:'space-between',
    flexDirection:'row',
    alignItems:'center',
    // borderBottomWidth: 2, // Only bottom border
    // borderBottomColor: '#333',
    // padding:'20px',
    margin:'20'
  }, 
  
  budget: {
    width: '80%',
    fontSize: 19,
    
    paddingVertical: 10,
    color:'#fff',
    minWidth:20,
    alignSelf:'center',
    borderBottomWidth: 2, // Only bottom border
    borderBottomColor: '#333', // Border color
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
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
