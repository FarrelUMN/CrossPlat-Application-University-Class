import {Link} from "expo-router";
import {Text, View, Button} from "react-native";

export default function home(){
    return(
        <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
            <Text>Navigation List</Text>
            <Text>{'\n'}</Text>
                <Link href={"/email"} push asChild>
                <Button title="Go to Email Screen"/>
                </Link>
            <Text>{'\n'}</Text>
                <Link href={"/userslist"} push asChild>
                <Button title="Go to User List"/>
                </Link>
        </View>
    );
}