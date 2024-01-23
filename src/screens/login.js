import { View , Text , StyleSheet , TextInput , Button } from "react-native";

const LoginScreen = () => {
    return (
        <View style = { styles.screen }>
            <Text> Login Screen </Text>
            <Text> Email ID </Text>
            <TextInput placeholder="Email" style={styles.textInput} ></TextInput>
            <Text> Password </Text>
            <TextInput placeholder="Password"  style={styles.textInput} ></TextInput>
            <Button title="Login" ></Button>
        </View>
    );
}

const styles = StyleSheet.create({
    screen : {
        padding : 20,
    },
    textInput : {
        padding : 4,
        borderWidth : 1,
    }
})

export default LoginScreen;