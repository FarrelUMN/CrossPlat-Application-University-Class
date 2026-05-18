import {Button,Text,View,TextInput,} from 'react-native';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store';
import {increment,decrement,setName,setAge,} from './counterSlice';

const Counter = () => {
  const dispatch = useDispatch();

  const { value, name } = useSelector(
    (state: RootState) => state.counter
  );

  const [inputname, setInputName] =
    useState('');

  return (
    <View>
      <Text>
        Hello my name is {name} {'\n'}
        and my age is {value}
      </Text>

      <TextInput
        placeholder="Anonymous"
        onChangeText={setInputName}
        style={{
          borderWidth: 1,
          margin: 10,
          padding: 5,
        }}
      />

      <Text>{value}</Text>

      <Button
        title="Decrement"
        onPress={() => dispatch(decrement())}
      />

      <Button
        title="Increment"
        onPress={() => dispatch(increment())}
      />

      <Button
        title="Pass Data"
        onPress={() => {
          dispatch(setName(inputname));
          dispatch(setAge(value));
        }}
      />
    </View>
  );
};

export default Counter;