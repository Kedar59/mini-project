import { createStackNavigator } from "@react-navigation/stack";
import EventDetailsScreen from "../screens/event-details";
import HomeScreen from "../screens/home-screen";

const Stack = createStackNavigator();
export const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component = { HomeScreen } />
            <Stack.Screen name="Event" component = { EventDetailsScreen } />
        </Stack.Navigator>
    );
}