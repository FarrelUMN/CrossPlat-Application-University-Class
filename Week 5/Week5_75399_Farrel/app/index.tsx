import {Link, Stack} from "expo-router";
import {View} from "react-native";

export default function App(){
  return(
    <>
    <Stack.Screen options={{title:"Welcome"}}/>
    <View style={{flex:1, alignItems:"center", justifyContent:"center"}}>
      <Link href="/home">Go To Navigation List</Link>
    </View>
    </>
  );
}