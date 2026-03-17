import { Text, View , StyleSheet } from "react-native";
import { useState } from "react";
import { CustomTextInput , NIMInput } from "./CustomTextinput";


export default function Index() {
  const [name, setName] = useState("");
  const [nim, setNIM] = useState("");
  const handleChangeMyName = (value: string) => {
    setName (value);
  }
  const handleChangeNIM = (value: string) => {
    setNIM(value);
  };

  return (
    <View style={styles.container}>
      <Text>Input Name</Text>
      <CustomTextInput input={name} onChange={handleChangeMyName} />
      <NIMInput input={nim} onChange={handleChangeNIM} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  backgroundColor: "#fff",
  alignItems: "center",
  justifyContent: "center",
  flex: 1,
  gap: 8
  }
})
