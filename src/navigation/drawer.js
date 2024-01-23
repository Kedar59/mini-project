import { createDrawerNavigator } from "@react-navigation/drawer";
import LoginScreen from "../screens/login";
import HomeScreen from "../screens/home-screen";
import RegisterScreen from "../screens/register";
const Drawer = createDrawerNavigator();

export const MyDrawer = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Login" component={LoginScreen} />
	  <Drawer.Screen name="Register" component={RegisterScreen} />
    </Drawer.Navigator>
  );
};
