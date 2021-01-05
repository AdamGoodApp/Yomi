import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { BlurView } from 'expo-blur';

const TabBar = ({ state, descriptors, navigation, login }: any) => {
  return (
    <BlurView intensity={100} tint='dark' style={{...styles.container, display: !login ? 'block' : 'none'}}>
      {state.routes.map((route: any, index: number) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            key={index}
          >
            <Text style={{ color: isFocused ? '#0A84FF' : '#8E8E93' }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </BlurView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 80,
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default TabBar;