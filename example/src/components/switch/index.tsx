import { useToggleState } from '@react-stately/toggle';
import React, { useRef } from 'react';
import { StyleSheet, Text, View, Animated, Platform } from 'react-native';
import { useSwitch, AriaInputWrapper } from 'react-native-aria';

const calculateDimensions = (size: any) => {
  switch (size) {
    case 'small':
      return {
        width: 40,
        padding: 10,
        circleWidth: 15,
        circleHeight: 15,
        translateX: 22,
      };
    case 'large':
      return {
        width: 70,
        padding: 20,
        circleWidth: 30,
        circleHeight: 30,
        translateX: 38,
      };
    default:
      return {
        width: 46,
        padding: 12,
        circleWidth: 18,
        circleHeight: 18,
        translateX: 26,
      };
  }
};

const defaultProps = {
  isOn: false,
  onColor: '#4cd137',
  offColor: '#ecf0f1',
  size: 'medium',
  labelStyle: {},
  thumbOnStyle: {},
  thumbOffStyle: {},
  trackOnStyle: {},
  trackOffStyle: {},
  icon: null,
  disabled: false,
  animationSpeed: 300,
  useNativeDriver: true,
  circleColor: 'white',
};

export function Switch(origProps: any) {
  const props = {
    ...defaultProps,
    ...origProps,
  };

  const offsetX = useRef(new Animated.Value(0));
  const dimensions = useRef(calculateDimensions(props.size));

  const createToggleSwitchStyle = () => [
    {
      justifyContent: 'center',
      width: dimensions.current.width,
      borderRadius: 20,
      padding: dimensions.current.padding,
      backgroundColor: props.isOn ? props.onColor : props.offColor,
    },
    props.isOn ? props.trackOnStyle : props.trackOffStyle,
  ];

  const createInsideCircleStyle = () => [
    {
      alignItems: 'center',
      justifyContent: 'center',
      margin: Platform.OS === 'web' ? 0 : 4,
      left: Platform.OS === 'web' ? 4 : 0,
      position: 'absolute',
      backgroundColor: props.circleColor,
      transform: [{ translateX: offsetX.current }],
      width: dimensions.current.circleWidth,
      height: dimensions.current.circleHeight,
      borderRadius: dimensions.current.circleWidth / 2,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.2,
      shadowRadius: 2.5,
      elevation: 1.5,
    },
    props.isOn ? props.thumbOnStyle : props.thumbOffStyle,
  ];

  const { isOn, icon } = props;

  const toValue = isOn
    ? dimensions.current.width - dimensions.current.translateX
    : 0;

  Animated.timing(offsetX.current, {
    toValue,
    duration: props.animationSpeed,
    useNativeDriver: props.useNativeDriver,
  }).start();

  return (
    <View style={styles.container}>
      <View style={[...createToggleSwitchStyle(), { marginBottom: 5 }]}>
        <Animated.View style={createInsideCircleStyle()}>{icon}</Animated.View>
      </View>
      <Text>{isOn ? 'on' : 'off'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  labelStyle: {
    marginHorizontal: 10,
  },
});

export function ControlledSwitch() {
  const state = useToggleState();
  const inputRef = useRef(null);
  let { inputProps } = useSwitch(
    { accessibilityLabel: 'Example switch', accessibilityHint: 'Switch hint' },
    state,
    inputRef
  );
  return (
    <AriaInputWrapper {...inputProps} ref={inputRef}>
      <Switch isOn={state.isSelected} onToggle={state.toggle} />
    </AriaInputWrapper>
  );
}
