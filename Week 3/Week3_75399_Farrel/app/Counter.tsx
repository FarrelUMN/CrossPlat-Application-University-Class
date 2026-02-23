import { Button, Text, View, TextInput } from "react-native";
import { useState } from "react";

interface ICounter {
  handlerincrement: () => void;
  handlerDecrease: () => void;
  handlerdata: (name: string, age: number) => void;
  name: string;
  value: number;
}

const Counter = ({
  handlerincrement,
  handlerDecrease,
  handlerdata,
  value,
  name
}: ICounter) => {
  const [inputname, setinputname] = useState("");
  const [theages, settheages] = useState(value);

  return (
    <View>
      <Text> Hallo my name is {name}! {"\n"} and my age is {theages} </Text>
      <TextInput placeholder="Anonymous" onChangeText={setinputname} style={{ borderWidth: 1, margin: 10, padding: 5 }}/>
      <Text>{"\n"}{value}</Text>
      <Button title="Decrement" onPress={handlerDecrease} />
      <Button title="Increment" onPress={handlerincrement} />
      <Button title="Pass Data" onPress={() => {settheages(value); handlerdata(inputname, value);}} />
    </View>
  );
};

export default Counter;