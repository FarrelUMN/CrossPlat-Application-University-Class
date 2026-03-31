import { useState } from "react";
import { Link, Stack } from "expo-router";
import { View, ScrollView, TouchableOpacity} from "react-native";
import { IconButton ,Text ,Card } from "react-native-paper";
import styles from "./appstyle";
import userData from "./data.json";




export default function userlist() {
  const [users, setUsers] = useState(userData);

  const hideUser = (indexToRemove : number) => {
    setUsers(users.filter((_, index : number) => index !== indexToRemove));
  };

  const appearUsers = () => {
    setUsers(userData);
  };

  return (
    <>
      <Stack.Screen options={{ title: "User List" }} />

      <IconButton
        icon="refresh"
        size={24}
        onPress={appearUsers}
      />

      <ScrollView>
        {users.map((user, index) => (
          <Card style={styles.container} key={index}>
            <Link href={{
              pathname:"/profile",
              params: {userName: user.name, userEmail: user.email, userImage: user.fotourl }
            }} push asChild>

            <TouchableOpacity style={styles.card}>

              <Card.Content>

              <View>
                <Text variant="titleMedium" style={styles.boldtext}>{user.email}</Text>
              </View>
              </Card.Content>
              <IconButton
                icon="close"  
                size={18}
                onPress={() => hideUser(index)}
                style={styles.hideButton}
                />
            </TouchableOpacity>
          </Link>
        </Card>
        ))}
      </ScrollView>
    </>
  );
}