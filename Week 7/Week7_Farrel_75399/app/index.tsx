import {Link, Stack} from "expo-router";
import {useState,useEffect} from "react";
import {View, Text, StyleSheet, Dimensions} from "react-native";

export default function App(){
  const screenWidth = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height;
  const [orientation, setOrientation] = useState("portrait");

    useEffect(() => {
    const updateOrientation = () => {
      const { width, height } = Dimensions.get("window");

      if (width < height) {
        setOrientation("portrait");
      } else {
        setOrientation("landscape");
      }
    };

    const subscription = Dimensions.addEventListener("change", updateOrientation);

    return () => subscription?.remove(); 
  }, []);

  return(
    <>
    <Stack.Screen options={{title:"Welcome"}}/>
    <View style={styles.container}>
      <Text>Screen width: {screenWidth}</Text>
      <Link href="/home">Go To Navigation List</Link>
      <Text>Screen height: {screenHeight}</Text>
    </View>
    </>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  box: {
    height: 120,
    width: 120,
    backgroundColor: "#b53df1",
    borderRadius: 20,
  },
});