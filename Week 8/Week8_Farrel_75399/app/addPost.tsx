import { useState } from "react";
import { View, TextInput, Button, Text } from "react-native";
import { postData } from "@/api/api";

export default function AddPost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = () => {
    postData({
      title,
      body,
      userId: 1,
    }).then((res) => {
      console.log(res.data);
      alert("Post submitted!");
    });
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Title</Text>
      <TextInput
        value={title}
        onChangeText={setTitle}
        style={{ borderWidth: 1, marginBottom: 10 }}
      />

      <Text>Body</Text>
      <TextInput
        value={body}
        onChangeText={setBody}
        style={{ borderWidth: 1, marginBottom: 10 }}
      />

      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
}