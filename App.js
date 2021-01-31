import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import AddRelativeScreen from './src/screens/AddRelativeScreen';
import ViewRelativesScreen from './src/screens/ViewRelativesScreen';
const navigator = createStackNavigator(
	{
		Home: HomeScreen,
		Add: AddRelativeScreen,
		View: ViewRelativesScreen
	},
	{
		initialRouteName: 'Home',
		defaultNavigationOptions: {
			title: 'RootSave',
			headerTintColor: '#ffffff',
			headerStyle: {
				backgroundColor: '#75ad68'
			},
			headerTitleStyle: {
				fontSize: 18
			}
		}
	}
);

export default createAppContainer(navigator);
