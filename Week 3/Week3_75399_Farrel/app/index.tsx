import { useState } from 'react';
import { StyleSheet, Text, View } from "react-native";
import Counter from './Counter';

export default function Index() {
  const[count, SetCount] = useState(0);
  const[name, setName] = useState("Anonymous");
  const handlerincrement = () =>{
    SetCount(count+1);
  };
  const handlerDecrease = () =>{
    SetCount(count-1);
  };
  const handlerdata = (newname: string, age: number) => {
    setName(newname);
    SetCount(age);
  };
  return (
    <View
      style={styles.container}>
      <Counter
        name={name} 
        value={count}
        handlerDecrease = {handlerDecrease}
        handlerincrement = {handlerincrement}
        handlerdata={handlerdata}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  text: {
    textAlign:"center"
  },
  container:{
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  }
})