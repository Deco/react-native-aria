// //@ts-nocheck
// import React from 'react';
// import { useMenuTriggerState } from '@react-stately/menu';
// import { useTreeState } from '@react-stately/tree';
// import { mergeProps } from '@react-aria/utils';
// import {
//   AriaView,
//   AriaButton,
//   useOverlayPosition,
//   useMenuTrigger,
//   useButton,
//   FocusScope,
//   useMenu,
//   useMenuItem,
//   useFocus,
// } from 'react-native-aria';
// import {
//   Modal,
//   TouchableWithoutFeedback,
//   View,
//   Text,
//   StyleSheet,
// } from 'react-native';

// export function MenuButton(props) {
//   // Create state based on the incoming props
//   let state = useMenuTriggerState(props);

//   // Get props for the menu trigger and menu elements
//   let ref = React.useRef();
//   let overlayRef = React.useRef();
//   let { menuTriggerProps, menuProps } = useMenuTrigger({}, state, ref);

//   const { overlayProps } = useOverlayPosition({
//     placement: 'bottom',
//     targetRef: ref,
//     overlayRef,
//     isOpen: state.isOpen,
//     offset: 10,
//   });

//   // Get props for the button based on the trigger props from useMenuTrigger
//   let { buttonProps } = useButton(menuTriggerProps, ref);

//   return (
//     <View style={{ alignSelf: 'center' }}>
//       <AriaButton
//         {...buttonProps}
//         ref={ref}
//         accessibilityLabel="Click here to perform some actions"
//       >
//         <View
//           style={{
//             fontSize: 14,
//             flexDirection: 'row',
//             borderWidth: 1,
//             justifyContent: 'space-around',
//             paddingHorizontal: 10,
//             paddingVertical: 5,
//           }}
//         >
//           <Text>{props.label}</Text>
//           <Text aria-hidden="true" style={{ paddingLeft: 5 }}>
//             ▼
//           </Text>
//         </View>
//       </AriaButton>
//       <Modal visible={state.isOpen} onRequestClose={state.close} transparent>
//         <CloseButton onClose={state.close} />
//         <AriaView
//           style={{
//             position: 'absolute',
//             ...overlayProps.style,
//           }}
//           ref={overlayRef}
//         >
//           <MenuPopup
//             {...props}
//             domProps={menuProps}
//             autoFocus={state.focusStrategy}
//             onClose={state.close}
//           />
//         </AriaView>
//       </Modal>
//     </View>
//   );
// }

// function CloseButton(props) {
//   const [mount, setMount] = React.useState(false);

//   React.useEffect(() => {
//     setTimeout(() => {
//       setMount(true);
//     }, 500);
//   }, []);
//   return mount ? (
//     <TouchableWithoutFeedback
//       onPress={props.onClose}
//       accessible={false}
//       importantForAccessibility={'no-hide-descendants'}
//     >
//       <View style={StyleSheet.absoluteFill}></View>
//     </TouchableWithoutFeedback>
//   ) : null;
// }

// function MenuPopup(props) {
//   // Create menu state based on the incoming props
//   let state = useTreeState({ ...props, selectionMode: 'none' });

//   // Get props for the menu element
//   let ref = React.useRef();
//   let { menuProps } = useMenu(props, state, ref);

//   return (
//     <FocusScope restoreFocus>
//       <AriaView {...mergeProps(menuProps, props.domProps)} ref={ref}>
//         <View
//           style={{
//             backgroundColor: 'lightgray',
//           }}
//         >
//           {[...state.collection].map((item) => (
//             <MenuItem
//               key={item.key}
//               item={item}
//               state={state}
//               onAction={props.onAction}
//               onClose={props.onClose}
//             />
//           ))}
//         </View>
//       </AriaView>
//     </FocusScope>
//   );
// }

// export function MenuItem({ item, state, onAction, onClose }) {
//   // Get props for the menu item element
//   let ref = React.useRef();
//   let { menuItemProps } = useMenuItem(
//     {
//       key: item.key,
//       isDisabled: item.isDisabled,
//       onAction,
//       onClose,
//     },
//     state,
//     ref
//   );

//   // Handle focus events so we can apply highlighted
//   // style to the focused menu item
//   let [isFocused, setFocused] = React.useState(false);
//   let { focusProps } = useFocus({ onFocusChange: setFocused });

//   return (
//     <AriaButton {...mergeProps(menuItemProps, focusProps)} ref={ref}>
//       <View
//         style={{
//           paddingVertical: 10,
//           paddingHorizontal: 20,
//           backgroundColor: isFocused ? 'darkgray' : null,
//         }}
//       >
//         <Text>{item.rendered}</Text>
//       </View>
//     </AriaButton>
//   );
// }
