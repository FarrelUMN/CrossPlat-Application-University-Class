import { useState } from "react";
import { Link, Stack } from "expo-router";
import { View, ScrollView, Image , TouchableOpacity} from "react-native";
import { IconButton ,Text ,Card } from "react-native-paper";
import styles from "./appstyle";
import userData from "./data.json";
import Animated, { FadeInUp, FadeOut ,LinearTransition } from 'react-native-reanimated';




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
          <Animated.View
          key={index}
          entering={FadeInUp.delay(index * 100)}
          exiting={FadeOut}
          layout={LinearTransition.springify()}>

          <Card style={styles.container} key={index}>
            <Link href={{
              pathname:"/profile",
              params: {userName: user.name, userEmail: user.email, userImage: user.fotourl }
            }} push asChild>

            <TouchableOpacity style={styles.card}>

              <Card.Content>

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
                <Text variant="titleMedium" style={styles.boldtext}>{user.name}</Text>
                <Text variant="bodyMedium">{user.email}</Text>
              </View>
              </Card.Content>
            </TouchableOpacity>
          </Link>
        </Card>
        </Animated.View>
        ))}
      </ScrollView>
    </>
  );
}