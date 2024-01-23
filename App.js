import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
// import { HomeStack } from "./src/navigation/stack";
import { MyDrawer } from './src/navigation/drawer';
// import stylesGlobal from "./src/globalStyles/stylesGlobal";
export default function App() {
  return (
	<NavigationContainer>
  		{/* <HomeStack /> */}
		<MyDrawer />
	</NavigationContainer>
  );
}