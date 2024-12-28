import React, { useState, useRef, useEffect } from 'react';
import { View, Image, Animated, StyleSheet, PanResponder, Dimensions } from 'react-native';

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

  const rotateAndTranslate = {
    transform: [
      { rotate },
      ...position.getTranslateTransform(),
    ],
  };

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderMove: (evt, gestureState) => {
        position.setValue({ x: gestureState.dx, y: gestureState.dy });
      },
      onPanResponderRelease: (evt, gestureState) => {
        // Optional: add logic to handle releasing the gesture.
      },
    })
  ).current;

  const cards = [
    { id: 1, src: 'https://i.pinimg.com/originals/32/22/73/3222736fe53d6b922b0e2c8380747854.jpg' },
    { id: 2, src: 'https://image.lexica.art/full_webp/87a1ef01-27eb-42fa-99b6-3ce9833a9ade' },
    { id: 3, src: 'https://i.pinimg.com/originals/3a/25/d4/3a25d4c633cf0b4b8bb3af3adb91d9a4.jpg' },
  ];

  return (
    <View style={{ flex: 1 }}>
      <View style={{ height: 60 }}></View>

      <View style={{ flex: 1 }}>
        {cards.map((item, i) => {
          if (i < currentIndex) {
            return null; // Skip rendering cards before the current index
          }

          // Render current card with pan responder
          return (
            <Animated.View
              key={item.id}
              style={[rotateAndTranslate, styles.animatedContainer]}
              {...panResponder.panHandlers}
            >
              <Image
                source={{ uri: item.src }} // Dynamic image source
                style={styles.image}
              />
            </Animated.View>
          );
        })}
      </View>

      <View style={{ height: 60 }}></View>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  animatedContainer: {
    height: SCREEN_HEIGHT - 10,
    width: SCREEN_WIDTH ,
    padding: 20,
    // position: 'absolute',
  },
  image: {
    flex: 1,
    height: null,
    width: null,
    resizeMode: 'cover',
    borderRadius: 20,
  },
});

export default Cards;
