import {Link, useLocalSearchParams} from "expo-router";
import {Button, View, Text, Image} from "react-native";
import styles from "./appstyle";

export default function home() {
    const {userName, userEmail, userImage} = useLocalSearchParams<{ userName: string ; userEmail: string; userImage: string}>();
    return(
        <View style={styles.container}>
            <Image
                source={{ uri: userImage }}
                style={styles.avatar}
                />
            <Text>{userName}&apos;s profile and {"\n"}</Text>
            <Text>{userEmail}{"\n"}</Text>
            <Link href="/home" push asChild>
            <Button title="Go to Home Screen"/>
            </Link>
        </View>
    );
}