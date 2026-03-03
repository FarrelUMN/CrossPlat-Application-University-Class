import { useState } from "react";
import { Stack } from "expo-router";
import { Text, View, ScrollView, Image } from "react-native";
import { IconButton } from "react-native-paper";
import styles from "./appstyle";
import userData from "./data.json";




export default function Index() {
  const [users, setUsers] = useState(userData);

  const hideUser = (indexToRemove : number) => {
    setUsers(users.filter((_, index : number) => index !== indexToRemove));
  };

  return (
    <>
      <Stack.Screen options={{ title: "User List" }} />

      <ScrollView>
        {users.map((user, index) => (
          <View style={styles.container} key={index}>
            <View style={styles.card}>

              <IconButton
                icon="close"  
                size={18}
                onPress={() => hideUser(index)}
                style={styles.hideButton}
              />

              <Image
                source={{ uri: user.fotourl }}
                style={styles.avatar}
              />

              <View>
                <Text style={styles.boldtext}>{user.name}</Text>
                <Text>{user.email}</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </>
  );
}