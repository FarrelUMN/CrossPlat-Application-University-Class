import { Text, ScrollView, Image, TextInput, StyleSheet } from "react-native";

export default function Index() {
  return (
    <ScrollView contentContainerStyle={style.container}>
      <Text style={{ fontSize: 20 , fontWeight : "bold"}}>This is Weekly Assingment Week 2 Title{"\n"}</Text>
      <TextInput placeholder="This Text input for is tutorial" />
      <Text style={{ fontSize:15 }}>{"\n"}List of person{"\n"}</Text>     
      <Image source={require('../assets/images/person.jpg')}
      style={{width: 150, height: 220}}
      />
      <Text style={style.text}>John Smith{"\n"}Smith@Example.com</Text>
      <Image source={require('../assets/images/person.jpg')}
      style={{width: 150, height: 220}}
      />
      <Text style={style.text}>John Smith{"\n"}Smith@Example.com{"\n"}</Text>
      <Image source={require('../assets/images/person.jpg')}
      style={{width: 150, height: 220}}
      />
      <Text style={style.text}>John Smith{"\n"}Smith@Example.com{"\n"}</Text>
      <Image source={require('../assets/images/person.jpg')}
      style={{width: 150, height: 220}}
      />
      <Text style={style.text}>John Smith{"\n"}Smith@Example.com{"\n"}</Text>
      <Image source={require('../assets/images/person.jpg')}
      style={{width: 150, height: 220}}
      />
      <Text style={style.text}>John Smith{"\n"}Smith@Example.com{"\n"}</Text>
      <Image source={require('../assets/images/person.jpg')}
      style={{width: 150, height: 220}}
      />
      <Text style={style.text}>John Smith{"\n"}Smith@Example.com{"\n"}</Text>
      <Image source={require('../assets/images/person.jpg')}
      style={{width: 150, height: 220}}
      />
      <Text style={style.text}>John Smith{"\n"}Smith@Example.com{"\n"}</Text>
      <Image source={require('../assets/images/person.jpg')}
      style={{width: 150, height: 220}}
      />
      <Text style={style.text}>John Smith{"\n"}Smith@Example.com{"\n"}</Text>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  text: {
    textAlign:"center"
  },
  container:{
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  }
})
