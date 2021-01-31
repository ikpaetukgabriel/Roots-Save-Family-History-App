import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { Button } from 'react-native-paper';
import HomeScreenCard from '../components/HomeScreenCard';

const backgroundImage = '../../assets/backGround.png';
const HomeScreen = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<ImageBackground source={require(backgroundImage)} style={styles.image}>
				<HomeScreenCard />
				<View style={styles.buttonContainer}>
					<Button
						style={styles.button}
						mode="contained"
						onPress={() => navigation.navigate('Add')}
						contentStyle={{ height: 50 }}
					>
						<Text>Add Relative</Text>
					</Button>
					<Button
						style={styles.button}
						mode="contained"
						onPress={() => navigation.navigate('View')}
						contentStyle={{ height: 50 }}
					>
						<Text>View Relatives</Text>
					</Button>
				</View>
			</ImageBackground>
		</View>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	image: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'space-around'
	},
	buttonContainer: {
		height: 400,
		justifyContent: 'center'
	},
	button: {
		backgroundColor: '#75ad68',
		width: 300,
		height: 50,
		margin: 10,
		justifyContent: 'center',
		borderRadius: 10
	}
});
