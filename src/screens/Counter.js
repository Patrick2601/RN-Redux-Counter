/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
// /* eslint-disable no-unused-vars */
// import React from 'react';
// import {
//   Button,
//   SafeAreaView,
//   StyleSheet,
//   Text,
//   View,
//   Linking,
// } from 'react-native';
// import {useDispatch, useSelector} from 'react-redux';
// import Buttons from '../components/Buttons';
// import {increment, decrement} from '../Redux/CounterSlice';
// // import {Decrement, Increment} from '../Redux/Action';

// function Counter() {
//   const data = useSelector(state => state.Counter);
//   const dispatch = useDispatch();
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Buttons name="Increment" onPress={() => dispatch(increment())} />
//       <Text>{data}</Text>
//       <Buttons name="Decrement" onPress={() => dispatch(decrement())} />
//     </View>
//   );
// }

// export default Counter;

// import {createSlice} from '@reduxjs/toolkit';
// const initialState = {
//   value: 0,
// };

// export const counterSlice = createSlice({
//   name: 'counter',
//   initialState,
//   reducers: {
//     increment: state => {
//       state.count += 1;
//     },
//     decrement: state => {
//       state.count -= 1;
//     },
//     incrementByAmount: (state, action) => {
//       state.count += action.payload;
//     },
//   },
// });

// export const {increment, decrement, incrementByAmount} = counterSlice.actions;

// export default counterSlice.reducer;

//-------------------------------------------------------------------------------//

// import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
// import {useSelector, useDispatch} from 'react-redux';
// import {increment, decrement} from '../Redux/Actions/CountAction';
// export default function Home() {
//   const dispatch = useDispatch();
//   const count = useSelector(store => store.count.count);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title_text}>Counter App</Text>
//       <Text style={styles.counter_text}>{count}</Text>

//       <TouchableOpacity
//         onPress={() => dispatch(increment())}
//         style={styles.btn}>
//         <Text style={styles.btn_text}> Increment </Text>
//       </TouchableOpacity>

//       <TouchableOpacity
//         onPress={() => dispatch(decrement())}
//         style={{...styles.btn, backgroundColor: '#6e3b3b'}}>
//         <Text style={styles.btn_text}> Decrement </Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     flexDirection: 'column',
//     padding: 50,
//   },
//   title_text: {
//     fontSize: 40,
//     fontWeight: '900',
//     marginBottom: 55,
//   },
//   counter_text: {
//     fontSize: 35,
//     fontWeight: '900',
//     margin: 15,
//   },
//   btn: {
//     backgroundColor: '#086972',
//     padding: 10,
//     margin: 10,
//     borderRadius: 10,
//   },
//   btn_text: {
//     fontSize: 23,
//     color: '#fff',
//   },
// });

//-=-=-=-=-=-=-=-==-=-=-==-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=//

import React from 'react';
import {Button, View, Text, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from '../Redux/Reducers/CountReducer';

export default function Counter() {
  const count = useSelector(state => state.count.value);
  const dispatch = useDispatch();

  return (
    <View style={{flex: 1}}>
      <View style={styles.view}>
        <Button title="Increment value" onPress={() => dispatch(increment())} />

        <Text>{count}</Text>
        <Button title="Decrement value" onPress={() => dispatch(decrement())} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
