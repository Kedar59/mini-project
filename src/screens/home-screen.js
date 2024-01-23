import { View , Text , StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
    const navigation = useNavigation();
    return (
        <View style = { styles.screen }>
            <Text>Home Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    screen : {
        padding : 20,
    }
})

export default HomeScreen;