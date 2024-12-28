import React, { useState, useRef } from 'react';
import { View, Image, Animated, StyleSheet, PanResponder, Dimensions, Text } from 'react-native';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { ThemedText } from './ThemedText';
import { useSelector, useDispatch } from 'react-redux';
const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

const Cards: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const position = useRef(new Animated.ValueXY()).current;

  const rotate = position.x.interpolate({
    inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
    outputRange: ['-10deg', '0deg', '10deg'],
    extrapolate: 'clamp',
  });

  const likeOpacity = position.x.interpolate({
    inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
    outputRange: [0, 0, 1],
    extrapolate: 'clamp',
  });

  const dislikeOpacity = position.x.interpolate({
    inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
    outputRange: [1, 0, 0],
    extrapolate: 'clamp',
  });

  const nextCardOpacity = position.x.interpolate({
    inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
    outputRange: [1, 0, 1],
    extrapolate: 'clamp',
  });

  const nextCardScale = position.x.interpolate({
    inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
    outputRange: [1, 0.8, 1],
    extrapolate: 'clamp',
  });

  const rotateAndTranslate = {
    transform: [{ rotate }, ...position.getTranslateTransform()],
  };

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gestureState) => {
        position.setValue({ x: gestureState.dx, y: gestureState.dy });
      },
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dx > 120) {
          Animated.spring(position, {
            toValue: { x: SCREEN_WIDTH + 100, y: gestureState.dy },
            useNativeDriver: false,
          }).start(() => {
            setCurrentIndex((prevIndex) => prevIndex + 1);
            position.setValue({ x: 0, y: 0 });
          });
        } else if (gestureState.dx < -120) {
          Animated.spring(position, {
            toValue: { x: -SCREEN_WIDTH - 100, y: gestureState.dy },
            useNativeDriver: false,
          }).start(() => {
            setCurrentIndex((prevIndex) => prevIndex + 1);
            position.setValue({ x: 0, y: 0 });
          });
        } else {
          Animated.spring(position, {
            toValue: { x: 0, y: 0 },
            friction: 4,
            useNativeDriver: false,
          }).start();
        }
      },
    })
  ).current;

  // const cards = [
  //   { id: 1, src: 'https://i.pinimg.com/originals/32/22/73/3222736fe53d6b922b0e2c8380747854.jpg' },
  //   { id: 2, src: 'https://image.lexica.art/full_webp/87a1ef01-27eb-42fa-99b6-3ce9833a9ade' },
  //   { id: 3, src: 'https://i.pinimg.com/originals/3a/25/d4/3a25d4c633cf0b4b8bb3af3adb91d9a4.jpg' },
  // ];

   
  // const cards = [
  //   { id: 1, src: require('../assets/images/card2.png') },
  //   { id: 2, src: require('../assets/images/card1.png') },
  //   { id: 3, src: 'https://i.pinimg.com/originals/3a/25/d4/3a25d4c633cf0b4b8bb3af3adb91d9a4.jpg' },
  // ];

  const cards = [
    { id: 1, color:'#bbaf4f' },
    { id: 2,color:'#3b0671'},
    { id: 3, color:'#8ce0f1' },
    { id: 4, color:'#8c52ff' },
    
  ];
  const generateRandomColor = () => {
    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    return randomColor;
  };
  const types=useSelector((state) => state.user.userData); 

  return (
    <View style={{ flex: 1 }}>
      <View style={{ height: 60 }}></View>

      <View style={{ flex: 1 }}>
      <IconSymbol size={28} name="history" color={'grey'} style={{alignSelf:'center',position:'absolute',zIndex:1,marginTop:160}}/>
      <Text style={{color:'#fff',alignSelf:'center',position:'absolute',zIndex:1,marginTop:200}}>Your Budget is upto date</Text>
        {cards.map((item, i) => {
          // console.log(i)
          if (i < currentIndex) { 
            return null; // Skip rendering cards before the current index
          }else if(i==currentIndex){
            // console.log(currentIndex)
          // Render current card with pan responder
          return (
            <Animated.View
              key={item.id}
              style={[rotateAndTranslate, styles.animatedContainer]}
              {...panResponder.panHandlers}
            >

              <Animated.View style={{opacity:likeOpacity,transform:[{rotate:'-30deg'}],position:'absolute',top:50,left:40,zIndex:1000,padding:10}}> 
                <Text style={{color:'green',fontWeight:'800'}}> FOOD </Text>
              </Animated.View>
              <Animated.View style={{opacity:dislikeOpacity,transform:[{rotate:'30deg'}],position:'absolute',top:50,right:40,zIndex:1000,padding:10}}> 
                <Text style={{color:'red',fontWeight:'800'}}> INVESTMENT </Text>
              </Animated.View>
              {/* <Image
                source={{ uri: item.src }} // Dynamic image source
                style={styles.image}
                
              /> */}

{/* <Image
                source={  item.src } // Dynamic image source
                style={styles.image}
              /> */}


              <View style={{width:SCREEN_WIDTH-50,height:SCREEN_HEIGHT-100,backgroundColor:item.color,borderRadius:20,alignItems:'center',justifyContent:'center',padding:10}}>
              <Text style={{textAlign:'center',justifyContent:'center',color:'white',margin:'30px'}}>A/c *XX4837 credited by Rs 6.00 from goog-payments@axisbank. RRN: 669300573614. Not You? call 18602677777- IndusInd Bank</Text>
              <View style={{flexDirection:'row',justifyContent:'space-between',gap:10,margin:30}}>

              {types && 
  Object.keys(types['strategy']).map(topKey => (
                 <View> <IconSymbol size={28} name="circle" color={generateRandomColor()} style={{alignSelf:'center'}} ></IconSymbol><ThemedText style={{fontSize:12}}>{topKey}</ThemedText></View>
                 
                 ))}

                 {/* <View> <IconSymbol size={28} name="fastfood" color={'white'} style={{alignSelf:'center'}} ></IconSymbol><ThemedText></ThemedText></View>
                 <View> <IconSymbol size={28} name="fastfood" color={'white'} style={{alignSelf:'center'}} ></IconSymbol><ThemedText>Food</ThemedText></View>
                 <View> <IconSymbol size={28} name="fastfood" color={'white'} style={{alignSelf:'center'}} ></IconSymbol><ThemedText>Food</ThemedText></View> */}
                 </View>
                 
                 
                 </View>
            </Animated.View>
          );


        }else{

          return (
            <Animated.View
              key={item.id}
              style={[{opacity:nextCardOpacity,transform:[{scale:nextCardScale}]}, styles.animatedContainer]}
             
            >
              {/* <Image
                source={ item.src} // Dynamic image source
                style={styles.image}
              /> */}

 
<View style={{width:SCREEN_WIDTH-50,height:SCREEN_HEIGHT-100,backgroundColor:item.color,borderRadius:20,alignItems:'center',justifyContent:'center',padding:10}}>
              <Text style={{textAlign:'center',justifyContent:'center',color:'white',margin:'30px'}}>A/c *XX4837 credited by Rs 6.00 from goog-payments@axisbank. RRN: 669300573614. Not You? call 18602677777- IndusInd Bank</Text>
              <View style={{flexDirection:'row'}}>
                 <IconSymbol size={28} name="fastfood" color={'white'} style={{alignSelf:'center'}} ></IconSymbol>
                 </View>
                 
                
                 </View>
                 
            </Animated.View>
          );


        }
        }).reverse()
       
        
        
        
        }
      </View>

      <View style={{ height: 60 }}></View>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  animatedContainer: {
    zIndex:2,
    height: SCREEN_HEIGHT - 120,
    width: SCREEN_WIDTH ,
    padding: 20,
    position: 'absolute',
  },
  image: {
    flex: 1,
    height: null,
    width: null,
    // resizeMode: 'cover',
    borderRadius: 20,
  },
});

export default Cards;
